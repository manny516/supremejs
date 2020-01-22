
import {Schedule} from './Comp/Schedule';
let data = "<p> Hello this is test </p>";


const barberSchedule = new Schedule("newItem.name","newItem.userImage");;
// console.log(barberSchedule.barberIdentity());
let returnData = fetch('./barberData.json')
.then((response) => response.json())
.then((data) =>{
    let userName ;
    let userImage;
    const barberSchedule 
    data.map((items) =>{
        const items$= new Schedule(userName,userImage);
        userName = items.name;
        userImage = items.userImage;
        console.log(barberSchedule.barberIdentity());
    });
    
    

});



export {data};
