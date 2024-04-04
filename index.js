let input=document.querySelector('#inp')
let addBtn=document.querySelector('.add-btn')
let ul=document.querySelector('.todolist')
let arr = []
// addBtn.addEventListener('click', function () {
//     arr.push(input.value);
//     ul.innerHTML=''
//     for (let i = 0; i < arr.length; i++) {
//            ul.innerHTML+=`<li class="list">
//     <p>${arr[i]}</p>
//     <button class="delete-btn"><i class="fa-solid fa-trash-can"></i></button>
// </li>`
//     input.value=''
//     }
// })
addBtn.addEventListener('click', function () {
    arr.push(input.value);
    renderList();
    input.value = '';
});
function renderList() {
    ul.innerHTML = '';
    arr.forEach(function (item, index) {
        ul.innerHTML += `<li class="list">
            <p>${item}</p>
            <button class="delete-btn"><i class="fa-solid fa-trash-can"></i></button>
        </li>`;
    });
    let delBtn = document.querySelectorAll('.delete-btn');
    delBtn.forEach(function (btn, i) {
        btn.addEventListener('click', function () {
            arr.splice(i, 1);
            renderList();
        });
    });
}



