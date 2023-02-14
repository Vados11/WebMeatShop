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

class Product {
  constructor(product) {
    this.image = product.image;
    this.title = product.title;
    this.info = product.info;
    this.price = product.price;
  }

  createContent() {
    const article = `
    <article class="card">
      <header class="card__header item-1" style="background-image: url(${this.image})"></header>
    <section class="card__content">
      <h3 class="card__title">${this.title}</h3>
      <span class="card__info">${this.info}</span>
      <p class="card__p">${this.price}</p>
    </section>
    </article>`;

    const template = document.createElement("template");
    template.innerHTML = article;
    return template.content;
  }
}

class App {
  static renderAll(products) {
    const el = document.getElementById("content");
    const fragment = document.createDocumentFragment();

    products.forEach((product) => {
      fragment.appendChild(new Product(product).createContent());
    });

    el.appendChild(fragment);
  }
}

App.renderAll(products);
