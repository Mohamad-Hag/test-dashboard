import { useContext } from "react";
import TableHeaders from "./TableHeaders";
import TableRows from "./TableRows";
import DataTableContext from "../../contexts/DataTableContext";
import Loader from "../ui/Loader";

export default function Table() {
  const { table } = useContext(DataTableContext);

  console.log(table[0]);
  if (table[0] === 0)
    return (
      <div className="flex items-center justify-center h-52">
        <Loader />
      </div>
    );

  if (table.data && table.data.length === 0) return <h3>No Data Found...</h3>;

  return (
    <div className="w-full overflow-auto">
      <table className="table-auto w-full text-left border-2 px border-collapse">
        <TableHeaders />
        <TableRows />
      </table>
    </div>
  );
}
