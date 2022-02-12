const saveCartItems = () => { 
  const allCartItems = document.querySelectorAll('.cart__item');
  allCartItems.forEach((item, indice) => {
    localStorage.setItem(indice, item.innerText);
  });
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
