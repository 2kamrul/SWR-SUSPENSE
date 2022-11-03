const { DataTypes } = require('sequelize')
const { db_mui } = require('../database/database')

const defaultProps = {
    timestamps: false,
    createdAt: false,
    updatedAt: false,
    freezeTableName: true,
}

const USER_SCH = db_mui.define('USERS', {
    name: {
        type: DataTypes.STRING
    },
    avatar: {
        type: DataTypes.STRING
    },
    company: {
        type: DataTypes.STRING
    },
    city: {
        type: DataTypes.STRING
    },
    salary: {
        type: DataTypes.STRING
    },
    animal: {
        type: DataTypes.STRING
    },
    location: {
        type: DataTypes.STRING
    },
    vehicle: {
        type: DataTypes.STRING
    },
    music: {
        type: DataTypes.STRING
    },
    phone: {
        type: DataTypes.STRING
    },
    lorem: {
        type: DataTypes.STRING
    }
}, { ...defaultProps })

module.exports = {
    USER_SCH
}