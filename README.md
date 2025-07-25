# 📦 Mari Oliveira Ink Clients API

API RESTful desenvolvida com Node.js, Express e PostgreSQL para o cadastro, gerenciamento e consulta de clientes. Criada com foco em boas práticas de estruturação, tipagem com TypeScript e organização modular de código.
Será usada para gerenciar um Banco de Dados de clientes da minha esposa, que é tatuadora, e poderá ser utilizado para estudar os dados dos clientes como contatos, tatuagens favoritas, etc...

## 🔧 Funcionalidades

- 🚫 Todas rotas estão protegidas com autenticação através de Token
- ✅ Cadastro de novos clientes
- 🔍 Consulta de todos os clientes
- 🔎 Consulta de cliente por ID
- ✏️ Atualização de dados de cliente
- 🗑️ Remoção de cliente do sistema


## ⚙️ Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [pg (node-postgres)](https://node-postgres.com/)

## 🧪 Exemplos de Endpoints

- `GET /clients` → Lista todos os clientes
- `GET /clients/:id` → Busca cliente por ID
- `POST /clients` → Cria novo cliente
- `PUT /clients/:id` → Atualiza cliente existente
- `DELETE /clients/:id` → Remove cliente

## 👨‍💻 Autor

Desenvolvido por **Bruno Simon** – [@simonntech](https://github.com/simonntech)
