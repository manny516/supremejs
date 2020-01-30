class Services{

    constructor({service,price, tasks,popular}){
        /** 
         * 
         * @param service  return String   
         * @param price  return Number 
         * @param services  return Array for services input
         * @param popular return Number
         **/
        
        this.service = service; 
        this.price = price;
        this.tasks = tasks;
        this.popular = popular; 

    }

    servicesList(){
        
        const inputArray = [];
        for(let i = 0; i < this.tasks.length; i++){
         inputArray[i] = `<li class="barber-task"> ${this.tasks[i]} </li>`; 
        };
        return inputArray.join(' ');
    }



    barberIdentity(){
       
        const barberTitle = `
        <section class="barber-sch">
            <h1>${this.service}</h1>

            <div> $${this.price} </div>

            <section class="barber-services"> 
                <ul>
                    ${this.servicesList()}
                </ul>
            </section>
            
            <button> Book Now </button>
        </section>
        `;
        return barberTitle;
        
    }

}

export {Services};