// Requisito 7 inicio
const loadingOn = () => {
  const loadingMessage = document.createElement('div');
  loadingMessage.className = 'loading';
  loadingMessage.innerText = 'carregando...';
  const container = document.querySelector('.items');
  container.appendChild(loadingMessage);  
};

const loadingOff = () => {
  const loadingMessage = document.querySelector('.loading');
  loadingMessage.remove();  
};

// Requisito 7 fim
loadingOn(); 

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

// function getSkuFromProductItem(item) {
//   return item.querySelector('span.item__sku').innerText;
// }
// Requisito 5 inicio
const subTotalCart = () => {
  const lisCart = document.querySelectorAll('.cart__item');  
  let acumuladorPrecos = 0;   
  lisCart.forEach((li) => {
    const arrayLi = li.innerText.split('$');    
    const valorItem = parseFloat(arrayLi[1]);    
    acumuladorPrecos += valorItem;
  });
  const totalPriceDiv = document.querySelector('.total-price');  
  totalPriceDiv.innerText = acumuladorPrecos;   
};

// Requisito 5 fim
// Requisito 3 início
function cartItemClickListener(event) {   
  event.target.remove();
  saveCartItems();
  subTotalCart();     
}
// Requisito 3 fim
function createCartItemElement({ sku, name, salePrice }) {
  const olCartItems = document.querySelector('.cart__items');   
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  olCartItems.appendChild(li);     
  li.addEventListener('click', cartItemClickListener);
  subTotalCart();
  saveCartItems();
  return li;
}

// Requisito 1 início
const itemsBorn = async (product) => {  
  const fetchProductsArray = await fetchProducts(product);
  loadingOff();
  getSavedCartItems();
  subTotalCart(); 
  const items = fetchProductsArray.results;   
  items.forEach((item) => {
    const { id, title, thumbnail } = item;    
    createProductItemElement({ sku: id, name: title, image: thumbnail });    
  });  
};

itemsBorn('computador');
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
  subTotalCart();
  localStorage.clear();
});
};

juliusMode();
// Requisito 6 fim

window.onload = () => { };
