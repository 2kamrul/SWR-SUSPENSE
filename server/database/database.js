const { Sequelize } = require('sequelize')
const { dbConnectionLog, GET_DB_HOST_15, GET_DB_HOST_16 } = require('./__helperDB')

/** ========= DASHBOARD ========= */
const db_dashboard = new Sequelize('DASHBOARD', process.env.DB_USER, process.env.DB_PASS, {
    host: GET_DB_HOST_15(),
    port: process.env.DB_PORT,
    dialect: 'mssql',
    logging: false,
    // logging: (output) => {
    //     // if (opts.log_queries) {
    //     //     log.it("sequelize_log", { log: output });
    //     // }
    //     console.log(output)
    // },
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
db_dashboard.authenticate()
    .then(() => dbConnectionLog('DASHBOARD'))
    .catch((error) => console.log('DASHBOARD Connection Error => : ', error))


module.exports = {
    db_dashboard,
}