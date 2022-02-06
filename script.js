function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function createProductItemElement({ sku, name, image }) {    
  const section = document.createElement('section');  
  section.className = 'item';  
  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));  
  const items = document.querySelector('.items');
  items.appendChild(section);  
}

// Testes para requisito 1 início
// objetoTeste = {
//   id: "MLB2103802484",
//   title: "Fonte De Alimentação Para Pc Knup Kp-526 350w  Prata 110v/220v",
//   thumbnail: "http://http2.mlstatic.com/D_876439-MLA45719368931_042021-I.jpg",  
// };

// createProductItemElement(objetoTeste);
// Testes para requisito 1 fim

function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}

function cartItemClickListener(event) {
  // coloque seu código aqui
}

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

// Requisito 1 início
const itemsBorn = async () => {
  const fetchProductsArray = await fetchProducts();
  const items = fetchProductsArray.results;
  items.forEach((item) => {
    const { id, title, thumbnail } = item;    
    createProductItemElement({ sku: id, name: title, image: thumbnail });    
  });  
};

itemsBorn();
// Requisito 1 fim
window.onload = () => {
  fetchProducts();
};
