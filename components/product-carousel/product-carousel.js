import GliderComponent from 'react-glider-carousel';
import ProductInfo from './productInfo';

const ProductCarousel = ({ data }) => {
  let productSlides = data.productslides[0].slideData;
  return (
    <div className="box-border flex flex-col items-center w-full py-10 my-1 shadow-xl bg-primary">
      <h2 className="mt-5 mb-16 text-5xl font-light text-white font-primary">
        {data.sectionTitle}
      </h2>

      {/* GliderComponent */}
      <GliderComponent hasDots={true}>
        {productSlides.map((productData) => {
          let product = productData.content.productBanner[0];
          return <ProductInfo product={product} />;
        })}
      </GliderComponent>
    </div>
  );
};

export default ProductCarousel;
