let productHml = "";
const prodouctGrid = document.querySelector(".product-grid");

const products = [
  { name: "product 1", price: 25.0, image: "mgr-shoes.png" },
  { name: "product 2", price: 30.0, image: "Annotation 2025-09-14 112050.png" },
  { name: "product 3", price: 20.0, image: "Annotation 2025-09-14 112231.png" },
  { name: "product 4", price: 40.0, image: "Annotation 2025-09-14 112124.png" },
  { name: "product 5", price: 50.0, image: "Annotation 2025-09-14 112124.png" },
  { name: "product 6", price: 60.0, image: "Annotation 2025-09-14 112124.png" },
  { name: "product 7", price: 70.0, image: "Annotation 2025-09-14 112124.png" },
  { name: "product 8", price: 80.0, image: "Annotation 2025-09-14 112124.png" },
];

products.forEach((product) => {
  const { name, price, image } = product;
  productHml += `
    <div class="product-card">
      <img src="${image}" alt="${name}" />
      <h3>${name}</h3>
      <p>$${price.toFixed(2)}</p>
      <button>Buy Now</button>
    </div>
  `;
});

prodouctGrid.innerHTML = productHml;
