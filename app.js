let isOpen = false;
let DOB;
const settingIcon = document.getElementById('sIcon');
const settingContent = document.getElementById('sContent');
const initialTextEl= document.getElementById('initialText');
const afterDOBEl = document.getElementById('afterDOB');
const DOBButton = document.getElementById('dobButton');
const dobInput = document.getElementById('dobInput');
const yearEl = document.getElementById('year')
const monthEl = document.getElementById('month')
const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const MinsEl = document.getElementById('mins')
const secEl = document.getElementById('sec')

const makeTwoDig = (number)=>{
    return number > 9 ? number : `0${number}`
}

const toggleButton = () => {
    if(isOpen){
        settingContent.classList.add('hides');
    } else {
        settingContent.classList.remove('hides');
    }
    isOpen = !isOpen;
    // console.log("Toggle",isOpen);
    
}

const updateAge = ()=>{
    const currentDate = new Date();
    const dateDiff = currentDate - DOB;

    const year = Math.floor(dateDiff/(1000*60*60*24*365));
    const month = Math.floor(dateDiff/(1000*60*60*24*365))%12;
    const day = Math.floor(dateDiff/(1000*60*60*24))%30;
    const hour = Math.floor(dateDiff/(1000*60*60))%24;
    const min = Math.floor(dateDiff/(1000*60))%60;
    const sec = Math.floor(dateDiff/1000)%60;

    yearEl.innerHTML = makeTwoDig(year);
    monthEl.innerHTML = makeTwoDig(month);
    daysEl.innerHTML = makeTwoDig(day);
    hoursEl.innerHTML = makeTwoDig(hour);
    MinsEl.innerHTML = makeTwoDig(min);
    secEl.innerHTML = makeTwoDig(sec);
    
}


const setDOBhandler = () => {
    const dateString = dobInput.value;
    DOB  = dateString? new Date(dateString): null;
    if(DOB){
        initialTextEl.classList.add('hides');
        afterDOBEl.classList.remove('hides');
        updateAge();
        setInterval(()=>updateAge(),1000)
    }else {
        afterDOBEl.classList.add('hides');
        initialTextEl.classList.remove('hides');
    }
}

setDOBhandler();




settingIcon.addEventListener('click', toggleButton);
DOBButton.addEventListener('click', setDOBhandler);
