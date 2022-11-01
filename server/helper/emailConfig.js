var nodemailer = require("nodemailer")

const mailTransporter = nodemailer.createTransport({
    host: '192.168.100.7',
    port: 25,
    secure: false,
    pool: true,
    ignoreTLS: true,
    tls: {
        rejectUnauthorized: false
    }
})


const leaveDeptApproveRequestTemplate = (fromMail, toMail, origin) => {
    return {
        from: fromMail,
        to: toMail,
        subject: "Leave application approval request",
        html: `
        <p style="line-height: 140%;word-wrap:break-word;font-weight:normal;font-size:16px;">
                Dear Sir/Madam, <br>
                Leave request from ${fromMail} is pending for approval.<br>
                Visit <a href="${origin}/#/hr/leave-approve" style="color:#00a8ff;">${origin}</a> to approve or reject the request.
        </p>`
    }
}

const leaveHrApproveRequestTemaplate = (fromMail, toMail, origin) => {
    return {
        from: fromMail,
        to: toMail,
        subject: "Leave application approval request",
        html: `
        <p style="line-height: 140%;word-wrap:break-word;font-weight:normal;font-size:16px;">
                Dear Sir/Madam, <br>
                Leave request from ${fromMail} is pending for approval.<br>
                Visit <a href="${origin}/#/dashboard/hr/leave-pending-list" style="color:#00a8ff;">${origin}</a> to approve or reject the request.
        </p>`
    }
}

const leaveRequestRejectNotification = (fromMail, toMail, origin, location) => {
    /**
     * @param location: department or hr
     */
    return {
        from: fromMail,
        to: toMail,
        subject: "Leave application rejected",
        html: `
        <p style="line-height: 140%;word-wrap:break-word;font-weight:normal;font-size:16px;">
                Your leave request has been rejected from ${location}.<br>
                Visit <a href="${origin}/#/hr/leave" style="color:#00a8ff;">${origin}</a> for details.
        </p>`
    }
}

const leaveRequestApproveNotification = (fromMail, toMail, origin) => {
    return {
        from: fromMail,
        to: toMail,
        subject: "Leave application approved",
        html: `
        <p style="line-height: 140%;word-wrap:break-word;font-weight:normal;font-size:16px;">
                Your leave request has been approved.<br>
                Visit <a href="${origin}/#/hr/leave" style="color:#00a8ff;">${origin}</a> for details.
        </p>`
    }
}


module.exports = {
    mailTransporter,
    leaveDeptApproveRequestTemplate,
    leaveHrApproveRequestTemaplate,
    leaveRequestRejectNotification,
    leaveRequestApproveNotification
}