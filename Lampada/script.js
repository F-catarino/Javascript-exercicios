let isLampOn = false;
const lampImage = document.getElementById("lampImage");
const toggleButton = document.getElementById("toggleButton");

toggleButton.addEventListener("click", toggleLamp);

function toggleLamp() {
    if (isLampOn) {
        lampImage.src = "Images/light_bulb_off.png";
        document.body.style.backgroundColor = "#242424";
    } else {
        lampImage.src = "Images/light_bulb_on.png";
        document.body.style.backgroundColor = "white";
    }

    isLampOn = !isLampOn;
}