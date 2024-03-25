import { useContext } from "react";
import DataTableContext from "../../contexts/DataTableContext";

export default function TableHeaders() {
  const { table } = useContext(DataTableContext);
  const headers = table.headers;

  return (
    <tr className="table-row border-2 h-12 bg-ac">
      {headers &&
        headers.map((header) => (
          <th key={header} className="border-2 px-5">
            {header}
          </th>
        ))}
    </tr>
  );
}
