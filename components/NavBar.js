import Link from 'next/link';
import Image from 'next/image';

const NavBar = () => {
  return (
    <nav>
      <div className="logo">
        {/* Img component optimises image and donloads when it is visible on the sreen */}
        <Image src="/logo.svg" width={128} height={77} />
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
