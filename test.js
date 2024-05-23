const inputvalue = document.querySelector('#input');
const listcontainer = document.querySelector('#listcontainer');

document.querySelector('#button').addEventListener('click',function(e){
if(inputvalue.value ===''){
    alert("Please enter the task")
}
else{
    const li =document.createElement("li");
    li.innerHTML = inputvalue.value;
    listcontainer.appendChild(li);
    let span =document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);

}
inputvalue.value ='';
savedata();
})

listcontainer.addEventListener('click',function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();   
        savedata();
    }
},)
function savedata(){
    localStorage.setItem( "data", listcontainer.innerHTML);
}
function show(){
    listcontainer.innerHTML = localStorage.getItem("data")
}
show();



