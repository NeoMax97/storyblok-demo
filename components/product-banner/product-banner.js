import SbEditable from 'storyblok-react';
import { render } from 'storyblok-rich-text-react-renderer';
import ProductFeature from '../product-feature/product-feature';
import styles from './product-banner.module.css';

const ProductBanner = ({ data }) => {
  return (
    <SbEditable content={data}>
      <div className="flex justify-center p-20 px-40 space-x-8 text-white font-primary bg-primary">
        <div className="w-full">
          <img
            className="object-cover w-full h-full"
            src={data.productImage[0].imageUrl}
            alt={data.productImage[0].imageAlt}
          />
        </div>

        <div className="w-full space-y-12">
          <div className={`w-full  ${styles.productDescription}`}>
            {render(data.productDescription)}
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-8">
            {data.productFeatures.map((feature) => (
              <ProductFeature data={feature} />
            ))}
          </div>
        </div>
      </div>
    </SbEditable>
  );
};

export default ProductBanner;
