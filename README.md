# Contact-List

Essa API foi criada para testar e consolidar meus conhecimentos em desenvolvimento backend com Node.js.

O projeto consiste em uma API RESTful para gerenciamento de contatos, permitindo realizar operações de CRUD (Create, Read, Update, Delete).

Inicialmente os dados eram armazenados em um arquivo JSON, mas o projeto foi evoluído para utilizar banco de dados relacional com Prisma e PostgreSQL.

---

## 🚀 Tecnologias

* Node.js (Express)
* TypeScript
* Prisma ORM
* PostgreSQL
* Docker
* Zod (validação)
* fs (utilizado anteriormente com JSON)
* Gemini CLI (pair programmer - testes)

---

## 🧠 Sobre o projeto

A API permite:

* Criar contatos
* Listar contatos
* Buscar contato por ID
* Atualizar contatos
* Deletar contatos

Cada contato possui:

* id
* name
* email (único)
* phone

---

## 🐳 Banco de Dados

O projeto utiliza PostgreSQL rodando em um container Docker.

O Prisma é responsável por:

* Modelagem do banco
* Migrations
* Comunicação com o banco de dados

---

## ⚙️ Rodando o projeto (com Docker)

### Pré-requisitos

* Docker instalado
* Docker Compose instalado

---

### 📦 Clonando o repositório

```bash
git clone https://github.com/JoaoAlves20/Contact-List.git
cd Contact-List
```

---

### 🔐 Configurar variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
DATABASE_URL="postgresql://[usuario]:[senha]@localhost:5432/[nome do banco]"
```

---

### 🚀 Subir aplicação + banco

```bash
docker-compose up --build
```

Ou em background:

```bash
docker-compose up -d --build
```

---

### 🌐 Acessar aplicação

* API: http://localhost:3000

---

## 🛠 Rodando sem Docker (opcional)

### Pré-requisitos

* Node.js
* PostgreSQL rodando localmente

---

### Instalar dependências

```bash
npm install
```

---

### Rodar migrations

```bash
npx prisma migrate dev
```

---

### Rodar projeto

```bash
npm run dev
```

---

## 🗄 Prisma

Para gerar o client:

```bash
npx prisma generate
```

Para rodar migrations em produção:

```bash
npx prisma migrate deploy
```

---

## 📌 Observações

* O campo `email` é único (não permite duplicação)
* O banco é persistido via volume Docker
* O Prisma gerencia toda a estrutura do banco

---

## 📈 Evoluções do projeto

* Migração de JSON → PostgreSQL
* Integração com Prisma ORM
* Containerização com Docker
* Estrutura mais próxima de projetos reais

---

## 🎯 Próximos passos

* Autenticação com JWT
* Relacionamento entre entidades
* Deploy em cloud
* Padronização de arquitetura (services, repositories, controllers)

---

## 📄 Licença

Este projeto é apenas para fins de estudo.