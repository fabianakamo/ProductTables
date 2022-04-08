const products_div = document.getElementById("tableBody");

const renderTables = async () => {
  const url = "http://localhost:3000/products";
  const res = fetch(url).then((response) => response.json());
  const tables = await res;

  let template = "";

  tables.forEach((product) => {
    template += `

  <tr>
  <td>id ${product.id}</td>
  <td>department ${product.department}</td>
  <td>productName ${product.productName}</td>
  <td>price ${product.price}</td>
  <td>productAdjective ${product.productAdjective}</td>
  <td>productMaterial ${product.productMaterial}</td>
  <td>product ${product.product}</td>
  <td>productDescription ${product.productDescription}</td>
  <td>productQuantity ${product.productQuantity}</td>
  <td>minimunQuantity ${product.minimunQuantity}</td>
  <td>totalValue ${product.totalValue}</td>
  <td>created_at ${product.created_at}</td>
  <td>updated_at ${product.updated_at}</td>
  </tr>`;
  });

  products_div.innerHTML = template;
};

window.addEventListener("DOMContentLoaded", () => renderTables());
