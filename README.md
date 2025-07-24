# 📦 Mari Oliveira Ink Clients API

API RESTful desenvolvida com Node.js, Express e PostgreSQL para o cadastro, gerenciamento e consulta de clientes. Criada com foco em boas práticas de estruturação, tipagem com TypeScript e organização modular de código.

## 🔧 Funcionalidades

- ✅ Cadastro de novos clientes
- 🔍 Consulta de todos os clientes
- 🔎 Consulta de cliente por ID
- ✏️ Atualização de dados de cliente
- 🗑️ Remoção de cliente do sistema

## 📁 Estrutura do Projeto

mari_clients_api/
├── src/
│ ├── config/ # Configuração do banco de dados PostgreSQL
│ ├── controllers/ # Lógica dos endpoints da API
│ ├── models/ # Modelos TypeScript dos dados
│ ├── routes/ # Definição das rotas da API
│ └── server.ts # Arquivo principal do servidor
├── .env # Variáveis de ambiente (DB, porta etc.)
├── package.json # Dependências e scripts
└── README.md


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

---
## 🧪 Exemplos de Endpoints

- `GET /clients` → Lista todos os clientes
- `GET /clients/:id` → Busca cliente por ID
- `POST /clients` → Cria novo cliente
- `PUT /clients/:id` → Atualiza cliente existente
- `DELETE /clients/:id` → Remove cliente

## 👨‍💻 Autor

Desenvolvido por **Bruno Simon** – [@simonntech](https://github.com/simonntech)

---
