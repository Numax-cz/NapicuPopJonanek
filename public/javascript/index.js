const JonanekSound = new Audio("/sounds/nevim.mp3");




const click = document.querySelector("#count");
const Jonanek1 = document.querySelector("#Jonanek1");
const Jonanek2 = document.querySelector("#Jonanek2");
const Shop = document.getElementById("MenuShop");
const ShopMain = document.getElementById("ShopMain");
var Counter = window.localStorage.getItem("counter");
var on = true;
Counter = Counter ? Counter : 0;
click.innerHTML = Counter ? Counter : 0;
var ClickCounter = 0;
var Clicked = false;
const Click = (ev) => {
    if (on) {
        if (Clicked)
            return; Clicked = true; Counter++;
        ClickCounter++;
        Jonanek1.classList.replace("block", "none");
        Jonanek2.classList.replace("none", "block");
        click.innerHTML = Counter;
        JonanekSound.cloneNode(true).play();
        window.localStorage.setItem("counter", Counter);
    }
    ev.preventDefault();

};
const ClickNormal = (ev) => {
    if (on) {
        ev.preventDefault();
        Clicked = false;
        Jonanek1.classList.replace("none", "block");
        Jonanek2.classList.replace("block", "none");

    }
};
window.addEventListener('keydown', Click);
Jonanek1.addEventListener('touchstart', Click);
Jonanek2.addEventListener('touchstart', Click);
Jonanek1.addEventListener('mousedown', Click);
Jonanek2.addEventListener('mousedown', Click);
Jonanek1.addEventListener('mouseup', ClickNormal);
Jonanek1.addEventListener('touchend', ClickNormal);
Jonanek2.addEventListener('mouseup', ClickNormal);
Jonanek2.addEventListener('touchend', ClickNormal);
window.addEventListener('keyup', ClickNormal);
Api();
setInterval(() => {
    Api();
}, 10000);
function Api() {
    $.post("/api/update", { ClickCounter: ClickCounter }, (data, status) => {
        document.getElementById("CounterLink").innerText = data
    });
    ClickCounter = 0;
}



Shop.addEventListener("click", function () {
    ShopMenuCl();
});

function ShopMenuCl() {
    if (on) {
        open();
        on = false
    } else {
        close();
        on = true;
    }
}


function close() {
    ShopMain.style.display = "none";
}
function open() {
    ShopMain.style.display = "block";
}