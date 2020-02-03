
const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
const nodemailer = require('nodemailer');


const app = express();

//S
// app.use('/dist',express.static(path.join(__dirname,'dist')));
app.use(express.static('dist'));
//Body Parser Middleware
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

app.get('/',(req,res) =>{
    res.sendFile(path.join(__dirname+'/dist/index.html'));
})

app.post('/send',function(req,res){
    console.log(req.body);
    const output = `
        <h1> Barber : ${req.body.barber} | Date : ${req.body.date} |  Time : ${req.body.time} </h1>
        <h2>Client : ${req.body.client} </h2>
        <

        <h3> Booking </h3>
        <ul>
            <li>Price : $${req.body.price} </li>
            <li> Service : ${req.body.service} </li>
            <li> ${req.body.task} </li>
        </ul> <br /><br />

        <h3>Contact Info</h3>
        <ul> 
            <li> ${req.body.email} </li>
            <li> ${req.body.phone} </li>
        </ul>
    `;


    // create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    host: "mail.mannyidea.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'manny@mannyidea.com', // generated ethereal user
      pass: '12345' // generated ethereal password
    },
    tls:{
        rejectUnauthorized:false
    }
  });

  // send mail with defined transport object
  let mailOptions = {
    from: '"Node Application " <manny@mannyidea.com>', // sender address
    to: "mwalthrust@gmail.com", // list of receivers
    subject: "Test Email", // Subject line
    html: output // html body
  };

  transporter.sendMail(mailOptions, (error,info) => {
      if(error){
          return console.log(error);
      }
      console.log("Message sent: %s", info.messageId);
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  });

})


  
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
 
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...




app.listen(4000, () => console.log('server-started'));

