setInterval(function () {
    let a = new Date();
    let h = a.getHours();
    let m = a.getMinutes();
    let s = a.getSeconds();
    let d = a.getDate();
    let day = a.getDay();
    let mo = a.getMonth()+1;
    let y = a.getFullYear();

    let hour = document.getElementById("hour");
    let min = document.getElementById("min");
    let secs = document.getElementById("secs");
    let datee = document.getElementById("datee");
    let month = document.getElementById("month");
    let year = document.getElementById("year");
    let dot = document.getElementById("dot");

    if (h < 10) {
        h = "0" + h;
    } 
    if (m < 10) {
        m = "0" + m;
    }
    if (s < 10) {
        s = "0" + s;
    }
    if (d < 10) {
        d = "0" + d;
    }
    if (mo < 10) {
        mo = "0" + mo;
    }

    hour.innerHTML = h;
    min.innerHTML = m;
    secs.innerHTML = s;
    datee.innerHTML = d;
    month.innerHTML = mo;
    year.innerHTML = y;

    if(day==0){
        dot0.style.backgroundColor= "red";
    }
    if(day==1){
        dot1.style.backgroundColor= "red";
    }
    if(day==2){
        dot2.style.backgroundColor= "red";
    }
    if(day==3){
        dot3.style.backgroundColor= "red";
    }
    if(day==4){
        dot4.style.backgroundColor= "red";
    }
    if(day==5){
        dot5.style.backgroundColor= "red";
    }
    if(day==6){
        dot6.style.backgroundColor= "red";
    }

}, 1000);