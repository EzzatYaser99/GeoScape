const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.post('/send-email', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    const subject = req.body.subject;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'restaurant.chef2022@gmail.com', // Replace with your email address
            pass: 'ldsn opps eeug qrux' // Replace with your email password
        }
    });

    const mailOptions = {
        from: `${email}`,
        to: 'restaurant.chef2022@gmail.com', // Replace with recipient email address
        subject:`${subject}` ,
        text: `
      Name: ${name + 'mmmm'}
      Email: ${email}
      Message: ${message}
    `
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent:', info.response);
            res.status(200).send('Email sent successfully');
        }
    });
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});