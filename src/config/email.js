const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});



exports.mailer = {
    sendMail(mailOptions) {
        return new Promise((resolve, reject) => {
            transporter.sendMail(mailOptions, (err, data) => {
                if (err) {
                    return reject(err);
                }
                resolve(data);
            });
        })
    }
}


