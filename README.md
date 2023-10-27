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

O projeto tem como objetivo simular ambiente da toro investimentos. <br><br>
Link da aplicação: [https://d3by8kp27jm2bq.cloudfront.net/](https://d3by8kp27jm2bq.cloudfront.net/)
<br><br>

Usuário   | Password
--------- | ------
client1@gmail.com | Cliente1
client2@gmail.com | Cliente2 

## 🚀 Como executar
- Clone o repositório e acesso o diretório

#### Froentend está nesse repositório [toro-frontend](https://github.com/Dionleno/toro-frontend) 

### Arquitetura do projeto
Foi provisionado essa arquitetura no AWS cloud, foi utilizado as seguintes tecnologias:
- AWS Lambda
- AWS CloudFront
- AWS IAM
- AWS RDS
- AWS S3
- AWS CloudWatch
- OAUTH0 para autenticação

![image](https://github.com/Dionleno/toro-microservice-backend/assets/19779057/7151b0be-12db-4b1a-becd-ea9cc243c96f)

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

### Modelagem database
<img width="555" alt="Captura de Tela 2023-10-26 às 17 33 04" src="https://github.com/Dionleno/toro-microservice-backend/assets/19779057/6c8f04ce-88cf-4154-98b5-df165c0f473e">
