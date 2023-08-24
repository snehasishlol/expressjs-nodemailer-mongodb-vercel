const nodemailer = require('nodemailer');
const AUTH = require('../config/mail.json');

const transporter = nodemailer.createTransport({
    host: AUTH.HOST,
    port: AUTH.PORT,
    secure: true,
    auth: {
        user: AUTH.USER,
        pass: AUTH.PASS
    }
});

const sendMail = async (to, subject, text) => {
    return await transporter.sendMail({
        from: 'Name <mail@mail.com>',
        to: to,
        subject: subject || 'New mail',
        html: text
    });
}

module.exports = sendMail;