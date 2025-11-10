import { Link } from "react-router";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="navbar shadow-md">
      <div className="container mx-auto flex items-center justify-between py-2">
        <Link to="/" className="flex items-center space-x-2">
          <img src="/logo.png" alt="Logo" className="h-10 w-10 rounded-full" />
          <span className="font-bold text-xl">KrishiLink</span>
        </Link>

        <Navbar />
      </div>
    </header>
  );
};

export default Header;
