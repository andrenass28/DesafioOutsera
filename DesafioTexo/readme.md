Comandos para instalação do cypress e report via VS Code na pasta local: 

npm install cypress (instalação Cypress) 
npm install --save-dev mocha mochawesome mochawesome-merge mochawesome-report-generator (instalação do Report de execução) 

Comando para executar automação: 
npx cypress open (via tela) 
npx cypress run --spec cypress/e2e/desafio.cy.js --reporter mochawesome (via back ground com report da execução) 