const products_div = document.getElementById("all-cards");

const renderTables = async () => {
  const url = "http://localhost:3000/products";
  const res = fetch(url).then((response) => response.json());
  const tables = await res;

  let template = "";

  tables.forEach((product) => {
    template += `
 
      <div class="card" style="width: 18rem">
        <div class="card-body">
          <h5 class="card-title">${product.productName}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <p id="card" class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
 
 `;
  });

  products_div.innerHTML = template;
};

window.addEventListener("DOMContentLoaded", () => renderTables());
