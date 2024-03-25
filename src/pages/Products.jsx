import DataTable from "../components/data-table/DataTable";
import FilterItem from "../components/data-table/FilterItem";
import useDataTable from "../components/hooks/useDataTable";
import useDataTableValue from "../components/hooks/useDataTableValue";
import PageContainer from "../components/layout/PageContainer";
import BreadCrumb from "../components/ui/BreadCrumb";
import DataTableContext from "../contexts/DataTableContext";
import productFilterItems from "../data/productFilterItem";
import { getProducts, getProductsBy } from "../services/ProductsService";

export default function Products() {
  const dataTable = useDataTableValue();
  const { pageChanged } = useDataTable(dataTable, getProducts);

  return (
    <DataTableContext.Provider value={dataTable}>
      <PageContainer>
        <BreadCrumb page="Products" />
        <DataTable onPageChange={pageChanged}>
          {productFilterItems.map((item) => (
            <FilterItem
              filter={getProductsBy}
              clearFilter={getProducts}
              key={item.key_}
              key_={item.key_}
              type={item.type}
              values={item.values}
            />
          ))}
        </DataTable>
      </PageContainer>
    </DataTableContext.Provider>
  );
}
