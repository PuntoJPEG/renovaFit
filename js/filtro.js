// ===== FILTROS =====
const priceRange = document.getElementById('price-range');
const rangeValue = document.getElementById('range-value');
const categorySelect = document.getElementById('category');
const products = document.querySelectorAll('.product');
const noResults = document.getElementById('no-results');

function filterProducts() {
  let maxPrice = parseInt(priceRange.value);
  let category = categorySelect.value;
  let visibleCount = 0;

  products.forEach(product => {
    let price = parseInt(product.dataset.price);
    let prodCategory = product.dataset.category;

    if (
      price <= maxPrice &&
      (category === "" || prodCategory === category)
    ) {
      product.style.display = "block";
      visibleCount++;
    } else {
      product.style.display = "none";
    }
  });

  noResults.style.display = visibleCount === 0 ? "block" : "none";
}

priceRange.addEventListener('input', () => {
  rangeValue.textContent = "$" + priceRange.value;
  filterProducts();
});

categorySelect.addEventListener('change', filterProducts);


// ===== MODAL =====
function openModal(button) {
  const product = button.parentElement;
  document.getElementById('modal-img').src = product.querySelector('img').src;
  document.getElementById('modal-name').textContent = product.querySelector('h3').textContent;
  document.getElementById('modal-price').textContent = product.querySelector('p').textContent;
  document.getElementById('modal-desc').textContent = "Accesorio de alta calidad diseñado por RF.";
  document.getElementById('product-modal').style.display = "flex";
}

function closeModal() {
  document.getElementById('product-modal').style.display = "none";
}

function buyProduct() {
  alert("Producto agregado al carrito 🛒");
  closeModal();
}
