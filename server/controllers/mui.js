const { USER_SCH } = require('../models/mui')

exports.GET_DUMMY_USER_LIST = async (req, res) => {
    let { page, limit } = req.query
    if (!page) page = 1
    if (!limit) limit = 10
    page = parseInt(page)
    limit = parseInt(limit)
    try {
        const result = await USER_SCH.findAndCountAll({

            logging: console.log,

            offset: (page - 1) * limit,

            limit: limit
        })

        // res.status(400).end()
        // setTimeout(function () {
        res.status(200).json(result)
        // }, 2000)

    } catch (error) {
        console.log(error)
    }
}