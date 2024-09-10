import Link from "next/link";
import { Button } from "./ui/button";

// components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 text-white xl:py-12 ">
      <div className="container flex items-center justify-between mx-auto">
        {/* logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Buhle<span className="text-accent">.</span>
          </h1>
        </Link>

        {/* Desktop nav & Hire me button */}
        <div className="items-center hidden gap-8 xl:flex">
          <Nav />
          
          <a href="mailto:ngqongwabuhle@gmail.com?subject=Interest%20in%20Hiring">
            <Button>Hire me</Button>
          </a>
        </div>

        {/* Mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
        
      </div>
    </header>
  );
};

export default Header;
