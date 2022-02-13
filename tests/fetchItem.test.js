require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fecthItem', () => {  
  it('Verifica se fetchItem é uma função',  () => {    
    expect(typeof fetchItem).toBe('function');
  });
  it('Verifica se ao passar "MLB1615760527" como parametro na função fetchItem a função fetch é chamada', async () => {  
    await fetchItem('MLB1615760527');  
    expect(fetch).toHaveBeenCalled();
  });  
  it('Verifica se ao chamar a função fetchItem com o argumento "MLB1615760527", a função fetch utiliza o endpoint "https://api.mercadolibre.com/sites/MLB/search?q=MLB1615760527"', async () => {  
    await fetchItem('MLB1615760527');  
    expect(fetch).toHaveBeenCalledWith("https://api.mercadolibre.com/items/MLB1615760527");
  });
  it('Testa se o retorno da função fetchItem com o argumento "MLB1615760527" é uma estrutura de dados igual ao objeto item.', async () => {   
    const itemObject = await fetchItem('MLB1615760527');     
    expect(typeof itemObject).toBe(typeof item);
  }); 
  it('Teste se, ao chamar a função fetchItem sem argumento, retorna um erro com a mensagem: You must provide an url', () => {  
    const error = fetchItem();    
    expect(error).rejects.toThrowError(new Error('You must provide an url'));
  });     
});
