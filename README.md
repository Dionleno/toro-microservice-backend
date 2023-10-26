# Aplicação Toro Investimentos
Aplicação simulando ambiente da toro investimentos
 
<p align="center">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=8257E5&labelColor=000000">
</p>

## ✨ Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org/)
- [Serverless Framework](serverless.com/) 
- [Amazon Lambda](https://aws.amazon.com/pt/lambda/)
- [Docker](https://www.docker.com/)
- [Prisma ORM](https://www.prisma.io/)
- 
## 💻 Projeto

O projeto tem como objetivo simular ambiente da toro investimentos.

## 🚀 Como executar

- Clone o repositório e acesso o diretório

### Arquitetura do projeto
Foi provisionado essa arquitetura no AWS cloud, foi utilizado as seguintes tecnologias:
- AWS Lambda
- AWS CloudFront
- AWS IAM
- AWS RDS
- AWS S3
- OAUTH0 para autenticação
  
![image](https://github.com/Dionleno/toro-microservice-backend/assets/19779057/0974a950-7a87-4a2a-80ad-13368313ca77)

### Para rodar localmente
- Rode `npm install` ou `npm i` para instalar as dependências
- Rode `docker-compose up -d` para subir um container com o database Postgress
- Rode `npm run db:generate:models` para criar as classes de acordo com as entidades do banco de dados
- Rode `npm run db:generate:migration` para rodar as migrations e criar a estrutura do banco de dados
- Rode `npm run  db:seed` para popular as tabelas do banco de dados
- Rode `npm start` para rodar a aplicação localmente

### Variaveis de ambiente
O arquivo .env contém as variaveis necessarias para executar a aplicação local. Para executar no ambiente produtivo as variaveis estão cadastradas nas secrets do github.

### Para fazer o deploy
Foi configurado uma esteira de desenvolvimento integrado com o CI/CD, para fazer o deploy no ambiente, basta fazer o merge na branch main.
