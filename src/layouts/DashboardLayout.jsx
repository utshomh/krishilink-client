import { Suspense } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { LuPlus, LuLeaf, LuHeart, LuLayoutDashboard } from "react-icons/lu";
import { NavLink, Outlet, useLocation, useOutlet } from "react-router";

import alert from "../lib/utils/alert";
import { useAuth } from "../providers/AuthProvider";
import { logoutUser } from "../services/firebase";
import { getStats } from "../services/api";

import Logo from "../components/shared/Logo";
import Loader from "../components/shared/Loader";
import UserDropdown from "../components/shared/UserDropdown";
import ThemeToggler from "../components/shared/ThemeToggler";
import Overview from "../components/dashboard/Overview";

const routes = [
  {
    name: "Overview",
    path: "/dashboard",
    icon: <LuLayoutDashboard className="text-xl" />,
  },
  {
    name: "Add Crop",
    path: "/dashboard/add-crop",
    icon: <LuPlus className="text-xl" />,
  },
  {
    name: "My Crops",
    path: "/dashboard/my-crops",
    icon: <LuLeaf className="text-xl" />,
  },
  {
    name: "My Interests",
    path: "/dashboard/my-interests",
    icon: <LuHeart className="text-xl" />,
  },
];

const DashboardLayout = () => {
  const outlet = useOutlet();
  const { pathname } = useLocation();
  const { authIsReady, user, clearUser } = useAuth();

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
    <div className="drawer lg:drawer-open bg-base-100 gap-1">
      <input id="drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content space-y-1">
        <nav className="flex items-center justify-between py-4 px-2 w-full bg-base-300 rounded-b-2xl">
          <div className="flex items-center gap-2">
            <label
              htmlFor="drawer"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <HiMenuAlt2 className="text-xl" />
            </label>
            <Logo />
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggler />
            <UserDropdown user={user} onLogout={handleLogout} />
          </div>
        </nav>

        <div className="p-4 bg-base-200 rounded-t-2xl min-h-screen">
          {outlet ? (
            <Outlet />
          ) : (
            <Suspense fallback={<Loader size="lg" />}>
              <Overview statsPromise={getStats()} />
            </Suspense>
          )}
        </div>
      </div>

      <div className="drawer-side is-drawer-close:overflow-visible">
        <label
          htmlFor="drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="flex min-h-screen flex-col items-start bg-base-300 is-drawer-close:w-14 is-drawer-open:w-64">
          <ul className="menu w-full grow gap-1">
            {routes.map((route, i) => {
              const isCustomActive =
                pathname === route.path ||
                (route.path !== "/dashboard" &&
                  pathname.startsWith(route.path));

              return (
                <li key={i}>
                  <NavLink
                    to={route.path}
                    className={`
              flex items-center gap-4 py-2 px-4 rounded-lg transition-all
              ${
                isCustomActive
                  ? "bg-primary text-primary-content shadow-md"
                  : "hover:bg-base-300"
              }
              is-drawer-close:justify-center is-drawer-close:px-0
            `}
                  >
                    {route.icon}
                    <span className="is-drawer-close:hidden">{route.name}</span>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
