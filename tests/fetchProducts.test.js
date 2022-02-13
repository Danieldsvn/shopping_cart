require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fecthProducts', () => {     
  it('Verifica se fetchProducts é uma função',  () => {    
    expect(typeof fetchProducts).toBe('function');
  });
  it('Verifica se ao passar "computador" como parametro na função fetchProducts a função fetch é chamada', async () => {  
    await fetchProducts('computador');  
    expect(fetch).toHaveBeenCalled();
  });  
  it('Verifica se ao chamar a função fetchProducts com o argumento "computador", a função fetch utiliza o endpoint "https://api.mercadolibre.com/sites/MLB/search?q=computador"', () => {  
    fetchProducts('computador');  
    expect(fetch).toHaveBeenCalledWith("https://api.mercadolibre.com/sites/MLB/search?q=computador");
  });
  it('Testa se o retorno da função fetchProducts com o argumento "computador" é uma estrutura de dados igual ao objeto computadorSearch.', async () => {   
    const computerObject = await fetchProducts('computador');     
    expect(typeof computerObject).toBe(typeof computadorSearch);
  }); 
  it('Teste se, ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem: You must provide an url', () => {      
    expect(fetchProducts()).rejects.toThrowError(new Error('You must provide an url'));
  });      
});
