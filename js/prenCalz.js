const range = document.getElementById('price-range');
const rangeValue = document.getElementById('range-value');
const noResults = document.getElementById('no-results');

range.addEventListener('input', filterByPrice);

function filterByPrice() {
    const max = parseFloat(range.value);
    rangeValue.textContent = `$${max}`;

    const products = document.querySelectorAll('.product');
    let visibleCount = 0;

    products.forEach(p => {
    const priceText = p.querySelector('p').textContent.replace('$', '').replace('MXN', '').trim();
    const price = parseFloat(priceText);
    if (price <= max && price >= 100) {
        p.style.display = 'block';
        visibleCount++;
    } else {
        p.style.display = 'none';
    }
    });

    noResults.style.display = visibleCount === 0 ? 'block' : 'none';
}

function openModal(btn) {
    const product = btn.parentElement;
    const name = product.querySelector('h3').textContent;
    const price = product.querySelector('p').textContent;
    const imgSrc = product.querySelector('img').src;

    document.getElementById('modal-img').src = imgSrc;
    document.getElementById('modal-name').textContent = name;
    document.getElementById('modal-price').textContent = price;
    document.getElementById('modal-desc').textContent =
    "Productos de alta calidad, diseñado para ofrecer comodidad y estilo.";

    document.getElementById('product-modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('product-modal').style.display = 'none';
}

function buyProduct() {
    const size = document.getElementById('size').value;
    if (!size) {
        alert('Por favor selecciona una talla antes de continuar.');
        return;
    }
    alert(`✅ Has comprado los ${document.getElementById('modal-name').textContent} (talla ${size}). ¡Gracias por tu compra!`);
    closeModal();
}