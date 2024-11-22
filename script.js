import { quizData } from "./data.js";

function render(i){
    const curr = quizData[i];
    document.querySelector(".question").innerHTML = curr.question;
    document.querySelector("#option-1-text").innerHTML = curr.a;
    document.querySelector("#option-2-text").innerHTML = curr.b;
    document.querySelector("#option-3-text").innerHTML = curr.c;
    document.querySelector("#option-4-text").innerHTML = curr.d;
    document.querySelector(".submit").innerHTML = "Submit";
    document.querySelector(".options").classList.remove("hide");
}

let idx = 0;

render(idx);

let score = 0;

const btn = document.querySelector(".submit");

btn.addEventListener("click", () => {
    if(idx < quizData.length - 1) {
        const options = document.getElementsByName("answer");

        for(let option of options)
            if(option.checked)
                if(option.value === quizData[idx].correct)
                    score ++;
            
        render(++ idx);

        for(let option of options)
            option.checked = false;
    }
    else if(idx === quizData.length - 1){
        const options = document.getElementsByName("answer");

        for(let option of options)
            if(option.checked)
                if(option.value === quizData[idx].correct)
                    score ++;
        
        idx ++;
        loadEndScreen();

        for(let option of options)
            option.checked = false;
    }
    else reload();
});

function loadEndScreen(){
    document.querySelector(".question").innerHTML = `You answered ${score}/${quizData.length} questions correctly`;
    document.querySelector(".submit").innerHTML = "Reload";
    document.querySelector(".options").classList.add("hide");
}

function reload(){
    render(0);
    idx = 0;
    score = 0;
}