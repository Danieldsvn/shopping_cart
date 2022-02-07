const fetchProducts = async () => {
  // seu código aqui
  const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
  const response = await fetch(url);
  const data = response.json();  
  return data;      
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
