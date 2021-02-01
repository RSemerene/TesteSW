# Teste de Habilidades SoftWrap

Link para acesso: https://projeto-testesw.web.app

Este projeto foi desenvolvido com a utilização das tecnologias React.js e Firebase. 

## Descrição

O projeto representa uma página para cadastros de informações de usuários. Esse dados podem ser diretamente acessados no próprio projeto na página "Data". Os dados são requisitados do Firebase. 

Para rodar o projeto basta clonar e digitar: 
### `npm start`

## Execução

A execução desta aplicação teve origem na criação do projeto Firebase. Em seguida, foi criado o projeto no React.js.

Após estas etapas, no React.js foram definidas as rotas, bem como o início da criação das páginas do site. Para este projeto também foi elaborado um Header. Em seguida, as páginas e o próprio Header foram estilizados utlizando-se da biblioteca styled-components.

Logo após, foram criadas ações para que fosse possível a inserção dos dados diretamente na base de dados Firestore do Firebase, com a função "adicionar()", que contempla o comando "collection('dados').add. 

Na sequência foi possível fazer a listagem desses dados requisitados, na página "Data", em formato de tabela, com o State e com o Effect, utilizados juntamente com a chamada do snapshot. Nesta parte foram requisitadas duas características do objeto doc: O id, usado pra remover dados (mostrado abaixo) e o data usado propriamente para a listagem dos dados (operador spread).

Finalizando, foram inseridos os botões de remover e de editar. A ação remover foi feita usando um "id", descoberto dentro de "docs" do Firebase (doc.id). As páginas são atualizadas de acordo com a atualização do estado da aplicação (setState). 

A ação do botão Editar não foi executada. Infelizmente, mesmo após inúmeras pesquisas, não foi possível executar um código capaz de editar a página Add, para então atualizá-la. No entanto, seguimos estudando, buscando e aperfeiçoando. Então é provável que dentro de alguns dias será implementada mais esta funcionalidade no projeto. Por causa desse acontecimento descrito neste parágrafo, o botão "Editar" foi retirado da aplicação, para não prejudicar a experiência do usuário. 

Link para acesso: https://projeto-testesw.web.app

Abaixo, são mostradas quatro imagens representativas dos processos criados (páginas da aplicação e base de dados Firestore/Firebase):

![Alt text](./home.png?raw=true "Página Inicial")

![Alt text](./data.png?raw=true "Tabela de Dados")

![Alt text](./add.png?raw=true "Cadastre-se")

![Alt text](./belini.png?raw=true "Base de Dados")

