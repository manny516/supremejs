class Header{

    constructor(barbers){
        this.barbers = barbers;
    
    }


    barberList(){

        const listOptions = `
        <select class="barber-options">
            <option value="Danny Inman">Danny Inman </option>
            <option value="Shaun Green"> Shaun Green</option>
            <option value="Malcom Reed"> Malcom Reed </option>
            <option value=" Flyod Stiff"> Flyod Stiff </option>
        </select>`;

        return listOptions;
    }


    barberTime(){
        const hours = `
            <select class="barber-time"> 
            
                <option value="8"> 8AM </option>
                <option value="9"> 8AM </option>
                <option value="10"> 10AM </option>
                <option value="11"> 11AM </option>
                <option value="12"> 12PM </option>
                <option value="13"> 1PM </option>
                <option value="14"> 2PM </option>
                <option value="15"> 3PM </option>
                <option value="16"> 4PM </option>
                <option value="17"> 5PM </option>
                <option value="18"> 8PM </option>
            
            </select>
        
        `;

        return hours;
    }

    barberSelector(){

        const selectorHtml = `              

            <header> 
                <h1> Supreme Cuts </h1>
                <hr>

                <section>
                    ${this.barberList()}
                </section>

                <section>
                    <input class="date-picker" type="text" placeholder="MM/DD/YYYY" />
                </section>
                
                <section>
                    ${this.barberTime()}
                </section>
            
            </header>
        `;

        return selectorHtml;

    } 

   
}


export{Header}