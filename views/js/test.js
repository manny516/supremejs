console.log("Update: Javascript Loaded !!");

const rowDataContainer = document.querySelector('.row-content');
const rowData = document.querySelector('.row-data');

(function(){
    const formFields = `
        <form class="myForm" method="POST" action="/update-data"> 
            <input name="barberIndex" class="barber-id" type="hidden"/>
            <label>Barber Name</label>
            <input name="barberName" class="barber-name" type="text"/>

            <label>Barber Phone</label>
            <input name="barberPhone" class="barber-phone" type="text"/>

            <label>Barber Time</label>
            <textarea name="barberTime" class="barber-time"></textarea>

            <input name="submit" type="submit" />
        </form>
    `;
    rowData.insertAdjacentHTML("afterend",formFields);
})();

const barberIdField = document.querySelector(".barber-id");
const barberPhoneField = document.querySelector(".barber-phone");
const barberNameField = document.querySelector(".barber-name");
const barberTimeField = document.querySelector(".barber-time");
    


fetch("./new.json")
.then((response) => response.json())
.then((data) => {
    console.log(data.barberInfo);
    data.barberInfo.forEach((item,index)=>{

        let rowContent = `
        <td class="update" data-index=${index} > X </td>
        <td class="barber-name">${item.name} </td>
        <td class="barber-time">${item.hours.join()} </td>
        <td class="barber-phone">${item.phone} </td>
        `;
        rowDataContainer.insertAdjacentHTML("beforebegin",rowContent);


        let testIt = document.querySelectorAll(".update");

        testIt[index].addEventListener("click",(e)=>{
            let barberIndex = e.currentTarget.getAttribute('data-index');
            let barberName = document.querySelectorAll('.barber-name');
            let barberTime = document.querySelectorAll('.barber-time');
            let barberPhone = document.querySelectorAll('.barber-phone');
            barberIdField.setAttribute("value",barberIndex);
            barberNameField.setAttribute("value",barberName[barberIndex].innerHTML);
            barberPhoneField.setAttribute("value",barberPhone[barberIndex].innerHTML);
            barberTimeField.innerHTML = barberTime[barberIndex].innerHTML;
        })

    });
});
