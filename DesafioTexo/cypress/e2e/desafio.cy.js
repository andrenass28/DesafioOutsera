describe('Automação via Endpoint', () => {
  it('Capturar dados do endpoint /albums/1/photos e validar o item id=6', () => {
    // Realiza uma requisição GET para o endpoint desejado
      cy.request('GET', 'https://jsonplaceholder.typicode.com/albums/1/photos')
      .then((response) => {
        // Verifica se a requisição retornou um status 200 OK
        expect(response.status).to.eq(200);

        // Captura os dados da resposta JSON
        const data = response.body;
        
        // Salvar os dados em um array JSON 
        const jsonData = data.map(item => ({
          albumId: item.albumId,
          id: item.id,
          title: item.title,
          url: item.url,
          thumbnailUrl: item.thumbnailUrl
        }));
  
        // Validar os dados do objeto com id = 6
        const objetoId6 = jsonData.find(item => item.id === 6);
        expect(objetoId6).to.exist;
        expect(objetoId6.title).to.equal('accusamus ea aliquid et amet sequi nemo');
      });
    });
  });

/*Cenário BDD: Validar dados do objeto com id = 6 em /albums/1/photos
  Given I visit "https://jsonplaceholder.typicode.com/guide/"
  When I click on the "Guide" menu
  And I navigate to "/albums/1/photos"
  Then I capture and validate the object with id = 6

  describe('Automação via Tela', () => {
    it('Acessar e validar dados do endpoint /albums/1/photos', () => {   
      // Acessar o link https://jsonplaceholder.typicode.com/guide/
      cy.visit('https://jsonplaceholder.typicode.com/guide/');
  
      // Acessar o menu Guide
      cy.contains('Guide').click();
     
      // Navegar até o link /albums/1/photos e abri-lo
      cy.contains('/albums/1/photos').click();
      cy.wait(5000);

      // Capturar os dados exibidos em tela e salvá-los num array JSON
      cy.get('pre').should('exist').then(($pre) => {
        const data = JSON.parse($pre.text());
  
        // Validar os dados do objeto com id = 6
        const objetoId6 = data.find(item => item.id === 6);
        expect(objetoId6).to.exist;
        expect(objetoId6.title).to.equal('accusamus ea aliquid et amet sequi nemo');
      });
    });
  });*/
