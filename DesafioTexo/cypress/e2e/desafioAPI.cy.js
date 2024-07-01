/*1 - Realizar uma requisição do tipo GET
Realizar uma requisição no endpoint https://jsonplaceholder.typicode.com/comments
pesquisando pelo atributo name: alias odio sit
Validar o statuscode = 200 e o email do objeto retornado*/

describe('Teste de requisição GET', () => {
  it('Realiza uma requisição GET e valida o email do objeto retornado', () => {
    cy.request('GET', 'https://jsonplaceholder.typicode.com/comments')
      .then((response) => {
        expect(response.status).to.eq(200);
        const comment = response.body.find(comment => comment.name === 'alias odio sit');
        expect(comment).to.exist;
        expect(comment.email).to.not.be.empty;
        cy.log(`Email encontrado: ${comment.email}`);
      });
  });
});

/*2 - Realizar uma requisição do tipo POST
Realizar um post no endpoint https://jsonplaceholder.typicode.com/users enviando os
valores
no body
Validar o statuscode = 201 e o id retornado*/

describe('Teste de requisição POST', () => {
  it('Realiza uma requisição POST e valida o status code e o ID retornado', () => {
    const payload = {
      name: 'John Doe',
      username: 'johndoe',
      email: 'johndoe@example.com',
    };

    cy.request({
      method: 'POST',
      url: 'https://jsonplaceholder.typicode.com/users',
      body: payload,
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property('id').to.be.a('number');
      cy.log(`ID retornado: ${response.body.id}`);
    });
  });
});

/*3 - Realizar uma requisição do tipo PUT
Realizar um put no endpoint https://jsonplaceholder.typicode.com/users alterando os valores
dos campos: email, lat e lng do usuário com id = 5
Validar o statuscode = 200 e os dados alterados*/

describe('Teste de requisição PUT', () => {
  it('Realiza uma requisição PUT e valida o status code e os dados alterados', () => {
    const userId = 5;
    const updatedData = {
      email: 'newemail@example.com',
      address: {
        geo: {
          lat: '-37.3159',
          lng: '81.1496'
        }
      }
    };

    cy.request({
      method: 'PUT',
      url: `https://jsonplaceholder.typicode.com/users/${userId}`,
      body: updatedData,
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.deep.include(updatedData);
      cy.log(`Dados alterados: ${JSON.stringify(updatedData)}`);
    });
  });
});

