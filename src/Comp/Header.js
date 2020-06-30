class Header{

    constructor(barbers){
        this.barbers = barbers;
        this.root = document.querySelector("#root");
        this.listSelect = document.querySelector(".barber-options");
        this.bookingForm =  document.querySelector(".time-chart");
        this.listOptions;
        this.barberIndex;
        this.hoursArray;
        this.hoursList;
    }

    dataFetch(){
        fetch('./new.json')
        .then((response)=>response.json())
        .then((data)=>{

            console.log(this.selectOpt);

            data.barberInfo.forEach((item,index) =>{
                this.listOptions = `<option data-index="${index}" value="${item.name}">${item.name} </option>`;
                this.listSelect.insertAdjacentHTML("afterbegin",this.listOptions);
            });

            this.listSelect.addEventListener("change",(e)=>{
                let timeSlotsAll ; 
                let timeField;

                this.barberIndex = e.currentTarget.getAttribute("data-current-index");
                this.hoursArray = data.barberInfo[this.barberIndex].hours;
                this.bookingForm.innerHTML = " ";
                for(let i = 0; i < this.hoursArray.length; i++){ 
                   this.hoursList = ` <div class="time-slot"> ${this.hoursArray[i]} </div>`;
                   console.log(this.hoursList);
                   this.bookingForm.insertAdjacentHTML("afterbegin",this.hoursList);
                }

                timeSlotsAll = document.querySelectorAll(".time-slot");
                timeField = document.querySelector(".timeField");
                
                if(timeSlotsAll){
                    
                    for(let x = 0; x < timeSlotsAll.length; x++){

                        timeSlotsAll[x].addEventListener("click",(e)=>{
                            console.log(e.currentTarget.innerHTML);
                            timeField.setAttribute("value",e.currentTarget.innerHTML);
                        })
                    }

                }
            });

        });


        const selectorHtml = `              

            <header> 
                <h1> Supreme Cuts </h1>
                <hr>
                <section>
                
                </section>

                <section>
                  <input class="date-picker" type="text" placeholder="MM/DD/YYYY" />
                </section>
                
                <section>
                </section>
            
            </header>
        `;

        return selectorHtml;

    } 
}


export{Header}