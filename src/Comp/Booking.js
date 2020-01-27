import {Services} from './Services';

 let booking = (function(){ fetch('./barberData.json')
    .then((response) => response.json())
    .then((data) =>{
        var barberSchedule = {};
        data['appointments'].forEach((item,index) => { 
            barberSchedule[index] = new Services(item);
            barberSchedule[index] =  barberSchedule[index].barberIdentity();
            document.getElementById("target").insertAdjacentHTML('afterbegin',barberSchedule[index]);
            
            // datepicker('.date-picker', {
            //     formatter: (input, date) => {
            //         const value = date.toLocaleDateString()
            //         input.value = value // => '1/1/2099'
            //         console.log(input.value);
            //     }
                
            // });
        });

    })
    .catch(console.error());
})()


export{booking};