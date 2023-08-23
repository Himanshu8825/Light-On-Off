let bulb = document.querySelector("#bulb");
let button = document.querySelector("#btn");

button.addEventListener("click",()=>{
    console.log(bulb.src);
    if (bulb.src.match(`off`)){
        bulb.src = "on.webp";
        button.innerHTML = "Turn Off";
    }
    else{
        bulb.src = "off.jpg";
        button.innerHTML = "Turn On";
    }
    

})