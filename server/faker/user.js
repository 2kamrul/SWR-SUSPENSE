const { faker } = require('@faker-js/faker')

const createRandomUser = () => {
    return {
        userId: faker.datatype.uuid(),
        name: faker.name.firstName(),
        avatar: faker.image.avatar(),
        lorem: faker.lorem.paragraph(),
        city: faker.address.city()
    }
}


const FAKE_USER = ({ length = 10 }) => {
    const user_list = []
    Array.from({ length: length }).forEach((item, index) => {
        user_list.push({ id: index, ...createRandomUser() })
    })
    return user_list
}

module.exports = {
    createRandomUser,
    FAKE_USER
}
