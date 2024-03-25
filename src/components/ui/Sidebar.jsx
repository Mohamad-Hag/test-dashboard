import SidebarItem from "../sidebar/SidebarItem";
import { GoHome } from "react-icons/go";
import { BsPeople } from "react-icons/bs";
import { GoPackage } from "react-icons/go";

export default function Sidebar() {
  return (
    <ul>
      <SidebarItem
        text="Home"
        to="/"
        icon={<GoHome className="fill-ac-sec" />}
      />
      <SidebarItem
        text="Users"
        to="/users"
        icon={<BsPeople className="fill-ac-sec" />}
      />
      <SidebarItem
        text="Products"
        to="/products"
        icon={<GoPackage className="fill-ac-sec" />}
      />
    </ul>
  );
}
