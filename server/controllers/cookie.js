exports.SET_COOKIES = async (req, res) => {
    try {
        res.cookie('signed_cookie', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxMCwiZnVsbF9uYW1lIjoiS2FtcnVsIElzbGFtIiwiZW1haWwiOiJrLmlzbGFtQGJleGltdGV4LmNvbSIsIm1vYmlsZSI6Ijg4MDE2Nzc2OTU2OTEiLCJyb2xlIjo4ODg4fSwiaWF0IjoxNjY2OTY2NTAyLCJleHAiOjE2NjcxMzkzMDJ9.5BhVk_qy141K9vHnQK0BiZsNgnbqJvjB-9Gz-6qxj8k', {
            expires: new Date(Date.now() + (30 * 60)),
            maxAge: 500000, // Same as expires in

            httpOnly: true, // Not accessible by js

            sameSite: 'none',

            secure: true, // Https only (If ssl not activated then false)

            // domain, We need to specify real Domain like www.bookshelf365.com, All subdomaines will receive this cookie
            // domain: 'http://localhost:9001',

            path: '/',
            /*signed: true,
             * We have to use a secret key as middleware in app.js like app.use(cookieParser(process.env.COOKIE_SECRET))
             * And receive cookies from req.signedCookies if signed is true
             * If user modify cookie then res.signedCookies.foo value will be false
              */
            signed: true,
        })

        res.cookie('non_signed_cookie', 'token2', {
            path: '/',
            expires: new Date(Date.now() + (30 * 60)),
            maxAge: 500000, // Same as expires in
            httpOnly: true,
            sameSite: 'none',
            secure: true
        })

        res.cookie('js_accessible_cookie', 'im js accessible cookie', {
            path: '/',
            expires: new Date(Date.now() + (30 * 60)),
            maxAge: 500000, // Same as expires in
            httpOnly: false,
            sameSite: 'none',
            secure: true
        })

        res.status(201).json({ message: 'Cookies are set' })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Error' })
    }
}

exports.GET_COOKIES = async (req, res) => {
    try {
        // console.log({ ...req.cookies, ...req.signedCookies })
        res.status(200).json({ ...req.cookies, ...req.signedCookies })
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: 'Error' })
    }
}

exports.DELETE_COOKIES = async (req, res) => {
    try {
        res.clearCookie('non_signed_cookie')
        res.status(200).json({ message: 'non_signed_cookie has been deleted' })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Error' })
    }
}
