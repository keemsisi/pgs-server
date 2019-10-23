'use strict';

const nodemailer = require('nodemailer');
const username = process.env.ACCOUNT_USERNAME ;
const password = process.env.ACCOUNT_PASSWORD ;


async function sendActivationLink(mailObject) {
      
    // Create a SMTP transporter object
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // upgrade later with STARTTLS
        auth: {
          user: username,
          pass: password
        }

    });

    // Message object
    let message = {
        from: 'FUNAAB PROMOTBOT <promotbotfunaab@funaab.edu.ng>',

        // Comma separated list of recipients
        to: ` new staff <keemsisi@gmail.com>`,
        // bcc: 'andris@ethereal.email',

        // Subject of the message
        subject: 'Account Activation Link From Promotbot ✔',

        // plaintext body
        text: mailObject.message,

        // HTML body
        // html:
        //     '<p><b>Hello</b> to myself <img src="cid:note@example.com"/></p>' +
        //     '<p>Here\'s a nyan cat for you as an embedded attachment:<br/><img src="cid:nyan@example.com"/></p>',

        // An array of attachments
        // attachments: [
        //     // String attachment
        //     {
        //         filename: 'notes.txt',
        //         content: 'Some notes about this e-mail',
        //         contentType: 'text/plain' // optional, would be detected from the filename
        //     },

        //     // Binary Buffer attachment
        //     {
        //         filename: 'image.png',
        //         content: Buffer.from(
        //             'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEUAAAD/' +
        //                 '//+l2Z/dAAAAM0lEQVR4nGP4/5/h/1+G/58ZDrAz3D/McH8yw83NDDeNGe4U' +
        //                 'g9C9zwz3gVLMDA/A6P9/AFGGFyjOXZtQAAAAAElFTkSuQmCC',
        //             'base64'
        //         ),

        //         cid: 'note@example.com' // should be as unique as possible
        //     },

            // // File Stream attachment
            // {
            //     filename: 'nyan cat ✔.gif',
            //     path: __dirname + '/assets/nyan.gif',
            //     cid: 'nyan@example.com' // should be as unique as possible
            // }
        // ]
    };

    let info = await transporter.sendMail(message);

    console.log('Message sent successfully as %s', info.messageId);
    
}

sendActivationLink({'message' : "Yes"}).catch(err => {
    console.error(err.message);
    process.exit(1);
});