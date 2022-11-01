const { FAKE_USER, createRandomUser } = require('../faker/user')

exports.GET_DUMMY_USER_LIST = async (req, res) => {
    try {
        const user_list = FAKE_USER({ length: req.params.quantity })

        setTimeout(function () {
            return res.status(200).json(FAKE_USER(user_list))
        }, 2000)
    } catch (error) {
        console.log(error)
    }
}

exports.GET_DUMMY_USER_DETAILS = async (req, res) => {
    try {
        setTimeout(function () {
            return res.status(200).json(createRandomUser())
        }, 500)

    } catch (error) {
        console.log(error)
    }
}