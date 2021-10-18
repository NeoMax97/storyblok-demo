import SbEditable from 'storyblok-react';

const Button = ({ data, extraClasses }) => {
  return (
    <SbEditable content={data}>
      <div
        className={`box-border flex items-center justify-center px-6 py-3 m-0 rounded-md bg-primary w-max ${extraClasses}`}
      >
        <a href={data.url} className="tracking-wider text-white uppercase">
          {data.text}
        </a>
      </div>
    </SbEditable>
  );
};

export default Button;
