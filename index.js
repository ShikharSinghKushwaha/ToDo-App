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

countLength();

function validateText(){
    if(todoText.value === ""){
        document.querySelector("#error").style.display = 'block';
        return false
        }else{
        document.querySelector("#error").style.display = 'none';
        return true;
    }
}


let countDone = 0;


function addTask(e){
   

      e.preventDefault();


     if(validateText()) {

    
   
    const createDiv = document.createElement("div");
    const deleteBtn = document.createElement("span");
    deleteBtn.classList.add("material-symbols-outlined");
    deleteBtn.textContent = 'delete';
    deleteBtn.classList.add("delete-icon")
    createDiv.classList.add("text-container");
    
    createDiv.innerHTML = `
    <label  class="label">
    <input type="checkbox" id="doneTask">
    ${todoText.value}
    </label>
    ` ;

    

    
    createDiv.append(deleteBtn);

let checkbox = createDiv.querySelector("#doneTask")

    checkbox.addEventListener("click",checking )
    function checking(){
      if(checkbox.checked === true){
          checkbox.classList.add("checked")
          countDone++;
          
          deleteBtn.style.visibility = 'visible';
      }else{
         countDone--;
         deleteBtn.style.visibility = 'hidden';

         checkbox.classList.remove("checked")

      }
        

        done.innerHTML = countDone;
    }

      deleteBtn.addEventListener("click",function() {
         createDiv.remove();
         countLength();
         countDone--;
         done.innerHTML = countDone;

     })

    taskContainer.append(createDiv);

    todoText.value = '';
    overlayContainer.style.display = 'none';

    countLength();
}

}
