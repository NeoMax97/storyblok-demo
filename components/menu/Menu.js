import Link from "next/link";

const Menu = ({ data }) => {
  return (
    <nav className="mb-5">
      <h5 className="mb-2 font-semibold leading-loose text-secondary">
        {data.title}
      </h5>
      <ul>
        {data.links?.map((link, i) => (
          <li key={i}>
            <Link href={link.url}>
              <a className="text-xs font-light text-white hover:underline">
                {link.title}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
