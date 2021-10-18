import ProductBanner from '../../components/product-banner/product-banner';
import TestimonialSection from '../../components/testimonials/TestimonialSection';
import Storyblok from '../../lib/storyblok';

const Product = (props) => {
  let content = props.stories.story.content;

  return (
    <div>
      {/* <h1>Products</h1> */}
      <ProductBanner data={content.productBanner[0]} />
      <TestimonialSection data={content.productTestimonial[0]} />
    </div>
  );
};

export default Product;

export async function getStaticProps({ params, preview }) {
  let slug = params.product ? params.product : 'home';

  let sbParams = {
    version: 'draft', // or 'published'
    cv: Date.now(),
  };

  if (preview) {
    sbParams.version = 'draft';
    sbParams.cv = Date.now();
  }

  let { data } = await Storyblok.get(`cdn/stories/products/${slug}`, sbParams);

  let retData = data;

  return {
    props: {
      stories: retData ? retData : false,
      preview: preview || false,
    },
    revalidate: 3600,
  };
}

export async function getStaticPaths() {
  let { data } = await Storyblok.get('cdn/links/', {
    starts_with: 'products/',
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
    let newSlug = slug.replace('products', '');
    let splittedSlug = newSlug.split('/')[1];

    paths.push({ params: { product: splittedSlug } });
  });
  return {
    paths: paths,
    fallback: false,
  };
}
