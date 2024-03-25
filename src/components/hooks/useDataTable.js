import { useEffect } from "react";
import { numberOfEntriesOptions } from "../../data/dataTableControls";
import destructDataTable from "../../utils/destructDataTable";
import useDataTableValue from "./useDataTableValue";

const useDataTable = (dataTable, getData) => {  
  const { setTotal, page, pageSize, setTable } = dataTable;

  const getUsers_ = async (
    pgSize = numberOfEntriesOptions[0],
    currentPage = 1
  ) => {
    setTotal(0);
    setTable([0]);
    const users = await getData(pgSize, currentPage);
    setTotal(users.total);
    setTable(destructDataTable(users.data));
  };

  const pageChanged = (pg) => {
    getUsers_(pageSize, pg);
  };

  useEffect(() => {
    getUsers_(pageSize, page);
  }, []);

  useEffect(() => {
    getUsers_(pageSize, page);
  }, [pageSize]);

  return {
    pageChanged,
  };
};

export default useDataTable;
