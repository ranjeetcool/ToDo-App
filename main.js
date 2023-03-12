let todoContainer = document.querySelector('#todoContainer');
let inputTask = document.querySelector('#inputTask');
let inputDesc = document.querySelector('#inputDesc');
let validateMsg = document.querySelector('#validateMsg');
let btnTODO = document.querySelector('#btnTODO');
let listContainer = document.querySelector('#listContainer');
let btnDeleteAll = document.querySelector('#btnDeleteAll');

inputTask.addEventListener('keypress', function (goToDescField) {
    if (goToDescField.key === "Enter") {
        inputDesc.focus();
    }
});

inputDesc.addEventListener('keypress', function (event) {
    if (event.key === "Enter") {
        btnTODO.click();
        inputTask.focus();
    }

});

btnTODO.addEventListener('click', function (event) {
    validateInput();
});

let validateInput =  ()=> {
    if (inputTask.value === ""||inputDesc.value === "") {
        validateMsg.innerHTML = "Type something in Task and Description";
    } else {
        validateMsg.innerHTML = "";
        createTask();
    }
};

let createTask = ()=> {
    let divTag = document.createElement('div');
    divTag.classList.add('TDbox');
    divTag.innerHTML =
        `<div class="tbox">
           <textarea class="ttask" type="text" readonly="readonly">${inputTask.value}</textarea>
           <button class="editBtn"><i class="fa-solid fa-pen"></i></button>
           <button class="deleteBtn"><i class="fa-solid fa-trash-can"></i></button>
        </div>
        <div>
        <textarea class="tdesc" type="text" readonly="readonly"">${inputDesc.value}</textarea>
        </div>`;
        // console.log(inputTask.value);
        // console.log(inputDesc.value);
    listContainer.appendChild(divTag);
    inputTask.value = "";
    inputDesc.value = "";
    


    btnDeleteAll.addEventListener('click', function () {
        divTag.remove();
    })

    let deleteBtn = divTag.querySelector('.deleteBtn');
    deleteBtn.addEventListener('click', function () {
        divTag.remove();
        // listContainer.removeChild(divTag);
        // console.log(divTag);
    });

    let editBtn = divTag.querySelector('.editBtn');
    editBtn.addEventListener('click', function () {
        let ttask = divTag.querySelector('.ttask');
        let tdesc = divTag.querySelector('.tdesc');
        if (editBtn.innerHTML == `<i class="fa-solid fa-pen"></i>`){
            editBtn.innerHTML = `<i class="fa-solid fa-check"></i>`;
            ttask.removeAttribute('readonly');
            tdesc.removeAttribute('readonly');
            ttask.focus();
            // console.log(editBtn.innerHTML)
        }
        else{
            editBtn.innerHTML = `<i class="fa-solid fa-pen"></i>`
            ttask.setAttribute("readonly", "readonly");
            tdesc.setAttribute("readonly", "readonly");
        }
    });
};
