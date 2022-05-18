const nodeMailer = require('nodemailer');
const {mail:{SMTP_HOST, SMTP_PASS, SMTP_PORT, SMTP_USER, FROM_MAIL}} = require('../env_config');
const sendEmail = async (options) => {
  // create a transporter
  const transporter = nodeMailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS
      }
  });
  // send mail with defined transport object
    const message = {
        from: `${FROM_MAIL} <${FROM_MAIL}>`,
        to: options.email,
        subject: options.subject,
        text: options.message
    }

    const info = await transporter.sendMail(message);
    console.log('Message sent: %s', info.messageId);
}

module.exports = sendEmail;
