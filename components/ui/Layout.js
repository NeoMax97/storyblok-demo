import Header from '../header/header';
import Footer from '../footer/Footer';

export default function Layout({ data, children }) {
  return (
    <div className="m-auto">
      {/* <Header data={data[0]} /> */}
      <Header data={data.header.content} />
      <main>{children}</main>
      <Footer data={data.footer.content} />
    </div>
  );
}
