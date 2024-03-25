import { useState } from "react";
import themeMap from "../../data/themeMap";

const useTheme = () => {
  const storageTheme = localStorage.getItem("theme");
  const initialTheme = storageTheme ? storageTheme : "light";
  const [theme, setTheme_] = useState(initialTheme);

  const setTheme = (theme_) => {
    let documentElement = document.documentElement;

    for (let item of themeMap)
      documentElement.style.setProperty(item.property, item[theme_]);

    
    localStorage.setItem("theme", theme_);
    setTheme_(theme_);
  };

  return { theme, setTheme };
};

export default useTheme;
