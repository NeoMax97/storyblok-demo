import SbEditable from 'storyblok-react';
import Placeholder from './Placeholder';
import LandingSection from '../landing-section /LandingSection';
import TestimonialSection from '../testimonials/TestimonialSection';
import ProductCarousel from '../product-carousel/product-carousel';

const Components = {
  landing: LandingSection,
  productCarousel: ProductCarousel,
  testimonials: TestimonialSection,
};

const DynamicComponent = ({ blok }) => {
  if (typeof Components[blok.component] !== 'undefined') {
    const Component = Components[blok.component];
    return (
      <SbEditable content={blok}>
        <Component data={blok} />
      </SbEditable>
    );
  }

  return <Placeholder componentName={blok.component} />;
};

export default DynamicComponent;
