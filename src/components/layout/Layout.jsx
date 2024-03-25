import { useEffect } from "react";
import ThemeContext from "../../contexts/ThemeContext";
import useTheme from "../hooks/useTheme";

export default function Layout(props) {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    let theme_ = localStorage.getItem("theme");

    if (theme_ === "undefined" || theme) localStorage.setItem("theme", theme);
    else setTheme(theme_);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="h-full w-full flex flex-col">
        {/* Header */}
        <div className="px-10 py-5">{props.children[0]}</div>

        <div className="flex flex-1">
          {/* Sidebar */}
          <div className="min-w-72 py-5 bg-ac-trn rounded-t-2xl shadow-sm">
            {props.children[1]}
          </div>
          {/* Main */}
          <main
            className="flex-1 px-10 py-5 container mt-0 mb-0 ml-auto mr-auto overflow-auto"
            style={{
              height: "calc(100vh - 80px)",
              maxHeight: "calc(100vh - 80px)",
            }}
          >
            {props.children[2]}
          </main>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}
