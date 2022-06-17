const btn = document.getElementById("button")
const span = document.getElementById("span")
let i;
let p1,p2;
let item ={
    textbtn: "Нажми на меня",
    textspn: "Нажми на кнопку ,чтобы начать!"
};
span.innerText = item.textspn;
function onClick(){
    if(btn.style.backgroundColor === "red"){
        BtnColor();
        item.textbtn = "Низя"
        btn.innerText = item.textbtn;
        return;
    }
    if(btn.style.backgroundColor === "green")
    {
        p2 = new Date();
        item.textspn = "Чтобы начать нажми ещё раз";
        span.innerText = item.textspn;
        item.textbtn = (p2 - p1).toString();
        btn.innerText = item.textbtn;
        btn.style.backgroundColor = "red";
    }
}

function BtnColor(){
    setTimeout(()=>{
        p1 = new Date();
        btn.style.backgroundColor="green"
        item.textbtn = "Можна";
        btn.innerText = item.textbtn;
    },(Math.floor(Math.random()*10000)+1000));
}
