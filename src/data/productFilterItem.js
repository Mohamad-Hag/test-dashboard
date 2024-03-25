const productFilterItems = [
  { type: "text", key_: "title" },
  { type: "text", key_: "brand" },
  {
    type: "select",
    key_: "category",
    values: [
      { text: "All", value: "All" },
      { text: "Laptops", value: "Laptops" },
    ],
  },
];

export default productFilterItems;
