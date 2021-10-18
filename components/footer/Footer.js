import Link from "next/link";
import Menu from "../menu/Menu";

const Footer = ({ data }) => {
  return (
    <footer className="px-10 pt-16 bg-primary md:px-40">
      <div className="flex flex-col justify-between pb-10 text-white md:flex-row">
        <h2 className="text-3xl italic">LOGO</h2>
        <Menu data={data.menu1[0]} />

        <Menu data={data.menu2[0]} />

        <Menu data={data.menu3[0]} />
      </div>

      <div className="flex flex-col py-8 md:flex-row md:justify-between md:items-center">
        <p className="text-xs font-thin text-white">
          Copyright @ 2021 |{" "}
          <Link href="/">
            <a className="text-white hover:underline">Privacy</a>
          </Link>{" "}
          |{" "}
          <Link href="/">
            <a className="text-white hover:underline">Legal Notices</a>
          </Link>
        </p>
        <div className="mt-5 text-white md:mt-0">
          <i className="fa fa-facebook" aria-hidden="true"></i>
          <i className="px-4 fa fa-twitter" aria-hidden="true"></i>
          <i className="fa fa-youtube" aria-hidden="true"></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

Footer.getInitialProps = async () => {
  // Fetch data for Header & Footer
  let { data } = await Storyblok.get(`cdn/stories/components/footer/footer`, {
    version: "draft",
    cv: Date.now(),
  });
  return {
    layout: data.story,
  };
};
