let counter = document.querySelector(".counter");
const decrease = document.querySelector("#decrease");
const reset = document.querySelector("#reset");
const increase = document.querySelector("#increase");

let count = 0;

increase.addEventListener("click", () => {
    counter.innerHTML = `${++count}`;
    if (count > 0) {
        counter.style.color = `#57cc99`;
    }
    else if (count === 0) {
        counter.style.color = `yellow`;
    }
});

decrease.addEventListener("click", () => {
    counter.innerHTML = `${--count}`;
    if (count < 0) {
        counter.style.color = `red`;
    }
    else if (count === 0) {
        counter.style.color = `yellow`;
    }
});

reset.addEventListener("click", () => {
    count = 0;
    counter.innerHTML = `${count}`;
    if (count === 0) {
        counter.style.color = `yellow`;
    }
});
