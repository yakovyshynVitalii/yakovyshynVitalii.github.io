// Завдання 1
document.body.addEventListener("keydown", (event) => {
    const resizer = document.createElement("div");
    if ((event.code === "KeyE" || event.code === "Comma") && event.ctrlKey) {
        event.returnValue = false;
        let elem = document.querySelector(".text");
        if (event.code === "KeyE" && elem.nodeName === "DIV") {
            let newEl = document.createElement("textarea");
            newEl.setAttribute("cols", 50);
            newEl.setAttribute("rows", 20);
            newEl.className = "text";
            newEl.textContent = elem.textContent;
            elem.replaceWith(newEl);
        } else if (event.code === "Comma" && elem.nodeName === "TEXTAREA") {
            let newEl = document.createElement("div");
            newEl.className = "text";
            newEl.textContent = elem.value;
            resizer.className = "text_resizer";

            const initResize = e => {
                e.preventDefault;
                window.addEventListener("mousemove", startResize);
                window.addEventListener("mouseup", stopResize);
            };

            const startResize = e => {
                newEl.style.width = (e.clientX - newEl.offsetLeft) + "px";
            };
            const stopResize = e => {
                window.removeEventListener('mousemove', startResize);
                window.removeEventListener('mouseup', stopResize);
            };

            resizer.addEventListener("mousedown", initResize);
            newEl.append(resizer);
            elem.replaceWith(newEl);
        }
    }

});

// Завдання 2


// Завдання 3
const resDiv = document.getElementById("text");
const resizer = document.querySelector("div.text_resizer");

const initResize = e => {
    e.preventDefault;
    window.addEventListener("mousemove", startResize);
    window.addEventListener("mouseup", stopResize);
};

const startResize = e => {
    resDiv.style.width = (e.clientX - resDiv.offsetLeft) + "px";
};
const stopResize = e => {
    window.removeEventListener('mousemove', startResize);
    window.removeEventListener('mouseup', stopResize);
};

resizer.addEventListener("mousedown", initResize);

