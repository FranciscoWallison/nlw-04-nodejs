/**
 * 
 */

if(process.env.CONNECTION_DRIVE === 'sqlite' ){
    module.exports = {
        "type": "sqlite",
        "database": "./src/database/sqlite/database.sqlite",
        "migrations": [process.env.TYPEORM_MIGRATIONS],
        "cli" : {
            "migrationsDir": process.env.TYPEORM_MIGRATIONS_DIR,
        },
        entities: [
            process.env.TYPEORM_ENTITIES_DIR, 
        ],
        "synchronize": true
     }
}else if ( process.env.CONNECTION_DRIVE === 'mysql' ){
    module.exports = {
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
        entities: [
            process.env.TYPEORM_ENTITIES_DIR, 
        ],
        "synchronize": true
     }
}else if ( process.env.CONNECTION_DRIVE === 'postgres' ){
    module.exports = {
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
        entities: [
            process.env.TYPEORM_ENTITIES_DIR, 
        ],
        "synchronize": true
     }
}
