import DataTable from "../components/data-table/DataTable";
import FilterItem from "../components/data-table/FilterItem";
import useDataTable from "../components/hooks/useDataTable";
import useDataTableValue from "../components/hooks/useDataTableValue";
import PageContainer from "../components/layout/PageContainer";
import BreadCrumb from "../components/ui/BreadCrumb";
import DataTableContext from "../contexts/DataTableContext";
import { getUsers, getUsersBy } from "../services/UsersService";

export default function Users() {
  const dataTable = useDataTableValue();
  const { pageChanged } = useDataTable(dataTable, getUsers);

  return (
    <DataTableContext.Provider value={dataTable}>
      <PageContainer>
        <BreadCrumb page="Users" />
        <DataTable onPageChange={pageChanged}>
          <FilterItem
            type="text"
            filter={getUsersBy}
            clearFilter={getUsers}
            key_="firstName"
          />
          <FilterItem
            type="text"
            filter={getUsersBy}
            clearFilter={getUsers}
            key_="lastName"
          />
          <FilterItem
            type="text"
            filter={getUsersBy}
            clearFilter={getUsers}
            key_="email"
          />
          <FilterItem
            type="date"
            filter={getUsersBy}
            clearFilter={getUsers}
            key_="birthDate"
          />
          <FilterItem
            key_="gender"
            filter={getUsersBy}
            clearFilter={getUsers}
            text="Gender"
            type="select"
            values={[
              { text: "Male", value: "male" },
              { text: "Female", value: "female" },
            ]}
          />
        </DataTable>
      </PageContainer>
    </DataTableContext.Provider>
  );
}
