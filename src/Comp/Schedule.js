class Schedule{

    constructor(barberName,image, services,socialMedia){

        this.barberName = barberName; //@Param Expects a return String 
        this.image = image; //@Param Expects a return String 
        this.services = services;   //@Param Expects a return Array
        this.socialMedia = socialMedia; //@Param Expects a return Array

    }


    barberIdentity(){

        const barberTitle = `
        <div class="barber-sch">
            <h1>${this.barberName}</h1>
            
        </div>
        
        `;


    }






}



export {Schedule};