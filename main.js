//Adding elements
const button = document.querySelector('#addBtn');
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
    
}

function addToList(){
    myList.push("\n<li>" + taskWindow.value + "</li>");
    updateMyList();
    // for(let i = 0; i < 10; i++){
    //     listText.innerHTML = "\n<li>" + taskWindow.value + "</li>";
    // }
}

//Initializing button
button.addEventListener("click", addToList, true);

// if(myList[0] === undefined){
//     // listText.innerHTML = "\n<li>Coffee</li>\n<li>Tea</li>\n<li>Milk</li>\n";
// }