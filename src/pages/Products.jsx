import DataTable from "../components/data-table/DataTable";
import FilterItem from "../components/data-table/FilterItem";
import useDataTable from "../components/hooks/useDataTable";
import useDataTableValue from "../components/hooks/useDataTableValue";
import PageContainer from "../components/layout/PageContainer";
import BreadCrumb from "../components/ui/BreadCrumb";
import DataTableContext from "../contexts/DataTableContext";
import { getProducts } from "../services/ProductsService";

export default function Products() {
  const dataTable = useDataTableValue();
  const { pageChanged } = useDataTable(dataTable, getProducts);

  return (
    <DataTableContext.Provider value={dataTable}>
      <PageContainer>
        <BreadCrumb page="Products" />
        <DataTable onPageChange={pageChanged}>
          <FilterItem text="Title" type="text" key_="title" />
          <FilterItem text="Brand" type="text" key_="brand"/>
          <FilterItem
            text="Category"
            key_="category"
            type="select"
            values={[
              { text: "All", value: "All" },
              { text: "Laptops", value: "Laptops" },
            ]}
          />
        </DataTable>
      </PageContainer>
    </DataTableContext.Provider>
  );
}
