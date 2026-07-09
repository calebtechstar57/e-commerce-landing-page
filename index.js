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
      <div class="product-image_wrapper">
        <img class="product-image" src="${image}" alt="${name}" />
      </div>  
      <div class="product-details">
        <span class="product-name">${name}</span>
        <span class="product-price">$${price.toFixed(2)}</span>
        <div class="product-action">
          <button  class="production-action_btn">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  `;
});

prodouctGrid.innerHTML = productHml;
const currentYear = new Date().getFullYear();
const footerCopyright = document.querySelector(".footer-copyright");

footerCopyright.innerHTML = `&copy; ${currentYear} ShopMate. All rights reserved.`;
