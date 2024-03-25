import camelCaseToWords from "./camelCaseToWords";

function destructDataTable(data) {
  let headers = [];
  let data_ = [];
  if (!Array.isArray(data)) return { headers, data: data_ };

  let firstObject = data[0];

  for (let key in firstObject) headers.push(camelCaseToWords(key));

  data.forEach((item) => {
    let row = [];
    for (let key in item) row.push(item[key]);
    data_.push(row);
  });

  return { headers, data: data_ };
}

export default destructDataTable;
