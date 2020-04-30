console.log("Update: Javascript Loaded !!");

fetch("./new.json")
.then((response) => response.json())
.then((data) => {
    const rowDataContainer = document.querySelector('.row-content');
    console.log(data.barberInfo);
    data.barberInfo.forEach((item)=>{

        let rowContent = `
        <td>${item.name} </td>
        <td>${item.hours.join()} </td>
        <td>${item.phone} </td>
        `;
        rowDataContainer.insertAdjacentHTML("beforebegin",rowContent);

    });
});
