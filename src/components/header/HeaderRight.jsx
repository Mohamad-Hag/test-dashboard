import Button from "../ui/Button";
import { MdOutlineLocalPhone } from "react-icons/md";
import { LuHelpCircle } from "react-icons/lu";

export default function HeaderRight() {
  return (
    <div className="flex gap-2">
      <Button icon={<MdOutlineLocalPhone />}>Contact</Button>
      <Button icon={<LuHelpCircle />} type="secondary">
        Help
      </Button>
    </div>
  );
}
