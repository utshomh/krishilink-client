import { use } from "react";

import { ThemeContext } from "../providers/ThemeProvider";

const useTheme = () => {
  const context = use(ThemeContext);

  if (!context)
    throw new Error("useTheme is only usable inside the ThemeContext");

  return context;
};

export default useTheme;
