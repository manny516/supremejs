console.log(__dirname);

const path = require('path');
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const nodemailer = require('nodemailer');
const urlencodedParser = bodyParser.urlencoded({extended : false});
const pathName = "/dist";

app.set('view engine','ejs')



//Body Parser Middleware
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());




//Static DIR for the server side template
app.use(express.static(path.join(__dirname + '/views/js')));

//Static DIR for the server side template
app.use(express.static(path.join(__dirname + '/views/css')));

//Static DIR for the main index site;
app.use(express.static('dist'));


/********************
    GET  REQUEST 
********************/

// Loading Index page of the Application 
app.get('/',(req,res) =>{
    res.sendFile(path.join('index.html'));
});

app.get('/dashboard', function(req,res){
    res.render('dashboard');
    
});

app.get('/update/:name',(req,res)=>{
    res.render('update-success',{person: req.params.name});
});

app.get('/success',(req,res) =>{
    res.render('successmail');
});


/********************
    POST  REQUEST 
********************/
app.post('/update-data',urlencodedParser,(req,res) =>{

    // grab  Post data from form field
    const data = req.body; 

    // Open and read Json file data then Parse that data then store the data in memory for use.
    const readData = fs.readFileSync(__dirname + `${pathName}/new.json`,'utf8'); 
    const parseData = JSON.parse(readData);
    const saveReadData = {barberInfo:[]};
    let letUpdateIndex, arrayMatch, postData, jsonData, updatedData;
 
    
    parseData.barberInfo.forEach((item)=>{
        saveReadData.barberInfo.push(item);
    });

    //use array index to update the selected Json data. Update the json data with form field data
    letUpdateIndex = saveReadData.barberInfo[data.barberIndex];
    arrayMatch = {};

    postData = [data.barberName,data.barberTime,data.barberPhone];
    jsonData = [letUpdateIndex.name, letUpdateIndex.hours,letUpdateIndex.phone];

    for(let i = 0 ; i < jsonData.length; i++){
        if(jsonData[i] == postData[i]){
            arrayMatch.noChange = true;
        }else{
            arrayMatch.noChange = false;
            break;
        }

    }
    console.log(arrayMatch);

    if( arrayMatch.noChange == false){

        letUpdateIndex.name = data.barberName ;
        letUpdateIndex.hours = data.barberTime.split(',');
        letUpdateIndex.phone = data.barberPhone ;
        
        updatedData = JSON.stringify(saveReadData);

        //write the updated data  into the Json file.
        fs.writeFileSync(__dirname + `${pathName}/new.json`, updatedData);

        res.render('update-success',{data : req.body});    
            
    }
    
});


//Post request to Send HTML email on form Submit
app.post('/send',function(req,res){
    let transporter, mailOptions;

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

    console.log(req.body);


// create reusable transporter object using the default SMTP transport
 transporter = nodemailer.createTransport({
    host: "mail.mannyidea.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'test@mannyidea.com', // generated ethereal user
      pass: '12345' // generated ethereal password
    },
    tls:{
        rejectUnauthorized:false
    }
  });

  // send mail with defined transport object
    mailOptions = {
    from: '"Node Application " <test@mannyidea.com>', // sender address
    to: "manny@mannyidea.com", // list of receivers
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

  res.redirect('/success');

})

app.listen(4000, () => console.log('server-started'));

