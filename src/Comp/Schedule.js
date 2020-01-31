class Schedule{

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
                </sectio>
            
            </header>
        `;

        return selectorHtml;

    } 

   
}


export{Schedule}