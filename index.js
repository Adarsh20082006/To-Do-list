
//     let input=function(){
//     let taskList=document.getElementById('lists');
//     let parent=document.createElement('div');
//     parent.classList.add('parent-div');
//     document.body.appendChild(parent);
//     document.body.insertBefore(parent,taskList);

//     let inputBox=document.createElement('input');
//     inputBox.type='text';
//     inputBox.classList.add('input-box');


//     parent.appendChild(inputBox);
//   //   inputBox=document.body.insertBefore(inputBox,taskList);

//     let ok=document.createElement('button');
//     ok.textContent='Create';
//     ok.classList.add('ok');

//     let l=parent.appendChild(ok);
//    // l=document.body.insertBefore(l,taskList)
//    let create=function(){
//     let newTask=inputBox.value;
//     return newTask;
//    }
//    let task=ok.addEventListener('click',create);

//    return create;











// // }
// let i="li"+0;
// let k=0;
// let button=document.getElementById("addList");
// let taskValue=button.addEventListener('click',input);

// function input(){

//     i="li"+0;
//     let div=document.querySelector('.parent-div');
//     div.style.display='flex';
//     button.style.display='none';}
//     i="li"+(k++);



// let addTask=function(){
//     let div=document.querySelector('.parent-div');
//     let inputVal=document.querySelector('.input-box').value;
//     div.style.display='none';
//         button.style.display='flex'

//     if(inputValue!=''){

//     return inputValue(inputVal);
//     }
//     else{
//        console.log(inputVal);
//     }

// }
// let create=document.querySelector('.ok');

// create.addEventListener('click',addTask);
// // let data=addTask();
// // let data2;

// function inputValue(a){

// let lists=document.getElementById('ol');
// let li=document.createElement('li');
// lists.appendChild(li);
// li.textContent=a;
// li.classList.add(i);

// document.querySelector('.input-box').value='';
// let newBtn=document.createElement('button');
// newBtn.classList.add('newBtn');
// newBtn.textContent='✖️';
// li.appendChild(newBtn);
// newBtn.addEventListener('click',(e)=>{
//     console.log(e.target)
// e.target.parentElement.remove();
// let m=document.querySelector("."+i).classList;
// localStorage.removeItem(m);

// }
// )
// setData(i);
// getData(i);}




// function setData(i){
//      localStorage.setItem(i,document.querySelector('li').innerHTML);
// }

// function getData(i){
//     if(localStorage.getItem(i)!=null){
//      document.querySelector
//      ('ol').innerHTML= "<li>"+localStorage.getItem(i)+"</li>";

//  }
// }

// let createTask = document.getElementById('addList');
// createTask.addEventListener('click', task);

// let parentBox = document.querySelector(".parent-div");
// function task() {

//     createTask.style.display = "none";
//     parentBox.style.display = "flex";
// }

// let created = document.querySelector(".ok");
// created.addEventListener('click', ok);

// function ok() {
//     let inputValue = document.querySelector(".input-box").value;
//     enter2(inputValue);

//     document.querySelector('.input-box').value = '';
//     parentBox.style.display = "none";
//     createTask.style.display = "flex";
// }

// function enter(a) {
//     let ol = document.querySelector("#ol");
//     let li = document.createElement("li");
//     li.textContent = a;
//     ol.appendChild(li);
//     document.querySelector('.input-box').value = '';
//     let newBtn = document.createElement('button');
//     newBtn.classList.add('newBtn');
//     newBtn.textContent = '✖️';
//     li.appendChild(newBtn);
//     let datas=ol.innerHTML;
//     let key=li.textContent.substring(0,5);
//     document.querySelector(".newBtn").addEventListener('click', function(e){
//     e.target.parentElement.remove()}
//         // let par=e.target.parentElement;
//         // localStorage.removeItem(par.textContent.substring(0,5));
//     );local
let createTask = document.getElementById('addList');
createTask.addEventListener('click', task);

let parentBox = document.querySelector(".data-taken");
function task() {
    
    createTask.style.display = "none";
    parentBox.style.display = "block";
}

let done = document.querySelector(".done");
done.addEventListener("click", () => {
    let dataEntered = document.querySelector(".createTask").value;
    let date = document.querySelector(".due-date").value;
    let time1 = document.querySelector(".due-time-1").value;
    let time2 = document.querySelector(".due-time-2").value;
    let timeZone = document.querySelector(".time-zone").value;
    let valid;
    
if(((document.querySelector(".due-time-1").value > 12 || document.querySelector(".due-time-1").value < 1)||(document.querySelector(".due-time-2").value > 59 || document.querySelector(".due-time-2").value < 0)) || document.querySelector(".createTask").value =="")  {
    valid=false;
    document.querySelector(".due-time-1-span").textContent="Invalid!";
    createTask.style.display = "flex";
    document.querySelector(".due-time-1-span").style.color="red";}
else if(document.querySelector(".due-time-1").value <= 12){
    enter2(dataEntered, date, time1, time2, timeZone);
    valid=true;
    document.querySelector(".due-time-1-span").textContent="";
    document.querySelector(".createTask").value = "";
    document.querySelector(".due-date").value = "";
    document.querySelector(".due-time-1").value = "";
    document.querySelector(".due-time-2").value = "";
}
    if(valid){
    createTask.style.display = "flex";
    parentBox.style.display = "none";}
    // enter2(dataEntered, date, time1, time2, timeZone);
    else{
        createTask.style.display = "none";
        parentBox.style.display = "block";
    }

})

let today=new Date().getFullYear()+"-0"+((new Date().getMonth())+1)+"-"+new Date().getDate();
document.querySelector(".due-date").setAttribute("min",today);
function enter2(a, b, c, d, e) {
    let item = document.createElement("li");

    item.innerHTML = "<div class='li-item'><input class='tasks' type='checkbox'><span>" + a + "<br><span class='span'> (Due date is " + b + "<br> at " + c + ":" + d + " " + e + " )</span></span></div>";
    let priority = document.querySelector(".priority").value;

    if (priority == "Low") {
        item.style.color = "green";
    }
    else if (priority == "Medium") {
        item.style.color = "orange";
    }
    else { item.style.color = "red"; }
    let ul = document.querySelector("#ol");
    ul.appendChild(item);
    let btn = document.createElement("span");
    btn.textContent = "✖️";
    btn.classList.add("newBtn");
    item.appendChild(btn)
    btn.addEventListener("click",
        function (e) {
            e.target.parentElement.remove();
            setData();
        })


    document.querySelector(".tasks").addEventListener("click", function () {
        if (document.querySelector(".tasks").hasAttribute("checked")) {
            document.querySelector(".tasks").parentElement.parentElement.remove();
            localStorage.removeItem("data");
            document.querySelector("ul").innerHTML = document.querySelector("ul").innerHTML;
            setData();
        }

    })
    document.querySelector(".tasks").addEventListener("click", (e) => {
        document.querySelector(".tasks").setAttribute("checked", "checked");
        setData();
    })
    // document.querySelector("input").addEventListener("click", (e)=>{
    //     e.target.setAttribute("checked");
    //     setData();
    // })

    setData();
}

document.querySelector(".dlt").addEventListener("click",
    function dlt() {
        localStorage.clear();
        getData();
    });
if (localStorage.getItem("data") == null) {
    localStorage.setItem("data", "<h2>Your tasks are added here...</h2> ")
}
if (localStorage.getItem("data") !== null) {
    getData();
}
//     setData(key,datas);
getData();
function setData() {
    localStorage.setItem("data", document.querySelector("ul").innerHTML)
}
function getData() {

    document.querySelector("ul").innerHTML = localStorage.getItem("data");
} document.getElementById("id")