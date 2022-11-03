const { Sequelize } = require('sequelize')
const { dbConnectionLog } = require('./__helperDB')

const db_mui = new Sequelize('MUI', 'test', 'test', {
    host: 'localhost',
    port: 1433,
    dialect: 'mssql',
    // logging: console.log,
    logging: false,
    dialectOptions: {
        options: {
            useUTC: true,
            encrypt: false,
            trustedConnection: true,
            requestTimeout: 60000, // 1Min
        }
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
})
db_mui.authenticate()
    .then(() => dbConnectionLog('MUI'))
    .catch((error) => console.log('MUI Connection Error => : ', error))

module.exports = {
    db_mui
}