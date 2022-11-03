require('dotenv').config()
const { USER_SCH } = require('./models/mui')
const { FAKE_USER } = require('./faker/user')

const populateSampleData = async () => {
    try {
        await USER_SCH.truncate()
        await USER_SCH.bulkCreate(FAKE_USER({ length: 100000 }))
        console.log('!!DONE!!')
    } catch (error) {
        console.log(error)
    }
}

populateSampleData()