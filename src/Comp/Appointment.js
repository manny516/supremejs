import datepicker from 'js-datepicker'; 

const Appointment = new Object;



 const viewAction =( ) =>  {

    const publicAPI = {CalendarFunc,appointmentQue}
    
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


    return publicAPI; 

}


export {viewAction,Appointment}