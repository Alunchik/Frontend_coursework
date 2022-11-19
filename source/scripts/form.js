
bebra.onclick = function(){
    let inp = document.createElement('textarea');
    inp.name=why;
    inp.required=true;
    inp.maxLength=300;
    inp.minLengt=30;
    inp.placeholder="Расскажите, почему";
    inp.cols=50;
    inp.rows=10;
    differ.append(inp);
}
let differ = document.querySelector('option[value="diff"]')

