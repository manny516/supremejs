import datepicker from 'js-datepicker'; 

const Appointment = new Object;



 const viewAction =( ) =>  {

    const publicAPI = {CalendarFunc,appointmentQue,timeQue,bookForm}
    
    function appointmentQue () {
        const optionsTag = document.querySelector('.barber-options');
        optionsTag.addEventListener("change", function(){
            let hiddenBarber = document.querySelector('.barberField');
            Appointment.barberName = this.options[this.selectedIndex].value;
            hiddenBarber.setAttribute('value',Appointment.barberName);
            console.log(Appointment);
        });
    }

    function timeQue(){
        const optionsTime = document.querySelector('.barber-time');
        optionsTime.addEventListener("change", function(){
            let hiddenTime = document.querySelector('.timeField');
            Appointment.time = this.options[this.selectedIndex].value;
            hiddenTime.setAttribute('value',Appointment.time);
            // console.log(Appointment);
        });
    }

    function CalendarFunc() { 
        
        datepicker('.date-picker', {
            formatter: (input, date) => {
                const value = date.toLocaleDateString()
                input.value = value // => '1/1/2099'
                let hiddenDate = document.querySelector(".dateField");
                Appointment.date = input.value;
                hiddenDate.setAttribute('value',Appointment.date);   
            }
            
        });

    }


    function bookForm(){

        const bookForm = document.querySelector('#booking-form');
        const exitForm = document.querySelector('.exit-form');
        const spaBody = document.querySelector("body");
        const submitBtn = document.querySelector(".submit-btn");
        const clientName = document.querySelector(".client-name");
        const email = document.querySelector(".email");
        const phone = document.querySelector(".phone");

        const regNum = /^[0-9]/g;
        const regLetter = /^[a-zA-Z_ ]*$/;
        const regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


        exitForm.addEventListener("click", function(){
            bookForm.classList.toggle("show-form");
            spaBody.classList.toggle("freeze");
        });


        submitBtn.addEventListener("click", function(){
            let box = [] ;
            let errorMessage = [];

            function totals(total,num){
                return total+num;
            }

            console.log(clientName.value);

            if( clientName.value != "" && Number(regLetter.test(clientName.value)) == 1 ){
                console.log("Name Check : Valid name");
                box.push(0);
            }else{
                console.log('Name Check : Sorry Invalid Name');
                box.push(1);
            }

            if( email.value != "" && Number(regEmail.test(email.value)) == 1){
                console.log( "Email Check : Valid email Document");
                box.push(0);
            }else{
                console.log("Email Check : Sorry invalid email"); 
                box.push(1);
            }

            if(Number(regNum.test(phone.value)) == 1 && phone.value.length == 10){
                console.log("Phone Number Check : Valid Phone Number");
                box.push(0);
            }else{
                console.log("Phone Number Check : Not Valid Phone Number");
                box.push(1);
            }
            
            console.log(box.reduce(totals));

            if( box.reduce(totals) == 0){

                Appointment.name = clientName.value;
                Appointment.phone = phone.value;
                Appointment.email = email.value;
                // clientName.value = '';
                // phone.value = '';
                // email.value = '';

                console.log("Form Checks Out");

            }else{
                console.log("Please fix errors");
            }

            if(Appointment.time){
                console.log(Appointment.time);
            }
            
  
        });


    }


    return publicAPI; 

}


export {viewAction,Appointment}