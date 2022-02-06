const fetchItem = (id) => {
  // seu código aqui
  // const url = `https://api.mercadolibre.com/items/${id}`;  
  // const response = fetch(url)
  //   .then((response) => response.json())
  //   .then((data) => console.log(data))
  //   .catch((error) => console.log(error));
};

// console.log(fetchItem("MLB1341706310"));

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
