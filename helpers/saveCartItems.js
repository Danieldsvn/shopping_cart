const saveCartItems = () => {
  // seu código aqui  
  // localStorage.setItem(indice, item.innerText);
  
};

const removeOneFromStorage = (event) => {
  // const produtoExcluido = event.target;  
  // const items = document.querySelectorAll('.cart__item');
  // let storageNumber = 0;
  // for (let index = 0; index < items.length; index += 1) {
  //   if (items[index] === produtoExcluido) {
  //     storageNumber = index;
  //     index = items.length;
  //   }
  // }
  // localStorage.removeItem(storageNumber);
};
if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
