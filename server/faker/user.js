const { faker } = require('@faker-js/faker')

const createRandomUser = () => {
    return {
        name: faker.name.firstName(),
        avatar: faker.image.avatar(),
        company: faker.company.name(),
        city: faker.address.cityName(),
        salary: faker.finance.amount(),
        animal: faker.animal.cat(),
        location: faker.address.country(),
        vehicle: faker.vehicle.vehicle(),
        music: faker.music.genre(),
        phone: faker.phone.number(),
        lorem: faker.lorem.paragraph(),
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
