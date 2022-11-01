const jwt = require('jsonwebtoken')


// const accessAge = 3 * 60 * 60 // 3h
// exports.createAccessToken = (id) => {
//     return jwt.sign({ id }, process.env.JWT_ACCESS_SECRET, {
//         expiresIn: accessAge
//     })
// }

// const refreshAge = 7 * 24 * 60 * 60 // 7d
// exports.createRefreshToken = (id) => {
//     return jwt.sign({ id }, process.env.JWT_REFRESH_SECRET, {
//         expiresIn: refreshAge
//     })
// }

exports.verifyAccessToken = (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (token == null) return res.sendStatus(401)

    jwt.verify(token, process.env.JWT_ACCESS_SECRET, (err, decodedToken) => {
        if (err) {
            console.log(err)
            return res.sendStatus(403)
        }
        next()
    })
}


exports.verifyRefreshToken = (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (token == null)
        return res.sendStatus(401)
    jwt.verify(token, process.env.JWT_REFRESH_SECRET, (err, decodedToken) => {
        if (err) return res.sendStatus(403)
        next()
    })
}