//Adding elements
const button = document.querySelector('#addBtn');
const taskWindow = document.querySelector("#taskWindow");
const listText = document.querySelector("#list");
const countTask = document.querySelector("#count");
const infoText = document.querySelector('#infoText');
const listArray = [];
//Add Function

function removeElement(){
    myList.pop();
    listText.removeChild(listText.childNodes[myList.length])

}

function addToList(){

    inputText = taskWindow.value;
    //Check if window its not ""
    if(inputText !== ""){
        const inputText = taskWindow.value;
        infoText.innerText = ""

        //const listItem = document.querySelector('ul');
        // Adding new html element in ul
        const item = document.createElement('li');
        listText.appendChild(item);

        const itemLabel = document.createElement('span');
        itemLabel.innerText = inputText;
        item.appendChild(itemLabel);

        // Event listener for span
        itemLabel.addEventListener("click",
            function(){
                if(item.getAttribute("class") == "completed"){
                item.setAttribute("class", "");
                } else{
                    item.setAttribute("class", "completed");
                }
            }, false);

        // Input cleaned
        taskWindow.value = "";
        listCompleted = document.querySelectorAll(".completed");
        countTask.innerText = listCompleted.length;
    }else{
        infoText.innerText = "Text is empty!"
    }
}
countTask.innerText = 0;
//Initializing button
button.addEventListener("click", addToList, false);