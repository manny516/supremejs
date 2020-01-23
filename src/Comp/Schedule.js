class Schedule{

    constructor(barberName,image, services,socialMedia){
        /** 
         * 
         * @param barberName return String   
         * @param image  return URL String 
         * @param services  return Array for services input
         * @param socialMedia return Object
         **/
        
        this.barberName = barberName; 
        this.image = image;
        this.services = services;
        this.socialMedia = socialMedia;

    }


    servicesCheckbox(){
        
        let inputArray = [];
        for(let i = 0; i < this.services.length; i++){
         inputArray[i] = `<input type="checkbox" name="${this.services[i]}" value="${this.services[i]}" /> ${this.services[i]}`; 
        };
        return inputArray.join(' ');
    }

    socialMediaLinks(){
            let socialLink = `
                <a href="${this.socialMedia.facebook}" class="fa"> Facebook </a> \n
                <a href="${this.socialMedia.instagram}" class="fa"> Instagram  </a> \n
                <a href="${this.socialMedia.twitter}" class="fa"> Twitter   </a>
            `;
            return socialLink;
    }



    barberIdentity(){
        
        const barberTitle = `
        <section class="barber-sch">
            <h1>${this.barberName}</h1>

            <figure>
                <img src="${this.image}" alt="Barber Image" />
            </figure>

            <section class="barber-calendar">
                <input class="date-picker" type="text">
                
            </section>

            <section class="barber-services"> 
                ${this.servicesCheckbox()}
            </section>
            
            <section class="barber-social">
                <nav>
                  ${this.socialMediaLinks()}
                </nav>
            </section>
        </section>
        `;
        return barberTitle;
        
    }

}

export {Schedule};
