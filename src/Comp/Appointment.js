import datepicker from 'js-datepicker'; 

const Appointment = new Object;



 const viewAction =( ) =>  {

    const publicAPI = {CalendarFunc,appointmentQue,bookForm}
    
    function appointmentQue () {
        const optionsTag = document.querySelector('.barber-options');
        optionsTag.addEventListener("change", function(){
            Appointment.barberName = this.options[this.selectedIndex].value;
            console.log(Appointment);
        });


    }

    function CalendarFunc() { 
        
        datepicker('.date-picker', {
            formatter: (input, date) => {
                const value = date.toLocaleDateString()
                input.value = value // => '1/1/2099'
                Appointment.time = input.value;
                console.log(Appointment);
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


        exitForm.addEventListener("click", function(){
            bookForm.classList.toggle("show-form");
            spaBody.classList.toggle("freeze");
        });


        submitBtn.addEventListener("click", function(){
            let box ;
            let errorMessage = [];
            
            Appointment.Name = clientName.value;
            Appointment.email = email.value;
            console.log(clientName.value);
            if( clientName.value != "" && Number(regLetter.test(clientName.value)) == 1 ){
                console.log("Valid name");
            }else{
                console.log('Sorry Invalid');
            }

            if(Number(regNum.test(phone.value)) == 1 && phone.value.length == 10){
                console.log("Valid Phone Number");
            }else{
                console.log("Not Valid Phone Number");
                box = 0;
            }

            box == Number(false) ? console.log("Error") : 0 ;

            
            
        });


    }


    return publicAPI; 

}


export {viewAction,Appointment}