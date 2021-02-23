# [NLW#4] Start Project Docker

## Command Docker
`docker-compose -f "docker-compose.yml" up -d --build`

#### OBS: 
    - lembrar de abrir o bash e instalar o "npm install".
    - O comando "yarn dev-mr" desse projeto lhe ajudará a startar o projeto já com as migrações.
    - Para estár adicionando UUID no mysql vejá documentação, exemplo utilizando;

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
