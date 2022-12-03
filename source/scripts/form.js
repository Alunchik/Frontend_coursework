function changeVisible(state){
    let reason_textarea = document.getElementById("reason_diff");
    let label = document.getElementById("reason_diff_label");
    if(state==true){ // показываем блок
        reason_textarea.style.display="block";
        label.style.display="block";
}
    else{  //скрываем блок
        reason_textarea.style.display="none";
        label.style.display="none";
    }
}


var diff_radios = document.querySelectorAll('input[name="reason"]');
diff_radios.forEach(function (btn){
/* вызываем функцию изменения отображения блока в зависимости от состояния кнопки */
btn.addEventListener('click', function (e){
   if(diff_radio.checked){
       changeVisible(true);
   }
   else{
       changeVisible(false);
   }
})
})