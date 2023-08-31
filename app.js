 var min=document.getElementById("min");
 var sec=document.getElementById("sec");
 var msec=document.getElementById("msec");

 var interval;
 var m=0;
 var s=0;
 var ms=0;
  
 var startDisplay=document.getElementById("start");
 var stopDisplay=document.getElementById("stop");
 var resetDisplay=document.getElementById("reset");

 function start()
 {
    interval=setInterval(function()
    {

        ms++;
        msec.innerHTML=ms ;
        if (ms===100)
        {
            s++;
            sec.innerHTML=s+".";
            ms=0;
        }
         else if (s===60)
         {
            m++;
            min.innerHTML=m + ":";
            s=0;
         }  
    },10)
   startDisplay.style.display="none";
   stopDisplay.style.display="inline-block"
   resetDisplay.style.display="inline-block"
 }

 function stop()
 {
    clearInterval(interval);
    stopDisplay.style.display="none";
    startDisplay.style.display="inline-block";
 }

 function reset()
 {
    m=0;//reinitialize to zero as we want to reset
    s=0;//reinitialize to zero as we want to reset
    ms=0;//reinitialize to zero as we want to reset
    min.innerHTML=m+"0";
    sec.innerHTML=s+"0" ;//to remove the previous value of seconds
    msec.innerHTML=ms+"0";
    stop();


    stopDisplay.style.display="none";
    resetDisplay.style.display="none";
    startDisplay.style.display="inline-block";

 }






