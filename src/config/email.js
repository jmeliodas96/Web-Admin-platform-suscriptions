const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'jmena0396@gmail.com',
        pass: 'lasoraya1996'
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


