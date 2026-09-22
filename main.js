const buttons = document.getElementsByClassName("btn");
const counter = document.getElementById("count");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () => {
    const buttonsValue = buttons[i].id;
    if (buttonsValue === "plus") {
        addValue(1);
    } else if (buttonsValue === "minus") {
        subtractValue(1);
    } else if (buttonsValue === "reset") {
        resetValue();
    }
});
}

function addValue(value) {
    counter.value = Number(counter.value) + value; 
}

function subtractValue(value) {
    counter.value = Number(counter.value) - value;
}

function resetValue() {
    counter.value = 0;
}