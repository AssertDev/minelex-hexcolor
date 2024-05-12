var colorPicker = new iro.ColorPicker("#picker", {
    width: 300,
    color: "#ffffff",
    borderWidth: 3,
    layout: [
        { 
          component: iro.ui.Wheel,
          options: {
            borderColor: '#ffffff'
          }
        },
        { 
          component: iro.ui.Slider,
        },
      ]
});

var hexColor = document.querySelector("#hexcolor");
const display = document.querySelector("#display");
const nickname = document.querySelector("#nickname");
const modalCopy = document.querySelector(".modal-background");


colorPicker.on(['color:init', 'color:change'], function(color) {

    hexColor.innerHTML = color.hexString;
    display.style.color = color.hexString;
});

hexColor.addEventListener('change', function(){
    colorPicker.color.hexString = this.value;
})

nickname.addEventListener('input', function(){
    if (this.value.length > 16) {
        display.innerHTML = "MineLex";
        return;
    }

    if(this.value != ""){
        display.innerHTML = this.value;
        return;
    }

    display.innerHTML = "MineLex";
})


const chatcolor = document.querySelector("#chatcolor");
const nickcolor = document.querySelector("#nickcolor");
const emblemcolor = document.querySelector("#emblemcolor");
const pluscolor = document.querySelector("#pluscolor");
const back = document.querySelector("#btn-back")
const menu = document.querySelector("#menu");
const navResponsive = document.querySelector("#nav-responsive-background")

menu.addEventListener('click', function(){
    navResponsive.style = "display: flex;"
})

chatcolor.addEventListener('click', function(){
    navigator.clipboard.writeText("/chatcolor " + hexColor.textContent);
    modalCopy.style = "display: flex;";
})

nickcolor.addEventListener('click', function(){
    navigator.clipboard.writeText("/nickcolor " + hexColor.textContent);
    modalCopy.style = "display: flex;";
})

emblemcolor.addEventListener('click', function(){
    navigator.clipboard.writeText("/emblemcolor " + hexColor.textContent);
    modalCopy.style = "display: flex;";
})

pluscolor.addEventListener('click', function(){
    navigator.clipboard.writeText("/pluscolor " + hexColor.textContent);
    modalCopy.style = "display: flex;";
})

back.addEventListener('click', function(){
    modalCopy.style = "display: none;"
})
