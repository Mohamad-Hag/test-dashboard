import { numberOfEntriesOptions } from "../data/dataTableControls";
import api from "./base";

async function getProducts(
  pageSize = numberOfEntriesOptions[0],
  currentPage = 1
) {
  let response = await api.get(`products`);
  let numberOfPages = Math.ceil(response.data.total / pageSize);

  let isCurrentPageExceeded = currentPage > numberOfPages;

  response = await api.get(
    `products?limit=${pageSize}&skip=${
      isCurrentPageExceeded ? 0 : pageSize * (currentPage - 1)
    }`
  );
  const products = response.data.products.map((product) => ({
    id: product.id,
    title: product.title,
    description: product.description,
    price: product.price,
    discountPercentage: product.discountPercentage,
    rating: product.rating,
    stock: product.stock,
    brand: product.brand,
    category: product.category,
  }));
  return {
    data: products,
    total: response.data.total,
    isCurrentPageExceeded: isCurrentPageExceeded,
  };
}

async function getProductsBy(
  pageSize = numberOfEntriesOptions[0],
  currentPage = 1,
  key = "",
  value = ""
) {
  let response = await api.get(`products/filter?key=${key}&value=${value}`);
  let numberOfPages = Math.ceil(response.data.total / pageSize);

  let isCurrentPageExceeded = currentPage > numberOfPages;

  response = await api.get(
    `products/filter?limit=${pageSize}&skip=${
      isCurrentPageExceeded ? 0 : pageSize * (currentPage - 1)
    }&key=${key}&value=${value}`
  );
  const products = response.data.products.map((product) => ({
    id: product.id,
    title: product.title,
    description: product.description,
    price: product.price,
    discountPercentage: product.discountPercentage,
    rating: product.rating,
    stock: product.stock,
    brand: product.brand,
    category: product.category,
  }));
  return {
    data: products,
    total: response.data.total,
    isCurrentPageExceeded: isCurrentPageExceeded,
  };
}

async function getProductsCount() {
  let response = await api.get(`products`);
  return response.data.total;
}

export { getProducts, getProductsCount, getProductsBy };
