import { Link, NavLink } from "react-router";
import { HiMiniBars3, HiMiniXMark } from "react-icons/hi2";

import alert from "../../../lib/utils/alert";
import { logoutUser } from "../../../services/firebase";
import { useAuth } from "../../../providers/AuthProvider";
import useTheme from "../../../hooks/useTheme";
import useToggle from "../../../hooks/useToggle";

import Loader from "../../shared/Loader";
import { BiMoon, BiSun } from "react-icons/bi";

const publicRoutes = [
  { name: "Home", path: "/" },
  { name: "All Crops", path: "/crops" },
];

const privateRoutes = [
  { name: "Home", path: "/" },
  { name: "All Crops", path: "/crops" },
  // { name: "Profile", path: "/profile" },
  // { name: "Add Crops", path: "/add-crop" },
  // { name: "My Crops", path: "/my-crops" },
  // { name: "My Interests", path: "/my-interests" },
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
    <nav>
      <button
        onClick={() => toggleMenuOpen()}
        className="md:hidden btn btn-sm btn-ghost"
      >
        {menuOpen ? <HiMiniXMark size={22} /> : <HiMiniBars3 size={22} />}
      </button>

      <ul
        className={`absolute md:static top-full left-0 w-full md:w-auto min-h-screen md:min-h-auto bg-base-100 md:bg-transparent flex flex-col md:flex-row items-center gap-4 p-8 md:p-0 transition-all duration-300 ease-in-out overflow-hidden z-50 ${
          menuOpen ? "block" : "hidden md:flex"
        }`}
      >
        {routes.map((route) => (
          <li key={route.name} onClick={() => toggleMenuOpen(false)}>
            <NavLink
              to={route.path}
              className={({ isActive }) =>
                `block py-1 transition-colors duration-300 ${
                  isActive ? "text-primary font-semibold" : "hover:text-accent"
                }`
              }
            >
              {route.name}
            </NavLink>
          </li>
        ))}

        <li className="tooltip">
          <div className="tooltip-content">
            <p>Toggle Theme</p>
          </div>
          <button
            onClick={toggleTheme}
            className="btn btn-outline btn-square btn-sm mt-2 md:mt-0"
          >
            {theme === "krishilink-light" ? (
              <BiMoon className="text-lg" />
            ) : (
              <BiSun className="text-lg" />
            )}
          </button>
        </li>

        <div>
          {user ? (
            <div className="dropdown dropdown-end">
              <button
                tabIndex="1"
                role="button"
                className="btn btn-ghost btn-circle avatar border-3 border-transparent hover:border-accent transition-colors duration-500 ease-in-out"
              >
                <div className="w-10 rounded-full">
                  <img src={user.photoURL} />
                </div>
              </button>
              <ul
                tabIndex="1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-4 w-52 p-2 shadow-md gap-2"
              >
                <Link to="/dashboard/profile" className="btn btn-sm btn-accent">
                  Profile
                </Link>
                <button className="btn btn-error btn-sm" onClick={handleLogout}>
                  Logout
                </button>
              </ul>
            </div>
          ) : (
            <div className="w-fit flex items-center gap-2">
              <Link
                to="/login"
                className="btn btn-primary btn-outline font-bold"
              >
                Login
              </Link>
              <Link to="/register" className="btn btn-primary">
                Register
              </Link>
            </div>
          )}
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
