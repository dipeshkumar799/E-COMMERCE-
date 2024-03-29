let actualData = [];
const gridContainer = document.createElement("div");
gridContainer.className = "container";

const row = document.createElement("div");
row.className = "row";

const fetchData = async () => {
  const resp = await fetch("https://dummyjson.com/products");
  const { products } = await resp.json();
  actualData = products;
  getProductData(products);
};

const getProductData = (products) => {
  row.innerHTML = "";

  for (let product of products) {
    const col = document.createElement("div");
    col.className = "col";

    const cardDiv = document.createElement("div");
    cardDiv.className = "card";
    cardDiv.style.width = "18rem";
    cardDiv.style.height = "450px";
    cardDiv.style.margin = "10px";

    const imgDiv = document.createElement("img");
    imgDiv.className = "card-img-top h-75";
    imgDiv.src = product.thumbnail;

    const cardbodyDiv = document.createElement("div");
    cardbodyDiv.className = "card-body";

    const h5 = document.createElement("h5");
    h5.innerText =
      product.title.length > 14
        ? product.title.slice(0, 14) + "....."
        : product.title;

    const paragraphdiv = document.createElement("p");
    paragraphdiv.className = "fs-6";
    paragraphdiv.innerText =
      product.description.length > 20
        ? product.description.slice(0, 70) + "....."
        : product.description;

    const btndiv = document.createElement("div");
    btndiv.className = "btn btn-danger m-2";
    btndiv.innerText = "Delete";
    btndiv.addEventListener("click", (event) => {
      event.preventDefault();

      const filterData = actualData.filter((prod) => prod.id !== product.id);
      actualData = filterData;
      getProductData(actualData);
    });

    const editBtn = document.createElement("button");
    editBtn.className = "btn btn-primary m-2";
    editBtn.innerText = "Edit";
    // Add functionality for editing if needed

    paragraphdiv.appendChild(btndiv);
    paragraphdiv.appendChild(editBtn);
    cardDiv.appendChild(imgDiv);
    cardDiv.appendChild(cardbodyDiv);
    cardbodyDiv.appendChild(h5);
    cardbodyDiv.appendChild(paragraphdiv);
    col.appendChild(cardDiv);
    row.appendChild(col);
  }

  gridContainer.appendChild(row);

  document.body.appendChild(gridContainer);
};
fetchData();

function getProduct() {
  console.log("Added Successful ");
  const imageUrl = document.querySelector("#imageUrl").value;
  const productTitle = document.querySelector("#productTitle").value;
  const productPrice = document.querySelector("#productPrice").value;
  const productCategory = document.querySelector("#productCategory").value;
  const discriptions = document.querySelector("#discription").value;

  const newProduct = {
    imageUrl: imageUrl,
    productTitle: productTitle,
    productPrice: productPrice,
    productCategory: productCategory,
    discription: discriptions,
  };
  actualData.unshift(newProduct); // Add new product to the beginning of the array
  getProductData(actualData);

  document.querySelector("#close").click();
}
