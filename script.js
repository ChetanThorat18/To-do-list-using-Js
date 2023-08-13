let addBtn = document.querySelector('.addBtn');
let input = document.querySelector('input');
let ul =document.querySelector('ul');

addBtn.addEventListener("click",function(){

    
    if(input.value.trim() !== "")
    {
        let li = document.createElement('li');
    li.classList.add("list-item");

    let bulletPoint = document.createElement('span');
    bulletPoint.classList.add("bullet-point");
    bulletPoint.innerText = "➤";

    let taskText = document.createElement('span');
    taskText.classList.add('task-text');
    taskText.innerText = input.value;
    
    let delBtn = document.createElement('button');
    delBtn.className = "btn btn-danger del-todo";      // bootsrap classes
    delBtn.innerHTML = '<i class="fa-solid fa-trash icon"></i>';  // trash icon

    li.appendChild(bulletPoint);
    li.appendChild(taskText);
    li.appendChild(delBtn);

     ul.appendChild(li);
    input.value = "";    
    
    updateTotalCount();

    }
    
})


// Add event listener to the document and listen for clicks on the delete button
document.addEventListener("click", function(event) {
    console.log("Click event triggered");
    if (event.target && event.target.classList.contains("del-todo") || event.target.classList.contains("icon") ) {
        // Find the closest parent li element and remove it

        console.log("Delete button clicked");
        const listItem = event.target.closest(".list-item");
        if (listItem) {
            listItem.remove();
        }

        updateTotalCount();
    }
});
/* This code adds a click event listener to the entire document. When a click event occurs and the target element 
has the class "del-todo" (indicating the delete button was clicked), the script finds the closest parent li element 
and removes it from the document using the remove() method. */


let clearAll = document.querySelector('.del-All');
clearAll.addEventListener("click",function(){
    ul.innerHTML="";
})


function updateTotalCount(){
    const pendingTaskCount = document.querySelectorAll('.list-item').length;

    const footerElement = document.getElementById('totalCount');

    const pendingTaskElement = footerElement.querySelector('.pendingTasks');

    pendingTaskElement.textContent = pendingTaskCount;
}