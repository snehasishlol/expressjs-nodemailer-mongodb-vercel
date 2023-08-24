const { Resend } = require('resend');
const key = require('../config/resend.json').RESEND_KEY;

const resend = new Resend(key);

const sendMail = async (to, subject, text) => {
    await resend.emails.send({
        from: 'Changelogger <changelogger@no-reply.xtfz.tech>',
        to: to,
        subject: subject || 'New mail',
        html: text
    });
}

module.exports = sendMail;