const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.post('/send-email', (req, res) => {
    const ccEmails= `info123@geoscape.net`
    const name = req.body.name || '';
    const phone = req.body.phone || '';
    const email = req.body.email || '';
    const message = req.body.message || '';
    const service = req.body.service || '';

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'restaurant.chef2022@gmail.com',
            pass: 'ldsn opps eeug qrux'
        }
    });
    const mailOptions = {
        from: 'restaurant.chef2022@gmail.com',
        to: `${email}`,
        cc: `${ccEmails}`,
        subject:'Thank You for Contacting Geoscape Landscape!' ,
        text: `
      Dear  ${name + ','} ,
      Thank you for your interest in our ${service}.
       We will review your message and get back to you shortly via the ${phone}.
        you have left this message ,
         "${message}" 
        , and we will read it carefully.

     Best regards,
     
     The Geoscape Landscape Team
    `
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            res.status(500).send('Error sending email');
        } else {
            res.status(200).send('Email sent successfully');
        }
    });
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});