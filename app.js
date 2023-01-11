const products = [
  {
    image: "images/rebro.webp",
    title: "Ребро свиняче",
    info: "В наявності",
    price: "Ціну уточнюйте",
  },
  {
    image: "images/virizka.webp",
    title: "Вирізка свиняча",
    info: "В наявності",
    price: "Ціну уточнюйте",
  },
  {
    image: "images/lopatka.webp",
    title: "Лопатка свиняча",
    info: "В наявності",
    price: "Ціну уточнюйте",
  },
  {
    image: "images/bitok.webp",
    title: "Биток свинячий",
    info: "В наявності",
    price: "Ціну уточнюйте",
  },
];

function createContentTemplate(product) {
  const article = `
  <article class="card">
    <header class="card__header item-1" style="background-image: url(${product.image})"></header>
  <section class="card__content">
    <h3 class="card__title">${product.title}</h3>
    <span class="card__info">${product.info}</span>
    <p class="card__p">${product.price}</p>
  </section>
  </article>;`;

  return createFragmentTemplate(article);
}

function createFragmentTemplate(str) {
  const template = document.createElement("template");
  template.innerHTML = str;
  return template.content;
}

function appendContent(content) {
  const el = document.getElementById("content");
  el.appendChild(content);
}

function init(products) {
  const fragment = document.createDocumentFragment();

  products.forEach((product) => {
    fragment.appendChild(createContentTemplate(product));
  });
  appendContent(fragment);
}

init(products);
