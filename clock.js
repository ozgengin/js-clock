let Name = prompt("Lütfen Adınızı Giriniz.");
let days = ["Pazartesi" , "Salı" , "Çarşamba" , "Perşembe" , "Cuma" , "Cumartesi" , "Pazar"];
let var0 = document.querySelector("#myName");

if(Name){
var0.innerHTML=`${Name}`;
}
else{
alert("Lütfen İsim Giriniz.");
location.reload();
}

function Clock(){
let date = new Date();
let day = days[date.getDay()];
let hours = date.getHours();
let minutes = date.getMinutes();
let milseconds = date.getSeconds();
document.querySelector("#myClock").innerHTML = `${hours} : ${minutes} : ${milseconds} ${day}`;
}

setInterval(Clock,1000);
