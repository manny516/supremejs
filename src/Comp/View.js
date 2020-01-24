import '../css/main.scss';
// import datepicker from 'js-datepicker'; 
import {Schedule} from './Schedule';
 
let data = (function(){ fetch('./barberData.json')
    .then((response) => response.json())
    .then((data) =>{
        var barberSchedule = {};
        data.forEach((item,index) => { 
            barberSchedule[index] = new Schedule(item);
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

        // let grabAllDataPicks = document.querySelectorAll(".date-picker");
        // console.log(grabAllDataPicks);
    })
    .catch(console.error());
})();

export {data}