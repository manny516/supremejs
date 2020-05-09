import {Services} from './Services';
import{Appointment} from './Appointment';


 const Booking = (
     function(){ fetch('./barberData.json')
    .then((response) => response.json())
    .then((data) =>{
        const barberSchedule = {};
        const bookBtn = document.querySelector(".book-btn");
        const bookForm = document.querySelector('#booking-form');
        const spaBody = document.querySelector("body");

        const hiddenService = document.querySelector('.serviceField');
        const hiddenPrice = document.querySelector('.priceField');
        const hiddenTask = document.querySelector('.taskField');

        data['appointments'].forEach((item,index) => { 

            barberSchedule[index] = new Services(item);
            barberSchedule[index] =  barberSchedule[index].barberIdentity();
            document.getElementById("target").insertAdjacentHTML('afterbegin',barberSchedule[index]);
            
            bookBtn.addEventListener("click",function(e){
                const btnParent = e.currentTarget.parentElement;
    
                Appointment.serviceId = btnParent.getAttribute("data-id");
                bookForm.classList.toggle("show-form");
                spaBody.classList.toggle("freeze");
                hiddenService.setAttribute('value',item.service);
                hiddenPrice.setAttribute('value', item.price);
                hiddenTask.setAttribute('value',item.tasks);
                // console.log( `ITem ID : ${item.id} Price: ${item.price} Services : ${item.service} Tasks: ${item.tasks}`);
            });


            
        });

    })
    .then()
    .catch(console.error());
})();

const form =  `
        <article id="booking-form"> 
            <button class="exit-form"> X </button>
            <form method="POST" action="/send">
            <h2> Please fillout the information </h2>
            <input class="barberField" type="hidden" name="barber" value="${Appointment.barberName}" />
            <input class="serviceField" type="hidden" name="service" value="${Appointment.service}" />
            <input class="priceField" type="hidden" name="price" value="${Appointment.price}" />
            <input class="taskField" type="hidden" name="task" value="${Appointment.tasks}" />
            <input class="dateField" type="hidden" name="date" value="${Appointment.date}" />
            <input class="timeField" type="hidden" name="time" value="${Appointment.time}" />
            
            
            <section class="input-field"> 
                <label> Name</label>
                <input type="text" class="client" name="client"/>
            </section>

            <section class="input-field">
                <label> Email </label>
                <input type="text" name="email" class="email" />
            </section>

            <section class="input-field">
                <label> Phone </label>
                <input type="text" name="phone" class="phone" />
            </section>

            <button type="submit" class="submit-btn"> Submit </button>
            </form>
        </article>

    `;


export{Booking,form};