const fetchData = async () => {
  const productData = async () => {
    const resp = await fetch("https://dummyjson.com/products");
    const data = await resp.json();
    return data.products;
  };

  const productgetData = await productData(); // Call the function asynchronously
  console.log(productgetData);
};
fetchData();
