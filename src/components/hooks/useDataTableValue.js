import { useState } from "react";
import { numberOfEntriesOptions } from "../../data/dataTableControls";

const useDataTableValue = () => {
  const [table, setTable] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(numberOfEntriesOptions[0]);
  const [isFilterMode, setIsFilterMode] = useState(false);
  const [filteredTable, setFilteredTable] = useState({});

  return {
    table,
    setTable,
    total,
    setTotal,
    page,
    setPage,
    pageSize,
    setPageSize,
    isFilterMode,
    setIsFilterMode,
    filteredTable,
    setFilteredTable,
  };
};

export default useDataTableValue;
