import { Link, NavLink } from "react-router";
import { HiMiniBars3, HiMiniXMark } from "react-icons/hi2";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import alert from "../../../lib/utils/alert";
import { logoutUser } from "../../../services/firebase";
import { useAuth } from "../../../providers/AuthProvider";
import useToggle from "../../../hooks/useToggle";

import Loader from "../../shared/Loader";
import UserDropdown from "../../shared/UserDropdown";
import ThemeToggler from "../../shared/ThemeToggler";

const publicRoutes = [
  { name: "Home", path: "/" },
  { name: "All Crops", path: "/crops" },
  { name: "Terms", path: "/terms-and-conditions" },
];

const privateRoutes = [
  { name: "Home", path: "/" },
  { name: "All Crops", path: "/crops" },
  { name: "Add Crop", path: "/dashboard/add-crop" },
  { name: "My Crops", path: "/dashboard/my-crops" },
  { name: "My Interests", path: "/dashboard/my-interests" },
  { name: "Terms", path: "/terms-and-conditions" },
];

const Navbar = () => {
  const { authIsReady, user, clearUser } = useAuth();
  const { value: menuOpen, toggle: toggleMenuOpen } = useToggle(false);
  const routes = user ? privateRoutes : publicRoutes;

  const handleAuthResult = (success, message) => {
    if (success) {
      clearUser();
      alert.info("Logged Out!", `You are successfully logged out.`);
    } else {
      alert.error("Oops!", message);
    }
  };

  const handleLogout = async () => {
    const { success, message } = await logoutUser();
    handleAuthResult(success, message);
  };

  if (!authIsReady) return <Loader />;

  return (
    <nav className="flex flex-1 items-center justify-between">
      {/* Navigation Container */}
      <ul
        className={`absolute md:static top-full left-0 w-full md:w-auto min-h-screen md:min-h-auto bg-base-100 md:bg-transparent flex flex-col md:flex-row items-center gap-6 p-8 md:p-0 transition-all duration-300 ease-in-out z-50 flex-1 md:justify-center ${
          menuOpen ? "block" : "hidden md:flex"
        }`}
      >
        {/* Links Centered on Desktop */}
        {routes.map((route) => (
          <li key={route.name} onClick={() => toggleMenuOpen(false)}>
            <NavLink
              to={route.path}
              className={({ isActive }) =>
                `block transition-colors duration-300 relative ${
                  isActive ? "text-primary font-semibold" : "hover:text-accent"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {route.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full hidden md:block"
                    />
                  )}
                </>
              )}
            </NavLink>
          </li>
        ))}

        <li onClick={() => toggleMenuOpen(false)} className="md:hidden">
          <Link
            to="/login"
            className="btn btn-primary btn-outline btn-sm font-bold"
          >
            Login
          </Link>
        </li>
        <li onClick={() => toggleMenuOpen(false)} className="md:hidden">
          <Link to="/register" className="btn btn-primary btn-sm">
            Register
          </Link>
        </li>
      </ul>

      {/* Buttons and Theme Toggle Stay on the Right */}
      <div className="w-fit ml-auto flex items-center gap-2">
        <ThemeToggler />

        {/* User Actions */}
        <div>
          {user ? (
            <UserDropdown user={user} onLogout={handleLogout} />
          ) : (
            <div className="hidden md:flex items-center gap-2">
              <Link
                to="/login"
                className="btn btn-primary btn-outline btn-sm font-bold"
              >
                Login
              </Link>
              <Link to="/register" className="btn btn-primary btn-sm">
                Register
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => toggleMenuOpen()}
          className="md:hidden btn btn-sm btn-ghost btn-square"
        >
          {menuOpen ? <HiMiniXMark size={22} /> : <HiMiniBars3 size={22} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
