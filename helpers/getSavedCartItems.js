const getSavedCartItems = () => {
  // localStorage.getItem();
  const olCartItems = document.querySelector('.cart__items');
  Object.values(localStorage).forEach((item) => {
    const cartItem = document.createElement('li');
    cartItem.className = 'cart__item';
    cartItem.innerText = item;
    if (cartItem.innerText !== 'undefined') { // para passar requisito 4 (local storage) e respectivos testes com a minha lógica do requisito 4
      olCartItems.appendChild(cartItem);
    }     
  });
  olCartItems.addEventListener('click', (event) => event.target.remove());  
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
