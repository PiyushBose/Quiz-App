import { quizData } from "./data.js";

function render(i){
    const curr = quizData[i];
    document.querySelector(".question").innerHTML = curr.question;
    document.querySelector("#option-1-text").innerHTML = curr.a;
    document.querySelector("#option-2-text").innerHTML = curr.b;
    document.querySelector("#option-3-text").innerHTML = curr.c;
    document.querySelector("#option-4-text").innerHTML = curr.d;
}

let idx = 0;

render(idx);

const btn = document.querySelector(".submit");

btn.addEventListener("click", () => {
    if(idx < quizData.length - 1) 
        render(++ idx);
    else if(idx === quizData.length - 1){
        idx ++;
        loadEndScreen();
    }
    else reload();
});

function loadEndScreen(){
    console.log("end");
}

function reload(){
    render(0);
    idx = 0;
    console.log("reload");
}