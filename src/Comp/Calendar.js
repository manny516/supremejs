import datepicker from 'js-datepicker'; 


function CalendarFunc(){ 
    
        datepicker('.date-picker', {
        formatter: (input, date) => {
            const value = date.toLocaleDateString()
            input.value = value // => '1/1/2099'
            console.log(input.value);
        }
        
    });

}


export {CalendarFunc}
        