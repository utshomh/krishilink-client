import { Link, NavLink } from "react-router";
import { HiMiniBars3, HiMiniXMark } from "react-icons/hi2";
import { BiMoon, BiSun } from "react-icons/bi";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import alert from "../../../lib/utils/alert";
import { logoutUser } from "../../../services/firebase";
import { useAuth } from "../../../providers/AuthProvider";
import useTheme from "../../../hooks/useTheme";
import useToggle from "../../../hooks/useToggle";

import Loader from "../../shared/Loader";

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
  const { theme, toggleTheme } = useTheme();
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
        <div className="tooltip tooltip-bottom" data-tip="Toggle Theme">
          <button
            onClick={toggleTheme}
            className="btn btn-outline btn-square btn-sm"
          >
            {theme === "krishilink-light" ? (
              <BiMoon className="text-lg" />
            ) : (
              <BiSun className="text-lg" />
            )}
          </button>
        </div>

        {/* User Actions */}
        <div>
          {user ? (
            <div className="dropdown dropdown-end">
              <button
                tabIndex="1"
                role="button"
                className="btn btn-ghost btn-circle avatar border-3 border-transparent hover:border-accent transition-colors duration-500 ease-in-out"
              >
                <div className="w-10 rounded-full">
                  <img src={user.photoURL} alt="profile" />
                </div>
              </button>
              <ul
                tabIndex="1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-4 w-52 p-2 shadow-md gap-2"
              >
                <Link to="/dashboard" className="btn btn-sm btn-accent">
                  Dashboard
                </Link>
                <button className="btn btn-error btn-sm" onClick={handleLogout}>
                  Logout
                </button>
              </ul>
            </div>
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
