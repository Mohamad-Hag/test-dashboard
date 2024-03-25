
import { BsPeople } from "react-icons/bs";
import Card from "./Card";
import { AiOutlineDashboard } from "react-icons/ai";
import { GoPackage } from "react-icons/go";

export default function CardsContainer() {
  return (
    <div className="flex items-center justify-stretch w-full gap-4">
      <Card title="Users" value="100" icon={<BsPeople size={40} />} />
      <Card title="Products" value="300" icon={<GoPackage size={40} />} featured={true} />
      <Card title="Users" value="100" icon={<BsPeople size={40} />} />
    </div>
  );
}
