import {Services} from './Services';
import{viewAction} from './Appointment';


 const Booking = (
     function(){ fetch('./barberData.json')
    .then((response) => response.json())
    .then((data) =>{
        const barberSchedule = {};
        data['appointments'].forEach((item,index) => { 
            barberSchedule[index] = new Services(item);
            barberSchedule[index] =  barberSchedule[index].barberIdentity();
            document.getElementById("target").insertAdjacentHTML('afterbegin',barberSchedule[index]);
            const bookBtn = document.querySelector(".book-btn");
            bookBtn.addEventListener("click",function(e){
                console.log(e.currentTarget);
            })
            
        });

    })
    .then()
    .catch(console.error());
})();

const form =  `
        <article class="booking-form"> 
            <button class="exit-form"> X </button>
            <h2> Please fillout the information </h2>
            <section class="input-field"> 
                <label> Name</label>
                <input type="text" class="client-name" name="client-name"/>
            </section>

            <section class="input-field">
                <label> Email </label>
                <input type="text" name="email" class="email" />
            </section>

            <section class="input-field">
                <label> Phone </label>
                <input type="text" name="phone" class="phone" />
            </section>

            <button class="submit-btn"> Submit </button>
        
        </article>

    `;


export{Booking,form};