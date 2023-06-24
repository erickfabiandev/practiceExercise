// Global Variables
var listTask=[]; 
let id=0;

//I create the variables that will fetch the objects from Index.html
const textTask= document.querySelector('#textTask');
const buttonAdd= document.querySelector('#buttonAdd');
const viewListTak= document.querySelector('#viewListTak');
const buttonDelete=document.querySelector("#buttonDelete");
const notasks=document.querySelector("#notasks");



/**
The function creates a task object which is added to the task list and viewListTask container for display.
@variables
*taskItem : Variable that represents the checkbox element that is created when adding a new task
*tastkName: Variable that represents the label that will contain the name or text of the new task that is added.
*taskContainer: Represents the container that will house the elements (checkbox, label), elements assigned to a new added task
*separator:Element created when a new task is added, serves as a separator between tasks (taskContainer)
*/
function createTask(task){

    this.listTask.push(
        {
        id: id,
        title: task,
        completed: false
        });

    const taskItem=document.createElement('input');
    const tastkName=document.createElement('label');
    const taskContainer=document.createElement('div');
    const separator = document.createElement('hr');
    taskItem.type='checkbox';       
    tastkName.textContent= task;
    taskContainer.id=id;
    taskItem.id=`C${id}`
    separator.id=`S${id}`
    tastkName.setAttribute('for',taskItem.id);
    taskItem.classList.add('taskItem');
    tastkName.classList.add('tastkName');
    taskContainer.classList.add('taskContainer');
    separator.classList.add('separator');    
    taskContainer.appendChild(taskItem);
    taskContainer.appendChild(tastkName);
    viewListTak.appendChild(taskContainer);
    viewListTak.appendChild(separator);    
    taskItem.addEventListener("change",function(e){handleCheckTask(e)});
    textTask.value="";
    id++;
}


//Add Events
textTask.addEventListener("input",function(e){e.target.value=="" ? buttonAdd.disabled=true : buttonAdd.disabled=false});
buttonAdd.addEventListener("click",function (e){handleSubmit(e)});
buttonDelete.addEventListener("click",function(e){handleDelete(e)})

/**
 * function that is triggered when the ADD button is clicked
 * 
 */
function handleSubmit(event){
    event.preventDefault()
    event.target.disabled=true;    
    createTask(textTask.value);  
    viewPendientes();  
}

/**
 * Function tells us that when the checkbox is clicked,
 * the status of the task will change from false to true or vice versa
 * 
 */
function handleCheckTask(event){

    const actualTask= document.getElementById(event.target.parentElement.id);    
    const posTask=listTask.findIndex(function(o){return o.id==actualTask.id});

    if(event.target.checked){        
        listTask[posTask].completed=true;
        actualTask.classList.add('isCompleted');
    }
    else{
        listTask[posTask].completed=false;
        actualTask.classList.remove('isCompleted'); 
    }
}


/**
 * Deletes an already completed task, removing it from the viewListTask
 * 
 */
function handleDelete(event){
    
    for (const iterator of listTask) {
        if(iterator.completed){
            
            const deleteTask=document.getElementById(iterator.id);
            const deleteSeparator=document.getElementById(`S${iterator.id}`);

            if(deleteTask!=null && deleteSeparator!=null){
                deleteTask.remove();
                deleteSeparator.remove();
            }                   
        } 
    }

    viewPendientes();   
        
}


/**
 * Function hides the delete button and gives visibility to a label indicating that there are no tasks. 
*  This will happen when all the tasks have been completed, otherwise it enables the delete button and hides the label. 
*/
function viewPendientes(){
    const n = listTask.filter(function(x){return !x.completed}).length;
    if(n==0){
        buttonDelete.style.display='none';
        notasks.style.display='flex'
    }
    else{
        buttonDelete.style.display='flex';
        notasks.style.display='none'
    }    
}

















