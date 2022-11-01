require('dotenv').config({ path: '.env' })
require('dotenv').config({ path: 'config.env' })
const fs = require('fs')


describe("Enviornemental testing", () => {

    test("enviornment should be the production for build", () => {
        const enviornment = process.env.ENVIORNMENT
        expect(enviornment).toBe('PRODUCTION')
    })

    test("application version_no should match with virtual directory version_no", () => {
        const version_no = process.env.VERSION_NO //App version_no
        const config = fs.readFileSync('./web.config', 'utf8') // Read config file
        const index = config.toString().replace(/\r\n/g, '\n').split("\n")[3].search(version_no) // Finding the version_no in 4th line
        // if exist then return index other wise -1
        expect(index).toBeGreaterThan(-1)
    })
})