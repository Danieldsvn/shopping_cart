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

function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}
// Requisito 3 início
function cartItemClickListener(event) { 
  localStorage.removeItem(event.target.innerText);  
  event.target.remove(); 
}
// Requisito 3 fim
function createCartItemElement({ sku, name, salePrice }) {
  const olCartItems = document.querySelector('.cart__items');   
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  olCartItems.appendChild(li);
  localStorage.setItem(li.innerText, JSON.stringify({ sku, name, salePrice }));   
  li.addEventListener('click', cartItemClickListener);
  return li;
}

// localStorage.sentItem('comida', 'tapioca');

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

// Requisito 2 início

const itemsToCart = async (skull) => {
  const item = await fetchItem(skull);  
  const { id, title, price } = item;
  createCartItemElement({ sku: id, name: title, salePrice: price });
};

const skullCatcher = () => {
  const items = document.querySelector('.items');
  items.addEventListener('click', (event) => {
    if (event.target.className === 'item__add') {
      const elementoPai = event.target.parentNode;
      const elementoSkull = elementoPai.firstChild;
      const skull = elementoSkull.innerText;
      itemsToCart(skull);
    }    
  });   
};

skullCatcher();
// Requisito 2 fim
// Requisito 6 inicio
const juliusMode = () => {
  const removeAllButton = document.querySelector('.empty-cart');
removeAllButton.addEventListener('click', () => {
  const allItens = document.querySelectorAll('.cart__item');
  allItens.forEach((item) => item.remove());
});
};

juliusMode();
// Requisito 6 fim
// localStorage.setItem('comida', 'tapioca');

window.onload = () => {
  fetchProducts();
  fetchItem();      
};
