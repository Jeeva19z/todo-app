
let btn = document.getElementById("btn");
output  = document.getElementById("output");

let inputValue = document.getElementById("inputbox");


let pendingTaskCount = document.getElementById("pendingTaskCount")

let clear = document.getElementById("clear");




let todos = []


window.onload=()=>{
    todos = JSON.parse(localStorage.getItem('todos')) ||[]

    todos.forEach(todosvalu =>addtodos(todosvalu))
    let pendingtask = todos.length;
// console.log("length valus",pendingtask)
pendingTaskCount.innerHTML=pendingtask;


}

btn.addEventListener("click",()=>{
    
    if(inputValue.value === ""){
console.log("please enter the value")
    }
else{

    todos.push(inputValue.value)
    

    let pendingtask = todos.length;
    pendingTaskCount.innerHTML=pendingtask;

    localStorage.setItem('todos',JSON.stringify(todos))

    addtodos(inputValue.value)
    inputValue.value="" // resert the box

}
})

function addtodos(todo){


  

    let newElement = document.createElement("p");

    newElement.innerHTML=todo;

    output.appendChild(newElement)
    console.log(todos) 
    //here console to check the ellement add or not 
  
    
    newElement.addEventListener("click",()=>{
        newElement.style.textDecoration="line-through";
        newElement.style.color="red";

        // removetodo(todo)
        // let pendingtask = todos.length;
        // pendingTaskCount.innerHTML=pendingtask;  single click to remove

    })
    newElement.addEventListener("dblclick",()=>{
        output.removeChild(newElement)
        // newElement.remove() // this is aonthet one way

        removetodo(todo)
        let pendingtask = todos.length;
        pendingTaskCount.innerHTML=pendingtask;

    })


}

function removetodo(todo){

//  console.log("full array befor remove : ",todos)

 let findIndexOf = todos.indexOf(todo); // find the index here

//  console.log("found the index : ", findIndexOf)

 if(findIndexOf>-1){
    todos.splice(findIndexOf,1);
 }
 
//  else{
//     console.log("alredy remove reomve from array")
//  }
localStorage.setItem('todos',JSON.stringify(todos)); // remove the value froma arrya and upate the array again
//  console.log("after remove :",todos)

}

clear.addEventListener("click",()=>{
    // console.log("done")
    todos=[]
    let pendingtask = todos.length;
    pendingTaskCount.innerHTML=pendingtask;

    pendingTaskCount.innerHTML=pendingtask;
  
    // output.removeChild("pElement")
    // console.log(pElement)
    let paragraphs = document.querySelectorAll("#output p");
    paragraphs.forEach(paragraph => {
        paragraph.remove();
    });
    
    
    localStorage.setItem('todos',JSON.stringify(todos))


})
