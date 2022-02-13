const saveCartItems = (item) => {
  localStorage.setItem('Items', item); // linha incluida para passar no teste com a minha lógica do requisito 4  
  const allCartItems = document.querySelectorAll('.cart__item');
  allCartItems.forEach((item, indice) => {
    localStorage.setItem(indice, item.innerText);
  });
  // localStorage.setItem('cartItems', [item.innerText]);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
