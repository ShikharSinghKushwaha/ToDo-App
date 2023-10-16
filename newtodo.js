console.log('Hello World')

let overlayContainer = document.querySelector('.overlay-container');
const addBtn = document.getElementById('addBtn')
const overlayCreateBtn = document.getElementById("create");
const done = document.getElementById("done")
const length = document.getElementById("length")


addBtn.addEventListener('click',showOverlay);

function showOverlay(){
    overlayContainer.style.display = "block";
}

overlayContainer.addEventListener('click',function(event){
    if(event.target === this){
    this.style.display  = 'none';
    }
})

overlayCreateBtn.addEventListener("click",addTask);

const taskContainer = document.querySelector(".todo")
const todoText = document.getElementById("todo-text");

function countLength(){
    length.innerHTML = taskContainer.children.length;
}

//alert(taskContainer.children.length)
countLength();
let countDone = 0;

function addTask(){
    const createDiv = document.createElement("div");
    createDiv.classList.add("text-container");
    
    createDiv.innerHTML = `
    <label  class="label">
    <input type="checkbox" id="doneTask">
    ${todoText.value}
    </label>
    ` ;
let checkbox = document.getElementById("doneTask")
     
    createDiv.addEventListener("click",function() {
      if(checkbox.checked === true){
          createDiv.classList.add("checked")
      }else{
        createDiv.classList.remove("checked")

        
      }
        // this.classList.add("checked");
        
        done.innerHTML = countDone;
    })
    taskContainer.append(createDiv);

    todoText.value = '';
    overlayContainer.style.display = 'none';

    countLength();
}