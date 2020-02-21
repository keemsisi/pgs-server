'use strict';

const nodemailer = require('nodemailer');
var sgTransport = require('nodemailer-sendgrid-transport');


/**
 * Connection with the sendgrid server 
 */
const options = {
    auth: {
      api_user: 'SENDGRID_USERNAME',
      api_key: 'SENDGRID_PASSWORD'
    }
  }
var client = nodemailer.createTransport(sgTransport(options));


const username = process.env.ACCOUNT_USERNAME;
const password = process.env.ACCOUNT_PASSWORD;



/**
 * 
 * @param {var sgTransport = require('nodemailer-sendgrid-transport');


 */

async function sendActivationLink(mailObject , callback ) {

    // Create a SMTP transporter object
    let transporter = nodemailer.createTransport({
        service: 'SendGrid',
        auth: {
            user: 'integralcodex',
            pass: 'GIFTED11@int'
        }

    });

    // Message object
    console.log("Starting to send message...." , mailObject[0])

    let message = {

        from: 'FUNAAB PROMOTBOT <funaaabpromotbot@unaab.edu.ng>',

        // Comma separated list of recipients
        to: ` User Email ${mailObject.email[0]},`,
        bcc: `Server Administrator ${mailObject.email[1]}`,

        // Subject of the message
        subject: ' ✔ Finalize your Registration ::: Promotbot Account Activation link',

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

// const objectHash = require('object-hash')
// const tokenExpiringDate = new Date(Date.now() + (1000 * 24 * 60 * 60));
// const token = objectHash({} + Date.now());
//working
// sendActivationLink({

//     email: "keemsisi@gmail.com",

//     message: "Your regiteration was successful , please click on the link to verify your account and the link expires "

//         + tokenExpiringDate.toDateString()

//         + " at " + tokenExpiringDate.toTimeString() +
//          " .Account activation link : http://promotbotweb.com/account/username/#/activate/?token=" + token

// }).then(function (success) {
//     console.table(success);
    
// })
// .catch(function(reason) {
//     console.table(reason);
//     // response.send({"errMsg" : reason});
// });

module.exports = {sendActivationLink}