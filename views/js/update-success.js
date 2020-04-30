
setTimeout(()=>{
    console.log("Text now");
    window.location.href = "/dashboard";
},3000);

// const fs = require('fs');

// let path = './new.json';

// fs.readFile(`${path}`, (err, data) => {
//     if (err) throw err;
//     let student = JSON.parse(data);
//     console.log(student);
// });


// let path = './dist/new.json';
// const rowDataContainer = document.querySelector('.row-content');
// console.log(rowDataContainer);
// fs.readFile(`${path}`, (err, data) => {
//     if (err) throw err;
//     let student = JSON.parse(data);
//     student.barberInfo.forEach((item)=>{
//         console.log(item);
        
//     });
  
    
// });


// fetch("./new.json")
// .then((response) => response.json())
// .then((data) => {
//     const rowDataContainer = document.querySelector('.row-content');
//     console.log(data.barberInfo);
//     data.barberInfo.forEach((item)=>{

//         let rowContent = `
//         <td>${item.name} </td>
//         <td>${item.hours.join()} </td>
//         <td>${item.phone} </td>
//         `;

//         rowDataContainer.insertAdjacentHTML("beforebegin",rowContent);

//     });
// });