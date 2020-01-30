import {Services} from './Services';

 const Booking = (function(){ fetch('./barberData.json')
    .then((response) => response.json())
    .then((data) =>{
        const barberSchedule = {};
        data['appointments'].forEach((item,index) => { 
            barberSchedule[index] = new Services(item);
            barberSchedule[index] =  barberSchedule[index].barberIdentity();
            document.getElementById("target").insertAdjacentHTML('afterbegin',barberSchedule[index]);
        });

    })
    .catch(console.error());
})()


export{Booking};