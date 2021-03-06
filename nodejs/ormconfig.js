/**
 * 
 */
module.exports =
[
    {
        "name": "sqlite",
        "type": "sqlite",
        "database": "./src/database/sqlite/database.sqlite",
        "migrations": [process.env.TYPEORM_MIGRATIONS],
        "cli" : {
            "migrationsDir": process.env.TYPEORM_MIGRATIONS_DIR,
        },
        "entities": [
            process.env.TYPEORM_ENTITIES_DIR, 
        ],
        "synchronize": true
    }, {
        "name": "sqlite_test",
        "type": "sqlite",
        "database": "./src/database/sqlite/database.test.sqlite",
        "migrations": [process.env.TYPEORM_MIGRATIONS],
        "cli" : {
            "migrationsDir": process.env.TYPEORM_MIGRATIONS_DIR,
        },
        "entities": [
            process.env.TYPEORM_ENTITIES_DIR, 
        ],
        "synchronize": true
    },
    {
        "name": "mysql",
        "type": "mysql",
        "host": "db_mysql",
        "port": 3306,
        "username": "root",
        "password": "root",
        "database": "database_nlw",
        "migrations": [process.env.TYPEORM_MIGRATIONS],
        "cli" : {
            "migrationsDir": process.env.TYPEORM_MIGRATIONS_DIR,
        },
        "entities": [
            process.env.TYPEORM_ENTITIES_DIR, 
        ],
        "synchronize": true
    },
    {
        "name": "mysql_test",
        "type": "mysql",
        "host": "db_mysql",
        "port": 3306,
        "username": "root",
        "password": "root",
        "database": "database_nlw_test",
        "migrations": [process.env.TYPEORM_MIGRATIONS],
        "cli" : {
            "migrationsDir": process.env.TYPEORM_MIGRATIONS_DIR,
        },
        "entities": [
            process.env.TYPEORM_ENTITIES_DIR, 
        ],
        "synchronize": true
    },
    {
        "name": "postgres",
        "type": "postgres",
        "host": "db_pg",
        "port": 5432,
        "username": "postgres",
        "password": "postgres",
        "database": "database_nlw",
        "migrations": [process.env.TYPEORM_MIGRATIONS],
        "cli" : {
        "migrationsDir": process.env.TYPEORM_MIGRATIONS_DIR,
        },
        "entities": [
            process.env.TYPEORM_ENTITIES_DIR, 
        ],
        "synchronize": true
    },
    {
        "name": "postgres_test",
        "type": "postgres",
        "host": "db_pg",
        "port": 5432,
        "username": "postgres",
        "password": "postgres",
        "database": "database_nlw_test",
        "migrations": [process.env.TYPEORM_MIGRATIONS],
        "cli" : {
        "migrationsDir": process.env.TYPEORM_MIGRATIONS_DIR,
        },
        "entities": [
            process.env.TYPEORM_ENTITIES_DIR, 
        ],
        "synchronize": true
    },
]
