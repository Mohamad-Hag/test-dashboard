import DataTable from "../components/data-table/DataTable";
import FilterItem from "../components/data-table/FilterItem";
import useDataTable from "../components/hooks/useDataTable";
import useDataTableValue from "../components/hooks/useDataTableValue";
import PageContainer from "../components/layout/PageContainer";
import BreadCrumb from "../components/ui/BreadCrumb";
import DataTableContext from "../contexts/DataTableContext";
import userFilterItems from "../data/userFilterItems";
import { getUsers, getUsersBy } from "../services/UsersService";

export default function Users() {
  const dataTable = useDataTableValue();
  const { pageChanged } = useDataTable(dataTable, getUsers);

  return (
    <DataTableContext.Provider value={dataTable}>
      <PageContainer>
        <BreadCrumb page="Users" />
        <DataTable onPageChange={pageChanged}>
          {userFilterItems.map((item) => (
            <FilterItem
              type={item.type}
              key={item.key_}
              filter={getUsersBy}
              clearFilter={getUsers}
              key_={item.key_}
              values={item.values}
            />
          ))}
        </DataTable>
      </PageContainer>
    </DataTableContext.Provider>
  );
}
