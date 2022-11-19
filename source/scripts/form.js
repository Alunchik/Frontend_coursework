
function make_area(){
    let inp = document.createElement('textarea');
    inp.name=why;
    inp.required=true;
    inp.maxLength=300;
    inp.minLengt=30;
    inp.placeholder="Расскажите, почему";
    inp.cols=50;
    inp.rows=10;
    document.append(inp);
}
diff_radio = document.getElementById("diff_radio")
diff_radio.addEventListener('change', make_area)

