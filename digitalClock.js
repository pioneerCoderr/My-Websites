const hourEle = document.getElementById('hour');
const minEle = document.getElementById('min');
const secsEle = document.getElementById('secs');
const ampmEle = document.getElementById('ampm');

function DigiClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    if(h >12){
        h = h-12;
        ampm = "PM";
    }

    h = h<10 ? "0"+h:h;
    m = m<10 ? "0"+m:m;
    s = s<10 ? "0"+s:s;


hourEle.innerText = h;
minEle.innerText = m;
secsEle.innerText = s;
ampmEle.innerText = ampm;
setTimeout(() => {
    DigiClock()
}, (1000));


}
DigiClock();