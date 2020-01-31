import {Services} from './Services';

 const Booking = (
     function(){ fetch('./barberData.json')
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
})();

 const submitForm = (function(){

    const form =  `
        <article class="booking-form"> 

            <section class="client-name"> 
                <label> Name</label>
                <input type="text" name="client-name"/>
            </section>

            <section class="email">
                <label> Email </label>
                <input type="text" name="email" />
            </section>

            <section class="phone">
                <label> Phone </label>
                <input type="text" name="phone" />
            </section>

            <button class="submit-btn"> Submit </button>
        
        </article>

    `
    return form ;

 })();




export{Booking,submitForm};