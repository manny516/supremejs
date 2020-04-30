const path = require('path');
const fs = require('fs');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');



app.set('view engine', 'pug');

let testContent = `
    {
        "barberInfo" : [

            {
                "name": "Danny Inman",
                "hours": ["8am","10am","1pm","4pm"],
                "phone": "6462305467"
            },
            {
                "name": "Jordan Pelli",
                "hours": ["7am","9am","12pm","2pm"],
                "phone": "7182309877"
            },
            {
                "name": "toby lense",
                "hours": ["3am","10am","1pm","2pm"],
                "phone": "71823435277"
            }
        ],

        "barberInfo" : [

            {
                "name": "Danny Inman",
                "hours": ["8am","10am","1pm","4pm"],
                "phone": "6462305467"
            },
            {
                "name": "Jordan Pelli",
                "hours": ["7am","9am","12pm","2pm"],
                "phone": "7182309877"
            },
            {
                "name": "toby lense",
                "hours": ["3am","10am","1pm","2pm"],
                "phone": "71823435277"
            }
        ]
    }

`;

let createFile = (content,path='') => {

    fs.writeFileSync(`${path}rou.json`,content, (err) =>{
        if(err){
            throw err;
        }
        console.log('file is created');
    });
    
}
let pathName = "/dist";

// const createDir = (dirPath) => {
//     fs.mkdirSync(process.cwd() + dirPath, {recursive : true}, (error) => {
//         if(error){
//             console.error("An error occurred : ", error);
//         }else{
//             console.log("Your Directory was made !");
//         }
//     });

// }


//Static DIR for the server side template
app.use(express.static(path.join(__dirname + '/views/js')));
//Static DIR for the server side template
app.use(express.static(path.join(__dirname + '/views/css')));

//Static DIR for the main index site;
app.use(express.static('dist'));

//Body Parser Middleware
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());


// Loading Index page of the Application 
app.get('/',(req,res) =>{
    res.sendFile(path.join('index.html'));
});

app.get('/dashboard', function(req,res){
    res.render('dashboard');
    
});


app.get('/update-success',(req,res)=>{
   res.render('update-success');
})

app.post('/send-update', (req,res) =>{

    createFile(testContent,`./${pathName}/`);
    console.log("File created ");  
    // res.redirect('/update-supreme');
    console.log("hello world");
    res.location("/update-supreme"); 
    

});

//Update Barber data for page 






// app.get('/createfile',function(req,res){
    
    
// });


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

