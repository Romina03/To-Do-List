

function addToList() {
    var newItem = document.createElement("li");
    var task = document.querySelector(".input-bar").value;
    var givenInput = document.createTextNode(task);

    var newButton = document.createElement("button");
    newButton.innerHTML = "Remove";
    newButton.className = "remove-button";  

    newButton.onclick = function() {
        var e = this.parentElement;
        e.remove();
    }
     

    newItem.appendChild(givenInput);
    newItem.appendChild(newButton);

    if(task != "") {
        document.querySelector(".task-list").appendChild(newItem);
     
    }
    
}

function clearList() {
    var theList = document.querySelectorAll("li");
    var numList = theList.length;
    for (var i = 0; i < numList; i++) {
        document.getElementsByTagName("li")[0].remove();
    }
  
}

document.querySelector(".enter-button").addEventListener("click", addToList);
document.querySelector(".reset-button").addEventListener("click", clearList);

