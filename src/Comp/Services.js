class Services{

    constructor({service,price, tasks,popular,id}){
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
        this.id = id;

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
        <section class="barber-sch" data-id="${this.id}">
            <h1>${this.service}</h1>

            <div> $${this.price} </div>

            <section class="barber-services"> 
                <ul>
                    ${this.servicesList()}
                </ul>
            </section>
            
            <button class="book-btn"> Book Now </button>
        </section>
        `;
        return barberTitle;
        
    }

}

export {Services};