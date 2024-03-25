import { useContext } from "react";
import DataTableContext from "../../contexts/DataTableContext";

export default function TableRows() {
  const { table, isFilterMode, filteredTable } = useContext(DataTableContext);
  const data = isFilterMode ? filteredTable.data : table.data;

  return (
    <>
      {data &&
        data.map((row, index) => (
          <tr key={index} className="hover:bg-ac-trn h-8">
            {row.map((cell, index) => (
              <td key={index} className="border-2 border-ac-trn px-5">
                {cell}
              </td>
            ))}
          </tr>
        ))}
    </>
  );
}
