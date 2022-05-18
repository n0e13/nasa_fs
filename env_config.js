/**
 * @author Noemy García
 * @module configs/env_config
 * @exports aka
 */

/** Paquete dotenv */
const dotenv = require('dotenv');
dotenv.config();

/** Librería de claves */
const aka = {
    app: {
        PORT: process.env.PORT,
        NODE_EVN: process.env.NODE_ENV,
        isProduction: process.env.NODE_ENV === 'production',
        SECRET: process.env.SECRET,
        JWT_EXPIRATION: process.env.JWT_EXPIRATION,
    },
    mail:{
        SMTP_HOST: process.env.SMTP_HOST,
        SMTP_PORT: process.env.SMTP_PORT,
        SMTP_USER: process.env.SMTP_USER,
        SMTP_PASS: process.env.SMTP_PASS,
        FROM_MAIL: process.env.FROM_MAIL,
    },
    mongo: {
        MONGO_URI: process.env.DBMONGO_URI
    },
    mysql:{
        MYSQL_HOST: process.env.DBMYSQL_HOST,
        MYSQL_USER: process.env.DBMYSQL_USER,
        MYSQL_PASSWORD: process.env.DBMYSQL_PASSWORD,
        MYSQL_DATABASE: process.env.DBMYSQL_DATABASE

    },
    mysqlConfig:{
        host: process.env.DBMYSQL_HOST,
        username: process.env.DBMYSQL_USER,
        password: process.env.DBMYSQL_PASSWORD,
        database: process.env.DBMYSQL_DATABASE,
        dialect: process.env.DBMYSQL_DIALECT,
        define: {
            freezeTableName: true
        }
    }
};

module.exports = aka;
