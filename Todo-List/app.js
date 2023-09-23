// App created by romainsavigny.be | /IAmRom1

const form = document.querySelector('form');

function storeList(){
    window.localStorage.ToDoList = list.innerHTML;
}
function getToDoList() {
    if (window.localStorage.ToDoList) {
      list.innerHTML = window.localStorage.ToDoList;
    }
  }
  
window.addEventListener('load', ()=>{
    getToDoList();
})
form.addEventListener ('submit', (e)=>{
    e.preventDefault();

    list.innerHTML += `<li>${task.value}</li>`;
    task.value = "";
    storeList();
})
list.addEventListener("click", (e)=>{
    if (e.target.classList.contains('Checked')){
        e.target.remove();
    }else{
        e.target.classList.add('Checked')
    }
    storeList();
})