const getSavedCartItems = () => {
  const olCartItems = document.querySelector('.cart__items');
  Object.values(localStorage).forEach((item) => {
    const cartItem = document.createElement('li');
    cartItem.className = 'cart__item';
    cartItem.innerText = item;    
    olCartItems.appendChild(cartItem); 
  });
  olCartItems.addEventListener('click', (event) => event.target.remove());  
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
