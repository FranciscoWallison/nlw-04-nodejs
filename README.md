# [NLW#4] Start Project Docker

## Command Docker
`docker-compose -f "docker-compose.yml" up -d --build`

## OBS: 
#### 1 Lembrar de abrir o bash e instalar o "npm install".
#### 2 Para star selecionando o [DRIVE](https://github.com/FranciscoWallison/nlw-04-nodejs/blob/main/docker-compose.yml#L21).
#### 3 O comando ["yarn dev-mr"](https://github.com/FranciscoWallison/nlw-04-nodejs/blob/main/nodejs/package.json#L10) desse projeto lhe ajudará a startar o projeto já com as migrações.
#### 4 Para estár adicionando UUID no mysql vejá documentação, vejá exemplo utilizando nesse projeto [aqui](https://github.com/FranciscoWallison/nlw-04-nodejs/blob/main/nodejs/src/database/migrations/1614094730404-CreateUsers.ts#L15);

## Comandos básicos MIGRATIONS
#### Executando migrations
 - yarn typeorm migration:run
#### Revertendo migrations
 - yarn typeorm migration:revert
#### Criando migrations
 - yarn typeorm migration:create -n CreateUsers

_______

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
- show database;
#### Selecionar o banco 
- USE database_nlw;
#### Lista todos as tabelas
- show tables;
