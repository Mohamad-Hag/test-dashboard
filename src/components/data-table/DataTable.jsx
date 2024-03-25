import { useContext, useState } from "react";
import DataTableContext from "../../contexts/DataTableContext";
import DataTableContainer from "./DataTableContainer";
import Table from "./Table";
import TableControls from "./TableControls";
import TablePagination from "./TablePagination";

export default function DataTable(props) {
  const { onPageChange } = props;
  const { total, pageSize, setPage, page } = useContext(DataTableContext);

  const pageChanged = (pg) => {
    setPage(pg);
    if (onPageChange) onPageChange(pg);
  };

  return (
    <DataTableContainer>
      <TableControls filterItems={props.children} />
      <Table />
      <TablePagination
        currentPage={page}
        totalItems={total}
        pageSize={pageSize}
        onPageChange={(page) => pageChanged(page)}
      />
    </DataTableContainer>
  );
}
