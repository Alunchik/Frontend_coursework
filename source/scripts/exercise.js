let content_for_exercises = [{"word":"необъятный",
    "wrong":["efficient", "frosty", "plump"],
    "right":"immense"},
    {"word":"необъятный",
        "wrong":["efficient", "frosty", "plump"],
        "right":"immense"},
    {"word":"необъятный",
        "wrong":["efficient", "frosty", "plump"],
        "right":"immense"},
    {"word":"необъятный",
        "wrong":["efficient", "frosty", "plump"],
        "right":"immense"},
]
let num = 0 ;
document.body.onload = generate_exercise(content_for_exercises[0]);
function generate_exercise(content) {
    const exercise = document.createElement("div");
    exercise.className = "glass exercisse";
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
    const answer_button = document.createElement('button');
    answer_button.id = "answer_button"
    answer_button.appendChild(document.createTextNode("Ответить"));
    exercise.appendChild(answer_button);
    document.body.append(exercise);
}
answer_button.onclick = answer_click(1);
function answer_click(right_value){
    // let right=false;
    // const answers = document.querySelectorAll('.exercise_radio_btn input');
    // for (const e of answers) {
    //     if (e.checked) {
    //         if (right_value == e.value) {
    //             right = true;
    //         }
    //     }
    // }
    //     if(right==true){
    //         document.body.append("DA");
    //     }
    //     else {
    //         document.body.append("NO");
    //     }
            document.querySelector(".exercisse").remove();
        }