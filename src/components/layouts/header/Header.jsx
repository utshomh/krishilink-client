import Navbar from "./Navbar";
import Logo from "../../shared/Logo";

const Header = () => {
  return (
    <header className="navbar shadow-md">
      <div className="container mx-auto flex items-center justify-between py-2">
        <Logo />

        <Navbar />
      </div>
    </header>
  );
};

export default Header;
