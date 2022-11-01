const { errorMsg } = require('../helper/messages')
exports.FIRST_ACCOUNT = async (req, res) => {
    try {
        return res.status(500).json(errorMsg)
        setTimeout(function () {
            // return res.status(400).json(errorMsg)
            return res.status(200).json({
                balance: 20000,
                withdraw: 2000
            })
        }, 1000)
    } catch (error) {
        console.log(error)
    }
}

exports.SECOND_ACCOUNT = async (req, res) => {
    try {
        setTimeout(function () {
            return res.status(200).json({
                balance: 30000,
                withdraw: 3000
            })
        }, 1000)
    } catch (error) {
        console.log(error)
    }
}

exports.THIRD_ACCOUNT = async (req, res) => {
    try {
        setTimeout(function () {
            return res.status(200).json({
                balance: 40000,
                withdraw: 4000
            })
        }, 1000)
    } catch (error) {
        console.log(error)
    }
}