
function progress(){
    var width=1;
    var progressing=document.getElementById("progressing");
    var interval=setInterval(timing,100);
    function timing(){
        if(width>=100){
            clearInterval(interval);
        }
        else{
            width++;
            progressing.style.width=width + '%';
            progressing.innerHTML = width + '%';
            
        }
    }
}