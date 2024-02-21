
const allBtn = document.getElementsByClassName("btn");
console.log(allBtn);

for (const key of allBtn){
    key.addEventListener ('click', function(event){
        const seatName = event.target.innerText;
        
    })
}




function getConvertedValue (id){
    const price = document.getElementById(id).innerText;
    const convertedPrice = price;
    return convertedPrice;
}

