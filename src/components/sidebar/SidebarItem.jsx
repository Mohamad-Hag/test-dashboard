import { Link } from "react-router-dom";

export default function SidebarItem(props) {
  const { to, icon, text } = props;

  return (
    <li className="h-12 text-xl items-center flex px-10 hover:bg-ac">
      <Link className="w-full flex gap-3 items-center" to={to}>
        {icon}
        {text}
      </Link>
    </li>
  );
}
