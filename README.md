# BookShopServer

Servidor desenvolvido em Node.js com Express para a aplicação [ReactBookShop](https://github.com/jpiologo/ReactBookShop).

## Descrição

Este projeto implementa um servidor para gerenciar uma livraria online, fornecendo APIs para operações relacionadas a livros e favoritos.

## Tecnologias Utilizadas

- **Node.js** - Ambiente de execução JavaScript.
- **Express** - Framework minimalista para Node.js.
- **CORS** - Middleware para habilitar o compartilhamento de recursos entre origens diferentes.
- **JSON** - Utilizado para armazenar dados dos livros e favoritos.

## Estrutura do Projeto

- **controladores/**: Contém os controladores que lidam com a lógica de negócios.
- **rotas/**: Define as rotas da aplicação.
- **servicos/**: Inclui serviços auxiliares utilizados pelos controladores.
- **app.js**: Ponto de entrada da aplicação.
- **livros.json**: Arquivo JSON que armazena os dados dos livros.
- **favoritos.json**: Arquivo JSON que armazena os livros favoritos.

## Pré-requisitos

- [Node.js](https://nodejs.org/) instalado.

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/jpiologo/BookShopServer.git
   cd BookShopServer

2. Dependências:

    - npm install
    - npm install -g nodemon
    - npm install express
    - npm install cors
    - nodemon app.js
