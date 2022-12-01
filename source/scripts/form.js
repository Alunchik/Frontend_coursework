function changeVisible(state){
    let reason_area = document.getElementById("reason_diff");
    let label = document.getElementById("reason_diff_label");
    if(state==true){
        reason_area.style.display="block";
        label.style.display="block";
}
    else{
        reason_area.style.display="none";
        label.style.display="none";
    }

}



var diff_radios = document.querySelectorAll('input[name="reason"]');
diff_radios.forEach(function (btn){
   btn.addEventListener('click', function (e){
       if(diff_radio.checked){
           changeVisible(true);
       }
       else{
           changeVisible(false);
       }
   })
})