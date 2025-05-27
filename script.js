let inputField = document.querySelector('.input-field input');
let addBtn = document.querySelector('.add-btn');
let tasksBox = document.querySelector('.tasks-box ul');


function addTask(){
    let input = inputField.value;
    input = input.trim();
    if(input == ""){
        alert("please enter task");
    }else{
        let listItem = document.createElement('li');
        let radioBtn = document.createElement('div');
        radioBtn.classList.add('radio-btn');
        let taskItem = document.createElement('div');
        taskItem.classList.add('task');
        taskItem.innerText = input;
        let removeBtn = document.createElement('button');
        removeBtn.classList.add('remove-btn');
        removeBtn.innerText = "Remove";
        listItem.append(radioBtn);
        listItem.append(taskItem);
        listItem.append(removeBtn);
        tasksBox.append(listItem);
        inputField.value = "";
        saveData();
        
    }
}

tasksBox.addEventListener("click",function(e){
    if(e.target.className === "remove-btn"){
        e.target.parentElement.style.display="none";

    }else if(e.target.classList.contains("radio-btn") || e.target.classList.contains("task")){
        if(e.target.classList.contains("radio-btn")){
            e.target.classList.toggle('rcomplete');
            e.target.parentElement.children[1].classList.toggle('tcomplete');
        }else{
            e.target.classList.toggle('tcomplete');
            e.target.parentElement.children[0].classList.toggle('rcomplete');
        }
    }

    saveData();

},false);


function saveData(){
    localStorage.setItem("tasksData",tasksBox.innerHTML);
}

function showTasks(){
    tasksBox.innerHTML = localStorage.getItem("tasksData");
}
showTasks();





