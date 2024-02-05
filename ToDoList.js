const inputEle = document.getElementById('input-box');
const listEle = document.getElementById('list-container');

function addTask() {
    if (inputEle.value === '') {
        alert("You must write something");
    }
    else {
        let li = document.createElement("li")
        li.innerHTML = inputEle.value;
        listEle.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputEle.value = "";
    saveData();
}

listEle.addEventListener("click", function (e) { 
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data", listEle.innerHTML)
}

function showTask(){
    listEle.innerHTML = localStorage.getItem("data");
}
showTask();