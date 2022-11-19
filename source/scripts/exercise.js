let content = {"word":"необъятный",
    "wrong":["efficient", "frosty", "plump"],
    "right":"immense"
}
document.body.onload = generate_exercise;
function generate_exercise() {
    const exercise = document.createElement("div");
    exercise.className="glass";
    const word = document.createElement("h3");
    word.appendChild(document.createTextNode(content["word"]));
    exercise.appendChild(word);
    let answers = [];
    content["wrong"].forEach((item, index)=>{
        answers[index]=item;
        }
    );
    answers[answers.length+1]=content["right"];
    answers.forEach((item, index)=>{
        rbn = document.createElement("div");
        rbn.innerHTML ="" +
            "      <input id=\"radio-" + index +  "\"type=\"radio\" name=\"radio\" value=" + item + " checked>\n" +
            "      <label for=\"radio-" + index + "\">" + item + "</label>"
        rbn.className="exercise_radio_btn";
        exercise.appendChild(rbn);
    });
    document.body.append(exercise);
}
butt.onclick = generate_exercise();