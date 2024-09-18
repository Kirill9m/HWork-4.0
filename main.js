//Adding elements
const button = document.querySelector('#addBtn');
const deleteButton = document.querySelector('#deleteBtn');
const listText = document.querySelector("#list");
const taskWindow = document.querySelector("#taskWindow");
const myList = [];



//Add Function
function updateMyList(){
    const save = listText.innerHTML;
    for(let i = 0; i < myList.length; i++){
        listText.innerHTML = save + myList[i];
    }
}

function removeElement(){
    myList.pop();
    listText.removeChild(listText.childNodes[myList.length])
}

function addToList(){
    if(taskWindow.value !== ""){
    myList.push("<li>" + taskWindow.value + "</li>");
    updateMyList();
    }else{
        alert("You have to write something!");
    }
}

//Initializing button
button.addEventListener("click", addToList, true);
deleteButton.addEventListener("click", removeElement, true);