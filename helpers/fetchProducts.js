const fetchProducts = async () => {
  // seu código aqui
  const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
  const response = await fetch(url);
  const data = response.json();  
  return data;      
};

// const {id, title, thumbnail} = product;      
//       const objeto = {
//         id: id,
//         title: title,
//         thumbnail: thumbnail,
//       };
//       console.log(objeto);
// console.log(fetchProducts());

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
