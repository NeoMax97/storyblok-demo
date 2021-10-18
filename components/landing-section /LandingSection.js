import SbEditable from 'storyblok-react';
import Button from '../button/Button';

const LandingSection = ({ data }) => {
  const landing = data;
  return (
    <SbEditable content={data}>
      <div className="flex flex-col items-center w-full px-5 md:space-x-10 sm:space-x-0 md:pl-40 md:flex-row">
        <div className="w-full md:w-2/4 font-primary">
          <div className="w-28 h-1.5 bg-primary my-4"></div>
          <h2 className="text-2xl md:text-6xl text-primary">{landing.title}</h2>
          <p className="text-base font-semibold leading-7 break-words md:text-lg my-7">
            {landing.content}
          </p>
          <Button extraClasses="mb-5" data={landing.button[0]} />
        </div>

        <div>
          <img
            src={landing.image[0].imageUrl}
            alt={landing.image[0].imageAlt}
          />
        </div>
      </div>
    </SbEditable>
  );
};

export default LandingSection;
