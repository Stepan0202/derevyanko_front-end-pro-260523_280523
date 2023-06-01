
const countAgain = document.querySelector(".countAgain");
countAgain.addEventListener("click", (e) => {
    e.preventDefault();
    convertHours();
});
function convertHours(){
    const hoursQuantity = prompt("Enter hours quantity");
    const secondsQuantity = hoursQuantity*3600;
    alert(`In ${hoursQuantity} hours is ${secondsQuantity} seconds`);
}
window.addEventListener('load', (e) => {
    convertHours();
})