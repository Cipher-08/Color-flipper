var hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
const button = document.querySelector('.change-color')
let textChange = document.querySelector('.change')
    // var newText = textChange.innerText;
const body = document.querySelector('body')
    // console.log(newText) //color value's 
button.addEventListener('click', () => {
    let hexColor = "#";

    for (let index = 0; index < 6; index++) {
        hexColor += hex[getRandomNumber()];
        textChange.textContent = hexColor;
        document.body.style.backgroundColor = hexColor;
        // document.body.style.backgroundColor = "#AA0000";

    }



})



function getRandomNumber() {

    return Math.floor(Math.random() * hex.length)

}
