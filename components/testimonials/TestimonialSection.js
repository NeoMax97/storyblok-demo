import Testimonial from './Testimonial';

const TestimonialSection = ({ data }) => {
  const testimonials = data;

  return (
    <div className="flex flex-col items-center px-5 py-20 space-y-5 bg-gray-100 md:px-40 font-primary">
      <h2 className="my-5 text-2xl text-primary md:text-6xl">
        {testimonials.title}
      </h2>
      {testimonials.testimonial.map((item, i) => (
        <Testimonial data={item} key={i} />
      ))}
    </div>
  );
};

export default TestimonialSection;
