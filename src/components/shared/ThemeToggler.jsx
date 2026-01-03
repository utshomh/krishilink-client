import { BiMoon, BiSun } from "react-icons/bi";

import useTheme from "../../hooks/useTheme";

const ThemeToggler = () => {
  const { theme, toggleTheme } = useTheme();

  return (
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
  );
};

export default ThemeToggler;
