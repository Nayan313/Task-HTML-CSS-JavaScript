function appendItem(){
    let ul  = document.getElementById("ul");
    const li = document.createElement("li")
    li.textContent = "new Element rendered by append child"
    ul.appendChild(li)
}
function appendItemInner(){
    let ul2  = document.getElementById("ul2");
    ul2.innerHTML += "<li>new item add by innerHTML</li>"
}
function AddPara(){
    let input = document.getElementsByClassName("input")[0];
    let para = document.getElementById("para");
    para.innerHTML += input.value;
}
function changeStyle(){
    let box = document.querySelector(".box");
    box.style.backgroundColor = "rgb(237, 100, 107)";
    box.style.fontSize = "30px";
    box.style.color = "white";
    box.style.width = "500px";
    box.style.height = "300px";
    box.style.borderRadius = "40px";
    box.style.top = "30px";
    box.style.left = "140px";
}