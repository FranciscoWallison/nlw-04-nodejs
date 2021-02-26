# [NLW#4] Start Project Docker, Dokcer-Compose, Jenkis, NodeJs, Sqlit, Mysql e Porstgres

## OBS: 
#### 1 Lembrar de abrir o bash e instalar o "npm install".
#### 2 Para star selecionando os [DRIVES](https://github.com/FranciscoWallison/nlw-04-nodejs/blob/main/docker-compose.yml#L21).
#### 3 O comando ["yarn dev-mr"](https://github.com/FranciscoWallison/nlw-04-nodejs/blob/main/nodejs/package.json#L10) desse projeto lhe ajudará a startar o projeto já com as migrações.
#### 4 Para estár adicionando UUID no mysql vejá documentação, vejá exemplo utilizando nesse projeto [aqui](https://github.com/FranciscoWallison/nlw-04-nodejs/blob/main/nodejs/src/database/migrations/1614094730404-CreateUsers.ts#L15).
#### Referencia utilizada para criar webhook com jenkins e github [aqui](https://medium.com/@naistangz/building-a-ci-cd-pipeline-for-a-node-js-app-with-docker-and-jenkins-ee6db6e70d25).
#### Possiveis erros e suas soluções [aqui]

_______
## Comandos básicos Docker e DOCKER-COMPOSE
#### Executando docker-compose 
- docker-compose -f "docker-compose.yml" down
- docker container exec -u 0 -it 14802ce72cc4 bash
## Comandos básicos MIGRATIONS
#### Executando migrations
 - yarn typeorm migration:run
#### Revertendo migrations
 - yarn typeorm migration:revert
#### Criando migrations
 - yarn typeorm migration:create -n CreateUsers
## Comandos básicos SQLITE
#### Install sqlite3 LINUX
- sudo apt install sqlite3
#### Acessando banco 
-  sqlite3 database.sql
#### Lista todos as tabelas
- .tables

## Comandos básicos POSTGRES
-  psql -U postgres
#### Lista todos os bancos
- \l
#### Selecionar o banco 
- \c database_nlw postgres
#### Lista todos as tabelas
- \d

## Comandos básicos MYSQL
- mysql -uroot -proot
#### lista todos os bancos
- show databases;
#### Selecionar o banco 
- USE database_nlw;
#### Lista todos as tabelas
- show tables;

# Testing continuous integration
## Comandos básicos jenkins
#### Primeiro acesso
- cat /var/jenkins_home/secrets/initialAdminPassword

# Erros
## Table 'database_nlw_test.surveys' doesn't exist
#### Solução 
    - yarn typeorm schema:drop -c "$CONNECTION_DRIVE"_test