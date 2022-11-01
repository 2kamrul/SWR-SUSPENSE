const nodemailer = require('nodemailer')

exports.SEND_EMAIL = async (mailInfo) => {
    const { sender_name, from, to, cc, subject, body } = mailInfo
    try {
        return await nodemailer.createTransport({
            host: '192.168.100.7',
            port: 25,
            secure: false,
            pool: true,
            ignoreTLS: true,
            tls: {
                rejectUnauthorized: false
            }
        }).sendMail({
            from: `${sender_name} <${from}>`,
            to: to,
            cc: cc,
            subject: subject,
            text: body
        })
    } catch (error) {
        return false
    }
}