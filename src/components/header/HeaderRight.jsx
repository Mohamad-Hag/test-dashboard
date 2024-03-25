import Button from "../ui/Button";
import { MdOutlineLocalPhone } from "react-icons/md";
import { LuHelpCircle } from "react-icons/lu";
import { BsFillMoonFill, BsSunFill } from "react-icons/bs";
import useTheme from "../hooks/useTheme";

export default function HeaderRight() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    console.log(theme);
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="flex gap-2">
      <button
        className="h-10 w-10 flex items-center justify-center rounded-sm hover:bg-sec"
        onClick={toggleTheme}
      >
        {theme === "light" ? <BsFillMoonFill /> : <BsSunFill />}
      </button>
      <Button icon={<MdOutlineLocalPhone />}>Contact</Button>
      <Button icon={<LuHelpCircle />} type="secondary">
        Help
      </Button>
    </div>
  );
}
