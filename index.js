var name = "Hi... I'm";
var i = 0;
var speed = 200;

function displayname(){
    if(i < name.length){
        document.getElementById("welcome").innerHTML += name.charAt(i);
        i++;
        setTimeout(displayname,speed); 
        loop : true;
    }
}
displayname();

var tablinks = document.getElementsByClassName("link");
var tabcontents = document.getElementsByClassName("tab-con");

function active(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active");
}