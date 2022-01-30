
const colors = ["lightblue", "red", "rgba(133,122,200)", "#f15025"];
const flipperBtn = document.getElementById("flipper-btn");
const colorDisplay = document.getElementById("color-display");
const body = document.querySelector('body');
let colorIndex = colors.length - 1;

flipperBtn.addEventListener("click", function() {
    colorIndex = colorIndex + 1;
    if (colorIndex == colors.length) colorIndex = 0;
    colorDisplay.textContent = colors[colorIndex];
    body.style.background = colors[colorIndex];
});





// function nextColor(){
//     colorIndex = colorIndex + 1;
//     if (colorIndex == colors.length) colorIndex = 0;
//     colorDisplay.textContent = colors[colorIndex];
//     abody.style.background = colors[colorIndex];
// }



