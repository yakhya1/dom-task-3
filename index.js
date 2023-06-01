const text = () => {const text = document.createElement("div")
text.textContent = "Работа с DOM";
document.body.prepend(text)};

text();

const  DOM = () => {const refDom = document.createElement("a")
refDom.href = "https://paper.dropbox.com/doc/DOM-KrSbmrOQHo09BZwgsOmhp";
refDom.textContent = "DOM"
const main = document.getElementById("main")
main.append(refDom)};

DOM();

const color = (Col) =>  {
document.body.style.background = Col
};


const addText = (text) => {
     const ul = document.getElementById("list");
    const newText = document.createElement("li");
    newText.textContent = text;
    ul.append(newText)
};


addText ("asasas")

const  clear = () => {
document.getElementById("copyright").remove()
   
}

clear()
