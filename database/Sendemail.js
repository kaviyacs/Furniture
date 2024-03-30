// const nodemailer = require('nodemailer'); 
// const acsd = nodemailer.createTransport({
//      host: 'smtp.gmail.com', 
//      port: 587, 
//      secure: false, 
//      auth: { user: 'kaviyacs28@gmail.com', pass: 'ytbg vrvt teje brqo' } }); 
//      const mailOptions = { 
//         from: 'kaviyacs28@gmail.com', 
//         to: 'pooranismitha1320@gmail.com', 
//         subject: 'Welcome to onboard',
//         html: '<h1>Welcome to the Smitha Consulting Solutions</h1>'
//      }; 
//      acsd.sendMail(mailOptions, (error, info) => 
//      { if (error) { 
//         console.error('Error occurred:', error); 
//     } 
//     else
//      { 
//         console.log('Email sent:', info.response); 
//     } 
// });

const nodemailer = require('nodemailer');
const randomstring = require('randomstring'); // Import the randomstring library

const acsd = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: 'kaviyacs28@gmail.com',
        pass: 'ytbg vrvt teje brqo'
    }
});

const recipients = [
    { email: 'rlavanyabsc2002@gmail.com', name: 'Recipient 1' },
    { email: 'pooranismitha1320@gmail.com', name: 'Recipient 2' },
    // Add more recipients as needed
];

recipients.forEach(recipient => {
    const password = randomstring.generate(10); // Generate a random password
    const mailOptions = {
        from: 'kaviyacs28@gmail.com',
        to: recipient.email,
        subject: 'Welcome to onboard',
        html: `<h1>Welcome ${recipient.name} to the tcs Consulting Solutions</h1>
               <p>Your password is: ${password}</p>` // Include the password in the email body
    };

    acsd.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error occurred:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    });
});
