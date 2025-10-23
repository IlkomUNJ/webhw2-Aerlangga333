let wishlist = [];

function addToWishlist(item) {
  if (!wishlist.includes(item)) {
    wishlist.push(item);
    alert(item + " ditambahkan ke wishlist!");
  } else {
    alert(item + " sudah ada di wishlist.");
  }
}

const productData = [
  { name: "Risoles", price: 3000 },
  { name: "Tahu", price: 2000 },
  { name: "Pie Susu", price: 5000 }
];

function searchProducts() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const resultsDiv = document.getElementById("searchResults");
  resultsDiv.innerHTML = "";

  const filtered = productData.filter(p => p.name.toLowerCase().includes(input));

  filtered.forEach(item => {
    const div = document.createElement("div");
    div.className = "product-card";
    div.innerHTML = `
      <h3>${item.name}</h3>
      <p class="price">💰 <b>Rp${item.price}</b></p>
      <button onclick="addToWishlist('${item.name}')">Tambah ke Wishlist ❤️</button>
    `;
    resultsDiv.appendChild(div);
  });
}

function editProduct(name) {
  const newName = prompt("Ubah nama produk:", name);
  if (newName) alert(`Produk "${name}" diubah menjadi "${newName}".`);
}

function deleteProduct(button) {
  if (confirm("Apakah yakin ingin menghapus produk ini?")) {
    button.parentElement.parentElement.remove();
    alert("Produk berhasil dihapus!");
  }
}

function proceedToTransaction() {
  localStorage.setItem("wishlistItems", JSON.stringify(wishlist));
  window.location.href = "transaction.html";
}

function loadTransaction() {
  const items = JSON.parse(localStorage.getItem("wishlistItems") || "[]");
  const container = document.getElementById("transactionList");
  if (!container) return;
  container.innerHTML = "";
  items.forEach(name => {
    const item = productData.find(p => p.name === name);
    if (item) {
      const div = document.createElement("div");
      div.className = "product-card";
      div.innerHTML = `
        <h3>${item.name}</h3>
        <p class="price">💰 <b>Rp${item.price}</b></p>
      `;
      container.appendChild(div);
    }
  });
}

function checkout() {
  alert("Transaksi berhasil dikonfirmasi! Terima kasih telah membeli di Richfood 🍛");
  localStorage.removeItem("wishlistItems");
  wishlist = [];
  window.location.href = "buyer_home.html";
}

window.onload = loadTransaction;