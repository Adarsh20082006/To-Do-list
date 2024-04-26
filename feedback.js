let star1=document.querySelector(".head .star span .img-1");
let star2=document.querySelector(".head .star span .img-2");
let star3=document.querySelector(".head .star span .img-3");
let star4=document.querySelector(".head .star span .img-4");
let star5=document.querySelector(".head .star span .img-5");

let decription=document.querySelector(".describe").value;
star1.addEventListener("click",function(e){
    star1.src="star (1).png";
    star2.src="star.png";
    star3.src="star.png";
    star4.src="star.png";
    star5.src="star.png";
    document.querySelector(".values").textContent="Poor😫?"
})
star2.addEventListener("click",function(e){
    star1.src="star (1).png";
    star2.src="star (1).png"
    star3.src="star.png";
    star4.src="star.png";
    star5.src="star.png";
    document.querySelector(".values").textContent="Nice😌!";
})
star3.addEventListener("click",function(e){
    star1.src="star (1).png";
    star2.src="star (1).png";
    star3.src="star (1).png";
    star4.src="star.png";
    star5.src="star.png";
    document.querySelector(".values").textContent="Good🙂";
})
star4.addEventListener("click",function(e){
    star1.src="star (1).png";
    star2.src="star (1).png";
    star3.src="star (1).png";
    star4.src="star (1).png";
    star5.src="star.png";
    document.querySelector(".values").textContent="Very good😊"
})
star5.addEventListener("click",function(e){
    star1.src="star (1).png";
    star2.src="star (1).png";
    star3.src="star (1).png";
    star4.src="star (1).png";
    star5.src="star (1).png";
    document.querySelector(".values").textContent="Excellent😍";
})
console.log((document.querySelector(".values").textContent)
)
// let sub="Feedback%20about%20To%20Do%20list%20web%20app";
// let body="To%20do%20list%20web%20app%20was%20"+star+"<br>"+decription;
let sub="Feedback about To Do list web app";
let title="To do list web app was "+(document.querySelector(".values").textContent);
let body= decription;
document.querySelector(".submit").addEventListener("click",()=>{
    document.querySelector("a").href=`mailto:adarshakashmm@gmail.com?subject=${sub}
    &body=To do list web app was ${(document.querySelector(".values").textContent)}.\n ${body}`;
})
