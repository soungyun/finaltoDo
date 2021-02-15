const dateContainer = document.querySelector(".js-date"),
 dateTitle = dateContainer.querySelector("h2");

function getDate(){
    const dat = new Date();
    const year = dat.getFullYear();
    const date = dat.getMonth() + 1;
    const day = dat.getDate();
    dateTitle.innerText = `${year}년 ${date}월 ${day}일`;
}

function init(){
    getDate;
    setInterval(getDate);
}

init();