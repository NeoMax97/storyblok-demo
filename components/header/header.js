import { useState } from 'react';

const Header = ({ data }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="relative">
      <div className="box-border flex justify-between px-8 py-4 bg-white shadow-sm">
        <img src={data.logo[0].imageUrl} />
        {/* Regular Menu */}
        <div
          className={`flex items-center space-x-4 ${
            data.hamburger ? 'hidden' : ''
          }`}
        >
          {data.menu[0].links.map((link) => (
            <a href={link.linkUrl} key={link.linkText}>
              {link.linkText}
            </a>
          ))}
        </div>
        {/* Hamburger Menu */}
        <div className={`flex items-center ${data.hamburger ? '' : 'hidden'}`}>
          <img
            className="w-6 h-auto"
            src={data.menuIcon[0].imageUrl}
            onClick={() => setExpanded(true)}
          />
        </div>
      </div>
      <div
        className={`absolute top-0 left-0 flex items-center justify-center w-full h-screen bg-black opacity-90 ${
          !expanded ? 'hidden' : ''
        }`}
      >
        <div className="absolute top-10 right-10">
          <p
            className="text-3xl text-white"
            onClick={() => {
              setExpanded(false);
            }}
          >
            X
          </p>
        </div>
        <div className="flex flex-col items-center space-y-8">
          {data.menu[0].links.map((link) => (
            <a className="text-white" href={link.linkUrl} key={link.linkText}>
              {link.linkText}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
  //   return <h1>Header</h1>;
};

export default Header;

export async function getStaticProps({ params, preview = false }) {
  let slug = params.slug ? params.slug.join('/') : 'home';

  let sbParams = {
    version: 'draft', // or published
    cv: Date.now(),
    starts_with: 'components/',
  };

  if (preview) {
    sbParams.version = 'draft';
    sbParams.cv = Date.now();
  }

  // load the stories insides the pages folder
  let { data } = await Storyblok.get(`cdn/stories/${slug}`, sbParams);

  return {
    props: {
      story: data ? data : null,
      preview,
    },
    revalidate: 3600, // revalidate every hour
  };
}

export async function getStaticPaths() {
  let { data } = await Storyblok.get('cdn/links/', {
    starts_with: 'components/',
    version: 'draft',
  });
  let paths = [];
  Object.keys(data.links).forEach((linkKey) => {
    // don't create routes for folders and the index page
    if (data.links[linkKey].is_folder) {
      return;
    }

    // get array for slug because of catch all
    const slug = data.links[linkKey].slug;
    // remove the pages part from the slug
    let newSlug = slug.replace('components', '');
    let splittedSlug = newSlug.split('/').filter((path) => path != '');
    paths.push({ params: { slug: splittedSlug } });
  });
  return {
    paths: paths,
    fallback: false,
  };
}
