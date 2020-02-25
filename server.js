const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const fs = require('fs');

let pathName = "/views/css";

const createDir = (dirPath) => {
    fs.mkdirSync(process.cwd() + dirPath, {recursive : true}, (error) => {
        if(error){
            console.error("An error occurred : ", error);
        }else{
            console.log("Your Directory was made !");
        }
    });
}


app.set('view engine', 'pug');


//Static DIR for the server side template
app.use(express.static(path.join(__dirname + '/views/js')));

//Static DIR for the main index site;
app.use(express.static('dist'));

//Body Parser Middleware
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());


// Loading Index page of the Application 
app.get('/',(req,res) =>{
    res.sendFile(path.join('index.html'));
})


//Update Barber data for page 


app.get('/update-supreme', function(req,res){
    res.render('test');
    res.sendStatus(200);
});

app.get("/createdir", function(req,res){
 
    fs.access(`.${pathName}`, function(error) {
    if (error) {
        console.log("Directory does not exist.");
        createDir(pathName);
        console.log("Directory was just created");
        res.redirect('/');


    } else {
        console.log("Directory exists.")
        
    }
    })
    
});



//Post request to Send HTML email on form Submit
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

  res.redirect('http://mannyidea.com');

})

app.listen(4000, () => console.log('server-started'));

