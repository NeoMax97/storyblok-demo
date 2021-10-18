import Head from 'next/head';
import Storyblok, { useStoryblok } from '../lib/storyblok';
import SbEditable from 'storyblok-react';
import DynamicComponent from '../components/dynamic-component/DynamicComponent';

export default function Home(props) {
  let story = useStoryblok(props.story, props.preview, 'en');
  const components = story.content.body;

  return (
    <div className="">
      <Head>
        <title>Storyblok|NEXT</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SbEditable content={props}>
        <main className="">
          {components.map((comp, index) => {
            return (
              <DynamicComponent blok={comp} key={comp.component + index} />
            );
          })}
        </main>
      </SbEditable>
    </div>
  );
}

export async function getStaticProps(context) {
  let slug = 'home';

  let params = {
    version: 'draft', // or 'published'
    cv: Date.now(),
  };

  if (context.preview) {
    params.version = 'draft';
    params.cv = Date.now();
  }

  let { data } = await Storyblok.get(`cdn/stories/${slug}`, params);

  let newData = await getNewData(data);

  return {
    props: {
      story: newData ? newData.story : false,
      preview: context.preview || false,
    },
    revalidate: 3600,
  };
}

export async function getNewData(data) {
  // Fetching and Parsing Posts
  let newData = JSON.parse(JSON.stringify({ ...data }));
  let body = newData.story.content.body;
  let postsComponentIndex = body.findIndex(
    (item) => item.component == 'productCarousel',
  );
  if (postsComponentIndex == -1) return;
  let postsComponent = body[postsComponentIndex];

  for (let item in postsComponent) {
    if (Array.isArray(postsComponent[item]) && postsComponent[item].length) {
      let child = postsComponent[item][0];
      if (child['component'] == 'productsAPI') {
        child['slideData'] = await addPosts(child).then(
          (res) => res.data.stories,
        );
      }
    }
  }
  return newData;
}

async function addPosts(component) {
  let posts = await Storyblok.get(`cdn/stories`, {
    by_uuids: component.products.join(','),
    version: 'draft',
  });
  return posts;
}
