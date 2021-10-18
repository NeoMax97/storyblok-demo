import styles from './product-carousel.module.css';
import { render } from 'storyblok-rich-text-react-renderer';

const productInfo = ({ product }) => {
  return (
    <div>
      <div className="box-border flex bg-white rounded-xl" key={product._uid}>
        <img
          className="h-full w-80 rounded-l-xl"
          src={product.productImage[0].imageUrl}
        />
        <div
          className={`box-border p-8 space-y-4 font-primary ${styles.productSlideContent}`}
        >
          {render(product.productDescription)}
        </div>
      </div>
    </div>
  );
};

export default productInfo;
