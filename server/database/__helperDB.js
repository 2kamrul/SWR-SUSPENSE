const enviornment = process.env.ENVIORNMENT

exports.dbConnectionLog = (db_name) => {
    if (enviornment === 'PRODUCTION') {
        return console.log(`===========${db_name} PRODUCTION`)
    } else if (enviornment === 'TEST_PRODUCTION') {
        return console.log(`===========${db_name} TEST_PRODUCTION`)
    } else {
        return console.log(`----------${db_name} DEVELOPMENT`)
    }
}

exports.GET_DB_HOST_15 = () => {
    if (enviornment === 'PRODUCTION' || enviornment === 'TEST_PRODUCTION') {
        return process.env.DB_HOST_15
    } else {
        return 'localhost'
    }
}

exports.GET_DB_HOST_16 = () => {
    if (enviornment === 'PRODUCTION' || enviornment === 'TEST_PRODUCTION') {
        return process.env.DB_HOST_16
    } else {
        return 'localhost'
    }
}