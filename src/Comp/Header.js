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
            // let hoursData = (hoursItem)=>{
            //     // let dataReturn;
            //     // for(let i = 0; i < hoursItem.length;i++){
            //     //     dataReturn =  `<li>${hoursItem[i]}</li>`;
            //     //     console.log(dataReturn);
            //     // }

            //      return hoursItem;
            // }
            data.barberInfo.forEach((item,index) =>{
                // let dataResult = `
                //     <div class="barber" data-id=${index}>
                //         <h1> ${item.name} </h1>
                //         <ul>
                //             ${hoursData(item.hours[])}
                //         </ul>
                //     </div>
                // `;

                // console.log(dataResult);
                this.listOptions = `<option data-index="${index}" value="${item.name}">${item.name} </option>`;
                this.listSelect.insertAdjacentHTML("afterbegin",this.listOptions);
                // console.log(listOptions);
            });

            this.listSelect.addEventListener("change",(e)=>{
                this.barberIndex = e.currentTarget.getAttribute("data-current-index");
                this.hoursArray = data.barberInfo[this.barberIndex].hours;
                this.bookingForm.innerHTML = " ";
                for(let i = 0; i < this.hoursArray.length; i++){ 
                   this.hoursList = ` <div class="time-slot"> ${this.hoursArray[i]} </div>`;
                   console.log(this.hoursList);
                   this.bookingForm.insertAdjacentHTML("afterbegin",this.hoursList);

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