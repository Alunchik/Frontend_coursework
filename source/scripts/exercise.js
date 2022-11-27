let content_for_exercises = [{"word":"необъятный",
    "wrong":["efficient", "frosty", "plump"],
    "right":"immense"},
    {"word":"Лоб",
        "wrong":["palm", "nape", "plump"],
        "right":"forehead"},
    {"word":"противоречия",
        "wrong":["efficient", "decade", "issues"],
        "right":"contradictions"},
    {"word":"благо",
        "wrong":["experience", "upheavals ", "dubious"],
        "right":"blessing"},
]

let num = 0 ;
right_answers=0;
let state=0;

document.body.onload = generate_exercise(content_for_exercises[0]);


function generate_exercise(content) {
    const exercise = document.createElement("div");
    exercise.className = "glass exercise";
    const word = document.createElement("h3");
    word.appendChild(document.createTextNode(content["word"]));
    exercise.appendChild(word);
    let answers = [];
    content["wrong"].forEach((item, index) => {
            answers[index] = item;
        }
    );
    answers[answers.length + 1] = content["right"];
    answers.sort(()=>Math.random()-0.5);
    answers.forEach((item, index) => {
        rbn = document.createElement("div");
        rbn.innerHTML = "" +
            "      <input id=\"radio-" + index + "\"type=\"radio\" name=\"radio\" value=" + item + ">\n" +
            "      <label for=\"radio-" + index + "\">" + item + "</label>"
        rbn.className = "exercise_radio_btn";
        exercise.appendChild(rbn);
    });
    document.querySelector("main").prepend(exercise);
}

ab = document.getElementById("answer_button")

ab.onclick = function()
{
    answer_click();
};

function generate_after_answer(rightness){
    const exercise = document.createElement("div");
    exercise.className = "glass exercise";
    const word = document.createElement("h3");
    if(rightness==true){
        word.appendChild(document.createTextNode("Правильно!"));
    }
    else {
        word.appendChild(document.createTextNode("Неравильно! Правильный ответ: " + content_for_exercises[num-1]["right"]));
    }
    exercise.appendChild(word);
    document.querySelector("main").prepend(exercise);
    ab.innerText="Далее";

}

function generate_at_the_end(){
    const exercise = document.createElement("div");
    exercise.className = "glass exercise";
    const word = document.createElement("h3");
        word.appendChild(document.createTextNode("У вас " + right_answers + " из 4 правильных ответов!"));
    exercise.appendChild(word);
    document.querySelector("main").prepend(exercise);
    ab.innerText="Начать сначала";
    state=3
}

function answer_click(){
    if(state==3){
        document.querySelector(".exercise").remove();
        num=0;
        generate_exercise(content_for_exercises[num]);
        ab.innerText="Ответить";
        state=0;
    }
    else if(state==0){
    let right = false;
    const answers = document.querySelectorAll('.exercise_radio_btn input');
    for (const e of answers) {
        if (e.checked) {
            if (content_for_exercises[num]["right"] == e.value) {
                right = true;
            }
        }
    }
        if(right==true){
             right_answers=right_answers+1;
        }
        num=num+1;
    document.querySelector(".exercise").remove();
    generate_after_answer(right);
        state=1;
        }
    else{
        if(num==4){
            document.querySelector(".exercise").remove();
            generate_at_the_end();
        }
        else {
            document.querySelector(".exercise").remove();
            generate_exercise(content_for_exercises[num]);
            state = 0;
        }
    }
}