import { useContext } from "react";
import DataTableContext from "../../contexts/DataTableContext";
import { numberOfEntriesOptions } from "../../data/dataTableControls";
import FilterItem from "./FilterItem";
import Search from "./Search";

export default function TableControls(props) {
  const { setPageSize } = useContext(DataTableContext);

  const pageSizeChanged = (e) => {
    setPageSize(e.target.value);
  };

  return (
    <div className="flex items-center gap-4 text-ter-txt">
      <div className="flex items-center gap-1">
        <select name="numberOfEntries" onChange={pageSizeChanged}>
          {numberOfEntriesOptions.map((option) => (
            <option
              key={option}
              value={option}
              defaultValue={numberOfEntriesOptions[0]}
            >
              {option}
            </option>
          ))}
        </select>
        Entries
      </div>
      <Search />
      {props.filterItems.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
}
