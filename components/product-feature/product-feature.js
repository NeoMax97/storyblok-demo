import SbEditable from 'storyblok-react';

const ProductFeature = ({ data }) => {
  return (
    <SbEditable content={data}>
      <div className="flex items-center space-x-4">
        <img
          src={data.featureImage[0].imageUrl}
          alt={data.featureImage[0].imageAlt}
        />
        <p>ProductFeature</p>
      </div>
    </SbEditable>
  );
};

export default ProductFeature;
