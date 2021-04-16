import Link from 'next/link';

const NavBar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>People</h1>
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/people">
        <a>People Listing</a>
      </Link>
    </nav>
  );
};

export default NavBar;
