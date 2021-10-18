import SbEditable from 'storyblok-react';

const Testimonial = ({ data }) => {
  return (
    <SbEditable content={data}>
      <div className="flex flex-col items-center max-w-4xl space-x-5 space-y-5 bg-white shadow-md md:space-y-0 md:flex-row p-7">
        <div className="">
          <img
            className="rounded-full w-44"
            src={data.image[0].imageUrl}
            alt={data.image[0].imageAlt}
          />
        </div>
        <p className="text-sm italic leading-6">{data.text}</p>
      </div>
    </SbEditable>
  );
};

export default Testimonial;
