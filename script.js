const products = [
  {
    id: 1,
    name: "Тёплый песок",
    category: "everyday",
    type: "На каждый день",
    size: "Евро",
    material: "Поплин",
    color: "Бежевый",
    price: 18900,
    stock: "В наличии",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=80",
    description: "Мягкий поплин спокойного песочного оттенка для ежедневного отдыха.",
    set: "Пододеяльник, простыня, 2 наволочки",
  },
  {
    id: 2,
    name: "Утренний шалфей",
    category: "everyday",
    type: "На каждый день",
    size: "Семейный",
    material: "Хлопок",
    color: "Шалфейный",
    price: 21400,
    stock: "В наличии",
    image: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=900&q=80",
    description: "Дышащий хлопок в мягком зелёном оттенке: свежий акцент для спальни.",
    set: "2 пододеяльника, простыня, 2 наволочки",
  },
  {
    id: 3,
    name: "Молочный сатин",
    category: "premium",
    type: "Премиум",
    size: "Евро",
    material: "Сатин",
    color: "Молочный",
    price: 32900,
    stock: "В наличии",
    image: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=900&q=80",
    description: "Гладкий сатин с деликатным сиянием. Для тех самых неторопливых утр.",
    set: "Пододеяльник, простыня, 2 наволочки",
  },
  {
    id: 4,
    name: "Персиковый сад",
    category: "premium",
    type: "Премиум",
    size: "Двуспальный",
    material: "Сатин",
    color: "Терракотовый",
    price: 28900,
    stock: "Осталось 3 комплекта",
    image: "https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?auto=format&fit=crop&w=900&q=80",
    description: "Нежный персиковый сатин, который добавляет спальне тепла и света.",
    set: "Пододеяльник, простыня, 2 наволочки",
  },
  {
    id: 5,
    name: "Звёздная ночь",
    category: "kids",
    type: "Детям",
    size: "1,5-спальный",
    material: "Хлопок",
    color: "Синий",
    price: 15900,
    stock: "В наличии",
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=900&q=80",
    description: "Детский комплект из мягкого хлопка для уютных историй перед сном.",
    set: "Пододеяльник, простыня, наволочка",
  },
  {
    id: 6,
    name: "Маленькое облако",
    category: "kids",
    type: "Детям",
    size: "1,5-спальный",
    material: "Поплин",
    color: "Молочный",
    price: 14900,
    stock: "В наличии",
    image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e6?auto=format&fit=crop&w=900&q=80",
    description: "Лёгкий детский комплект с неброским принтом и деликатной фактурой.",
    set: "Пододеяльник, простыня, наволочка",
  },
  {
    id: 7,
    name: "Тихий лес",
    category: "everyday",
    type: "На каждый день",
    size: "Евро",
    material: "Поплин",
    color: "Шалфейный",
    price: 19900,
    stock: "В наличии",
    image: "https://images.unsplash.com/photo-1616627561950-9f746e330187?auto=format&fit=crop&w=900&q=80",
    description: "Поплин глубокого природного оттенка. Практичный и особенно уютный.",
    set: "Пододеяльник, простыня, 2 наволочки",
  },
  {
    id: 8,
    name: "Розовое утро",
    category: "premium",
    type: "Премиум",
    size: "Евро",
    material: "Сатин",
    color: "Терракотовый",
    price: 34900,
    stock: "В наличии",
    image: "https://images.unsplash.com/photo-1629079447777-1e605162dc8d?auto=format&fit=crop&w=900&q=80",
    description: "Плотный сатин с шелковистым прикосновением в сложном пудровом тоне.",
    set: "Пододеяльник, простыня, 2 наволочки",
  },
  {
    id: 9,
    name: "Овсяное поле",
    category: "everyday",
    type: "На каждый день",
    size: "Двуспальный",
    material: "Хлопок",
    color: "Бежевый",
    price: 17600,
    stock: "В наличии",
    image: "https://images.unsplash.com/photo-1600494603989-9650cf6ddd3d?auto=format&fit=crop&w=900&q=80",
    description: "Базовый хлопковый комплект в универсальном тёплом оттенке.",
    set: "Пододеяльник, простыня, 2 наволочки",
  },
  {
    id: 10,
    name: "Лунный зайчик",
    category: "kids",
    type: "Детям",
    size: "1,5-спальный",
    material: "Хлопок",
    color: "Молочный",
    price: 16500,
    stock: "В наличии",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=900&q=80",
    description: "Нежный хлопок для маленькой спальни и самого крепкого сна.",
    set: "Пододеяльник, простыня, наволочка",
  },
];

let cart = [];
let category = "all";

const whatsappPhone = "77000000000";
const $ = (selector) => document.querySelector(selector);
const money = (value) => `${new Intl.NumberFormat("ru-RU").format(value)} ₸`;
const productImage = (product) => `background-image: url("${product.image}")`;

function matchesFilters(product) {
  const size = $("#sizeFilter").value;
  const material = $("#materialFilter").value;
  const color = $("#colorFilter").value;
  const price = $("#priceFilter").value;

  const categoryMatch = category === "all" || product.category === category;
  const sizeMatch = size === "all" || product.size === size;
  const materialMatch = material === "all" || product.material === material;
  const colorMatch = color === "all" || product.color === color;
  const priceMatch =
    price === "all" ||
    (price === "under20000" && product.price < 20000) ||
    (price === "20000to30000" && product.price >= 20000 && product.price <= 30000) ||
    (price === "over30000" && product.price > 30000);

  return categoryMatch && sizeMatch && materialMatch && colorMatch && priceMatch;
}

function renderProducts() {
  const visibleProducts = products.filter(matchesFilters);

  $("#products").innerHTML = visibleProducts
    .map(
      (product) => `
        <article class="product">
          <div class="product-image" style='${productImage(product)}'>
            <span class="product-tag">${product.type}</span>
          </div>
          <div class="product-info">
            <h3>${product.name}</h3>
            <p>${product.size} · ${product.material}</p>
            <div class="product-bottom">
              <span>${money(product.price)}</span>
              <button class="add" data-add="${product.id}" type="button">В корзину +</button>
            </div>
            <button class="details" data-details="${product.id}" type="button">Подробнее</button>
          </div>
        </article>
      `,
    )
    .join("");

  $("#noResults").hidden = visibleProducts.length > 0;
}

function renderCart() {
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  $("#cartCount").textContent = count;
  $("#cartTotal").textContent = money(total);
  $("#orderButton").disabled = cart.length === 0;
  $("#cartItems").innerHTML = cart.length
    ? cart
        .map(
          (item) => `
            <div class="cart-item">
              <div>
                <p>${item.name}</p>
                <small>${item.size} · ${item.material}</small>
                <div class="quantity">
                  <button data-quantity="${item.id}" data-change="-1" type="button">−</button>
                  <span>${item.qty}</span>
                  <button data-quantity="${item.id}" data-change="1" type="button">+</button>
                </div>
              </div>
              <div>
                <strong>${money(item.price * item.qty)}</strong>
                <button class="remove" data-remove="${item.id}" type="button">Удалить</button>
              </div>
            </div>
          `,
        )
        .join("")
    : '<p class="empty">В корзине пока пусто. Самое время выбрать что-то мягкое.</p>';
}

function addToCart(id) {
  const product = products.find((item) => item.id === id);
  const existing = cart.find((item) => item.id === id);

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  renderCart();
}

function setPanel(panel, open) {
  panel.classList.toggle("open", open);
  panel.setAttribute("aria-hidden", String(!open));
  $("#overlay").classList.toggle("open", open);
}

function showProduct(id) {
  const product = products.find((item) => item.id === id);

  $("#productModal").innerHTML = `
    <button class="close" data-close type="button" aria-label="Закрыть">×</button>
    <div class="modal-image" style='${productImage(product)}'></div>
    <p class="eyebrow">${product.type}</p>
    <h2>${product.name}</h2>
    <p class="modal-price">${money(product.price)}</p>
    <p class="modal-description">${product.description}</p>
    <div class="detail-list">
      <p><span>Материал</span><strong>${product.material}</strong></p>
      <p><span>Комплектация</span><strong>${product.set}</strong></p>
      <p><span>Наличие</span><strong>${product.stock}</strong></p>
      <p><span>Уход</span><strong>Стирка при 30°C</strong></p>
    </div>
    <p class="eyebrow">Выберите размер</p>
    <div class="sizes">
      <button class="size-choice active" type="button">${product.size}</button>
    </div>
    <div class="modal-actions">
      <button class="button" data-modal-add="${product.id}" type="button">В корзину</button>
      <button class="button whatsapp" data-quick="${product.id}" type="button">WhatsApp</button>
    </div>
  `;

  setPanel($("#productModal"), true);
}

function openWhatsApp(text) {
  window.open(`https://wa.me/${whatsappPhone}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
}

$(".filters").addEventListener("click", (event) => {
  if (!event.target.matches(".filter")) return;

  category = event.target.dataset.filter;
  document.querySelectorAll(".filter").forEach((button) => {
    button.classList.toggle("active", button === event.target);
  });
  renderProducts();
});

document.querySelectorAll("[data-category-link]").forEach((link) => {
  link.addEventListener("click", () => {
    category = link.dataset.categoryLink;
    document.querySelectorAll(".filter").forEach((button) => {
      button.classList.toggle("active", button.dataset.filter === category);
    });
    renderProducts();
  });
});

$("#filterMore").addEventListener("click", () => {
  $("#advancedFilters").classList.toggle("open");
});

document.querySelectorAll(".advanced-filters select").forEach((select) => {
  select.addEventListener("change", renderProducts);
});

$("#products").addEventListener("click", (event) => {
  const id = Number(event.target.dataset.add || event.target.dataset.details);
  if (!id) return;

  if (event.target.dataset.add) {
    addToCart(id);
    setPanel($("#cart"), true);
  } else {
    showProduct(id);
  }
});

$("#cartItems").addEventListener("click", (event) => {
  const id = Number(event.target.dataset.quantity || event.target.dataset.remove);
  if (!id) return;

  const existing = cart.find((item) => item.id === id);

  if (event.target.dataset.remove) {
    cart = cart.filter((item) => item.id !== id);
  } else {
    existing.qty += Number(event.target.dataset.change);
    if (existing.qty < 1) {
      cart = cart.filter((item) => item.id !== id);
    }
  }

  renderCart();
});

$("#productModal").addEventListener("click", (event) => {
  if (event.target.matches("[data-close]")) {
    setPanel($("#productModal"), false);
  }

  const id = Number(event.target.dataset.modalAdd || event.target.dataset.quick);
  if (!id) return;

  if (event.target.dataset.modalAdd) {
    addToCart(id);
    setPanel($("#productModal"), false);
    setPanel($("#cart"), true);
  } else {
    const product = products.find((item) => item.id === id);
    openWhatsApp(`Здравствуйте! Хочу заказать «${product.name}» (${product.size}) — ${money(product.price)}.`);
  }
});

$("#cartButton").addEventListener("click", () => {
  setPanel($("#cart"), true);
});

$("#cart").addEventListener("click", (event) => {
  if (event.target.matches("[data-close]")) {
    setPanel($("#cart"), false);
  }
});

$("#overlay").addEventListener("click", () => {
  setPanel($("#cart"), false);
  setPanel($("#productModal"), false);
  $("#checkoutModal").classList.remove("open");
  $("#checkoutModal").setAttribute("aria-hidden", "true");
});

$("#orderButton").addEventListener("click", () => {
  if (!cart.length) return;

  setPanel($("#cart"), false);
  $("#checkoutModal").classList.add("open");
  $("#checkoutModal").setAttribute("aria-hidden", "false");
  $("#overlay").classList.add("open");
});

$("#checkoutModal").addEventListener("click", (event) => {
  if (!event.target.matches("[data-close]")) return;

  $("#checkoutModal").classList.remove("open");
  $("#checkoutModal").setAttribute("aria-hidden", "true");
  $("#overlay").classList.remove("open");
});

$("#checkoutForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const form = new FormData(event.target);
  const lines = cart
    .map((item) => `• ${item.name} (${item.size}) × ${item.qty} — ${money(item.price * item.qty)}`)
    .join("\n");
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  openWhatsApp(
    `Здравствуйте! Хочу оформить заказ:\n\n${lines}\n\nИтого: ${money(total)}\n\nИмя: ${form.get(
      "name",
    )}\nТелефон: ${form.get("phone")}\nГород: ${form.get("city")}\nДоставка: ${form.get(
      "delivery",
    )}\nКомментарий: ${form.get("comment") || "—"}`,
  );
});

renderProducts();
renderCart();
