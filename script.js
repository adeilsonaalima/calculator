const buttons = document.querySelectorAll(".buttons__btn");
const visor_maxlength = document.getElementById("visor");

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        handler(button);
    });
});

function handler(button) {
    switch (button.value) {
        case "C":
            clear();
            break;
        case "CE":
            backspace();
            break;
        case "=":
            equal();
            break;
        default:
            num(button);
    }
}

function clear() {
    const visor = document.getElementById("visor");
    visor.value = "";
}

function backspace() {
    const visor = document.getElementById("visor");
    visor.value = visor.value.slice(0, -1);
}

function equal() {
    try {
        const visor = document.getElementById("visor");
        visor.value = eval(visor.value);
    } catch (error) {
        alert(error);
    }
}

function num(button) {
    const visor = document.getElementById("visor");
    visor.value = visor.value + button.value;
}
