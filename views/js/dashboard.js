console.log("Update: Javascript Loaded !!");

const rowDataContainer = document.querySelector('.row-content');
const rowData = document.querySelector('.row-data');
let formFields, exitBtn, overlayDiv, formcontainer;
  
formFields = `
    <div class="overlay"> </div>
    <div class="form-container">
        <div class="exit"> X </div>
        <form class="myForm" method="POST" action="/update-data"> 
            <input name="barberIndex" class="barber-id" type="hidden"/>
            <label>Barber Name</label>
            <input name="barberName" class="barber-name main-field" type="text"/>

            <label>Barber Phone</label>
            <input name="barberPhone" class="barber-phone main-field" type="text"/>

            <label>Barber Time</label>
            <textarea name="barberTime" class="barber-time"></textarea>

            <input class="submitBtn" name="submit" type="submit" />
        </form>
    </div>
`;

rowData.insertAdjacentHTML("afterend",formFields);
exitBtn = document.querySelector('.exit');
formcontainer = document.querySelector('.form-container');
overlayDiv = document.querySelector('.overlay');

exitBtn.addEventListener("click",()=>{

    formcontainer.classList.remove('show-form');
    overlayDiv.classList.remove('show-form');

    
});

fetch("./new.json")
.then((response) => response.json())
.then((data) => {
    console.log(data.barberInfo);
    let barberIdField =document.querySelector('.barber-id');    
    let barberNameField = document.querySelector('.barber-name');
    let barberPhoneField = document.querySelector('.barber-phone');
    let barberTimeField = document.querySelector('.barber-time');
    let testIt,barberIndex,barberName,barberTime,barberPhone;
 

    data.barberInfo.forEach((item,index)=>{

        let rowContent = `
        <td class="update" data-index=${index} > X </td>
        <td class="barber-name">${item.name} </td>
        <td class="barber-time">${item.hours.join()} </td>
        <td class="barber-phone">${item.phone} </td>
        `;
        rowDataContainer.insertAdjacentHTML("beforebegin",rowContent);

        testIt = document.querySelectorAll(".update");

        testIt[index].addEventListener("click",(e)=>{

            barberIndex = e.currentTarget.getAttribute('data-index');
            barberName = document.querySelectorAll('.barber-name');
            barberTime = document.querySelectorAll('.barber-time');
            barberPhone = document.querySelectorAll('.barber-phone');
            
            console.log(barberIndex);

            formcontainer.classList.add('show-form');
            overlayDiv.classList.add('show-form');
            barberIdField.setAttribute("value",barberIndex);
            barberNameField.setAttribute("value",barberName[barberIndex].innerHTML);
            barberPhoneField.setAttribute("value",barberPhone[barberIndex].innerHTML);
            barberTimeField.innerHTML = barberTime[barberIndex].innerHTML;
        })

    });
});