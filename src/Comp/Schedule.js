class Schedule{

    constructor(barberName,image, services,socialMedia){
        /** 
         * 
         * @param barberIdentity  return String   
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
        this.services.forEach( (item)=>{
            let serviceCheck = `
            <input type="checkbox" name="${item}" value="${item}" />${item}
            `;
            return serviceCheck;
        });
    }

    socialMediaLinks(){
        this.socialMedia.map((socialItem) =>{
            let socialLink = `
                <a href="${socialItem.facebook}" class="fa-facebook">  </a>
                <a href="${socialItem.instagram}" class="fa-instagram">  </a>
                <a href="${socialItem.twitter}" class="fa-twitter">  </a>
            `;
            return socialLink;
        });
    }

    barberIdentity(){

        const barberTitle = `
        <section class="barber-sch">
            <h1>${this.barberName}</h1>

            <figure>
                <img src="${this.image}" alt="Barber Image" />
            </figure>

            <section class="barber-services"> 
        
            </section>
            
            <section class="barber-social">
                <nav>
                  
                </nav>
            </section>
        </section>
        `;

        return barberTitle;
    }
 
}

export {Schedule};
