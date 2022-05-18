const { Sequelize } = require('sequelize');
const { mysqlConfig, app:{isProduction} } = require('../env_config');
const models = require('../models/sql');

const sequelize = new Sequelize({
  ...mysqlConfig
});

/**
 * Función asíncrona que conecta a la BBDD de MySQL
 * @async
 */
const connectMySQL = async () => {
    try {
        console.log('Conectando a la BBDD de MySQL...');
        await sequelize.authenticate();
        console.log('MySQL connected...');
        //Si se quiere que no se creen las tablas en la BBDD todo el rato y solo se actualizen poner a false o en production el NODE_ENV
        await models.forEach(model => model.sync({ force: !isProduction }));
        console.log("All models were synchronized successfully.");
    } catch (error) {
        console.log(`Unable to connect to MySQL database: ${error}`);
    }
}

module.exports = {connectMySQL, sequelize};
