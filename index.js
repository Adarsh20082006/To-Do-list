

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