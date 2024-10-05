let input = document.querySelector('input')
let buttons = document.querySelectorAll('button')
let arr = Array.from(buttons);
let string = "";

arr.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if(e.target.innerHTML === '=') {
            string = eval(string)
            input.value = string;
        }
        else if(e.target.innerHTML === 'AC') {
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML === 'DEL') {
            string = string.slice(0, string.length-1)
            input.value = string
        }
        else if((e.target.innerHTML === '00' || e.target.innerHTML === '0') && string === "") {
            string = ""
            input.value = string
        }
        else if(e.target.innerHTML === '.' && string === "") {
            string += "0."
            input.value = string
        }
        else {
            string += e.target.innerHTML
            input.value = string;
        }
    })
})