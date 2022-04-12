import Link from "next/link";
const Menu = () => {
  return (
    <>
      <ul>
        <Link href="/products">
          <li>Produits</li>
        </Link>
        <hr />
        <Link href="/groups">
          <li>Groupes</li>
        </Link>
        <hr />
        <Link href="/projects">
          <li>Projets</li>
        </Link>
        <hr />
        <Link href="/about">
          <li>About</li>
        </Link>
      </ul>
    </>
  );
};

export default Menu;
