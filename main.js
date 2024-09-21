//Adding elements
const button = document.querySelector('#addBtn');
const taskWindow = document.querySelector("#taskWindow");
const listText = document.querySelector("#list");
const countTask = document.querySelector("#count");
const listArray = [];
//Add Function

function removeElement(){
    myList.pop();
    listText.removeChild(listText.childNodes[myList.length])

}

function addToList(){
    //Check if window its not ""
    if(taskWindow.value !== ""){
        const input = taskWindow.value;

        //const listItem = document.querySelector('ul');
        // Adding new html element in ul
        const item = document.createElement('li');
        listText.appendChild(item);

        const itemLabel = document.createElement('span');
        itemLabel.innerText = input;
        item.appendChild(itemLabel);

        // Event listener for span
        itemLabel.addEventListener("click",
            function(){
                item.appendChild(itemLabel).classList.toggle("completed");
                countTask.innerText = document.querySelectorAll(".completed").length 
            }, false);

        // Input cleaned
        taskWindow.value = "";
    }else{
        alert("You have to write something!");
    }
}
countTask.innerText = 0;
//Initializing button
button.addEventListener("click", addToList, false);