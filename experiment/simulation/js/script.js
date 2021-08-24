
let x, text, speeds;
let y, speeds2;
let seconds = 0;
let minutes = 0;
let hours = 0;
let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

let interval = null;

let status = "stopped";

function stopWatch(){

    seconds++;

    if(seconds / 60 === 1){
        seconds = 0;
        minutes++;

        if(minutes / 60 === 1){
            minutes = 0;
            hours++;
        }

    }

    if(seconds < 10){
        displaySeconds = "0" + seconds.toString();
    }
    else{
        displaySeconds = seconds;
    }

    if(minutes < 10){
        displayMinutes = "0" + minutes.toString();
    }
    else{
        displayMinutes = minutes;
    }

    if(hours < 10){
        displayHours = "0" + hours.toString();
    }
    else{
        displayHours = hours;
    }

    document.getElementById("display").innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds;

}


function startStop(){
        
        
        let  elem = document.getElementById("car");   
        let pos = 0;
        interval = window.setInterval(stopWatch, 1000);
        document.getElementById("icon1").style.visibility = "hidden";
        document.getElementById("startStop").innerHTML = "Start";
        document.getElementById("startStop").style.backgroundColor = "green";
        document.getElementById("reset").style.display = "none";
        document.getElementById("startStop").style.display = "none";
        status = "started";
        let  id = setInterval(frame, 10 );
        function frame() {
          if (pos == 1250 || pos > 1250) {
            let  speed = x/seconds;  
            let  n = speed.toFixed(2);
            let  speed2 = n*0.27;
            let  n1= speed2.toFixed(2);  
            document.getElementById("reset").style.display = "block";
            document.getElementById("time").innerHTML = seconds;
            document.getElementById("speed").innerHTML = n + " m/s = " + n1 + "km/hr";
            document.getElementById("instructions1").innerHTML = "Note Down speed in the below observation table, redoing this till you filled the speed of all 16 cars.";  
            document.getElementById("icon4").style.visibility = "visible";
            window.clearInterval(interval);
            clearInterval(id);
          } else {
              
              document.getElementById("instructions1").innerHTML = "The speed is calculated with simple stopwatch method using formula speed =distance/time.";
              pos = pos + parseInt(speeds);
              
              console.log(pos);
           elem.style.left = pos + "px"; 
           }
          }
       
}
  

function reset(){
    let  elem = document.getElementById("car");   
    let  pos = 0;
    window.clearInterval(interval);
    seconds = 0;
    minutes = 0;
    pos=0;
    hours = 0;
    x = null;
    speeds = 1;
    elem.style.left = pos + "px";
    document.getElementById("display").innerHTML = "00:00:00";
    document.getElementById("startStop").innerHTML = "Start";
    document.getElementById("startStop").style.backgroundColor = "green";
    document.getElementById("startStop").style.display = "block";
    document.getElementById("reset").style.display = "none";
    document.getElementById("time").innerHTML = "....";
    document.getElementById("speed").innerHTML = "....";    
    document.getElementById("startStop").style.display = "none";
    document.getElementById("Inputboxes").style.display = "block";
    document.getElementById("icon4").style.visibility = "hidden";
    document.getElementById("icon3").style.visibility = "visible";
    document.getElementById("instructions1").innerHTML = "Fill the readings and click on submit.";
    
    

}



function fullscreen() {
    document.getElementById("cont1").style.width = "1535px";
    document.getElementById("cont1").style.height = "100vh";
    document.getElementById("cont1").style.display = "inline";
    document.getElementById("cont1").style.position = "absolute";
    document.getElementById("cont1").style.top = "0";
    document.getElementById("cont1").style.left = "0";
    
}
    
    function normal() {

    document.getElementById("cont1").style.position = "static";
    document.getElementById("cont1").style.width = "0%";
    document.getElementById("cont1").style.height = "0%";
    document.getElementById("cont1").style.display = "none";   


}
    
    function parameter(){
         

          x = document.getElementById("dist").value;

          if (isNaN(x) || x < 150 || x > 550) {
             text = "!! Error Input not valid. You have to add value between 150 to 550!!";
             document.getElementById("errors").innerHTML = text;
          } else{
              document.getElementById("errors").innerHTML = "";
              document.getElementById("dista").innerHTML = x;
              document.getElementById("dista1").innerHTML = x;
              document.getElementById("startStop").style.display = "block";
              document.getElementById("Inputboxes").style.display = "none";
              speeds = document.getElementById("slider").value;
              document.getElementById("instructions1").innerHTML = "Click On Start.";
              document.getElementById("icon1").style.visibility = "visible";
              document.getElementById("icon3").style.visibility = "hidden";
              
          }
         
    }












    
function fullscreen2(){
    document.getElementById("cont2").style.width = "1535px";
    document.getElementById("cont2").style.height = "200vh";
    document.getElementById("cont2").style.display = "inline";
    document.getElementById("cont2").style.position = "absolute";
    document.getElementById("cont2").style.top = "0";
    document.getElementById("cont2").style.left = "0";

}
    
    function normal2() {    
    document.getElementById("cont2").style.position = "static";
    document.getElementById("cont2").style.width = "0%";
    document.getElementById("cont2").style.height = "0%";
    document.getElementById("cont2").style.display = "none";

}
  
    function parameter2(){
         
          y = document.getElementById("dist2").value;

          if (isNaN(y) || y < 150 || y > 550) {
             text = "!! Error Input not valid. You have to add value between 150 to 550!!";
             document.getElementById("errors2").innerHTML = text;
              
          } else{
              document.getElementById("errors2").innerHTML = "";
              document.getElementById("dista2").innerHTML = y;
              document.getElementById("dista12").innerHTML = y;
              document.getElementById("startStop2").style.display = "block";
              document.getElementById("Inputboxes2").style.display = "none";
              speeds2 = document.getElementById("slider2").value;
              document.getElementById("instructions2").innerHTML = "Click On Start.";
              document.getElementById("icon12").style.visibility = "visible";
              document.getElementById("icon32").style.visibility = "hidden";
              
          }
         
    }



function startStop2(){
        var gun = 0;
        let z =0;
        let  elem = document.getElementById("car2");   
        let pos2 = 12;
        interval = window.setInterval(stopWatch, 1000);
        document.getElementById("icon12").style.visibility = "hidden";
        document.getElementById("reset2").style.display = "none";
        document.getElementById("startStop2").style.display = "none";
        
        let  id2 = setInterval(frame2, 10 );
        function frame2() {
          if (pos2 == 1250 || pos2 > 1250) {
            let  speed2 = ((y/seconds)*5)/18;  
            let  n2 = speed2.toFixed(2); 
            document.getElementById("reset2").style.display = "block";
            document.getElementById("time").innerHTML = seconds;
            document.getElementById("laser").style.width = "0px";
            document.getElementById("speedgun").innerHTML = n2 + " km/hr";
            document.getElementById("instructions2").innerHTML = "Note Down speed in the below observation table, redoing this till you filled the speed of all 16 cars.";
            document.getElementById("icon42").style.visibility = "visible";
            window.clearInterval(interval);
            clearInterval(id2);
              
          }
          
          else {
              
              document.getElementById("instructions2").innerHTML = "The spot speed gun has pointed towards the car from the back side and the speed is calculated accordingly.";
              pos2 = pos2 + parseInt(speeds2);
              if (pos2>500 && pos2<800){
              document.getElementById("laser").style.width = pos2;
              }
              else{
                  document.getElementById("laser").style.width = "0px";
              }
              elem.style.left = pos2 + "px"; 
           }
          }
       
}


function reset2(){
    document.getElementById("Inputboxes2").style.display = "block";
    document.getElementById("instructions2").innerHTML = "Fill the readings and click on submit.";
    document.getElementById("icon42").style.visibility = "hidden";
    document.getElementById("icon32").style.visibility = "visible";
    let  elem = document.getElementById("car2");   
    let  pos2 = 12;
    seconds = 0;
    minutes = 0;
    pos2=12;
    y = null;
    speeds = 1;
    document.getElementById("speedgun").innerHTML = "...";
    elem.style.left = pos2 + "px";
    document.getElementById("laser").style.width = "0px";
    document.getElementById("speedgun").innerHTML = "...";
    document.getElementById("reset2").style.display = "none";
    document.getElementById("time2").innerHTML = "....";
    document.getElementById("speed2").innerHTML = "....";    
    
    

}



// New program



function graphs(){
        let f21= Number(document.getElementById("f1").value);
        let f22= Number(document.getElementById("f2").value);
        let f23= Number(document.getElementById("f3").value);
        let f24= Number(document.getElementById("f4").value);
        let f25= Number(document.getElementById("f5").value);
        let f26= Number(document.getElementById("f6").value);
        let f27= Number(document.getElementById("f7").value);
        let f28= Number(document.getElementById("f8").value);
        

        let total = f21+f22+f23+f24+f25+f26+f27+f28;

        let f31 = (f21*100)/total;
        let f32 = (f22*100)/total;
        let f33 = (f23*100)/total;
        let f34 = (f24*100)/total;
        let f35 = (f25*100)/total;
        let f36 = (f26*100)/total;
        let f37 = (f27*100)/total;
        let f38 = (f28*100)/total;

        document.getElementById("f21").innerHTML=((f21*100)/total).toFixed(2);
        document.getElementById("f22").innerHTML=((f22*100)/total).toFixed(2);
        document.getElementById("f23").innerHTML=((f23*100)/total).toFixed(2);
        document.getElementById("f24").innerHTML=((f24*100)/total).toFixed(2);
        document.getElementById("f25").innerHTML=((f25*100)/total).toFixed(2);
        document.getElementById("f26").innerHTML=((f26*100)/total).toFixed(2);
        document.getElementById("f27").innerHTML=((f27*100)/total).toFixed(2);
        document.getElementById("f28").innerHTML=((f28*100)/total).toFixed(2);


        var xValues = [5,15,25,35,45,55,65,75];
        var yValues = [f31,f32,f33,f34,f35,f36,f37,f38];
         
        var max=f31;
        var jjj=0;

        for (i = 0; i < 7; i++){
           if(yValues[i]>max)
             {
              max=yValues[i];
              jjj=i;
            }
        }

        var modal = xValues[jjj];
        console.log(modal);

        document.getElementById("modal").innerHTML=modal + "Kmph";

        new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      fill: false,
      lineTension: 0,
      backgroundColor: "black",
      borderColor: "black",
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
      text : "Y Axis : Frequency, (%)        X Axis : Speed , (Kmph)",
    },
    legend: {display: false},
    scales: {
      yAxes: [{ticks: {min: 1, max:50}}],
    },

  },
           });
 
}





function graphs2(){
        var f21= Number(document.getElementById("f12").value);
        var f22= Number(document.getElementById("nan").value);
        var f23= Number(document.getElementById("f32").value);
        var f24= Number(document.getElementById("f42").value);
        var f25= Number(document.getElementById("f52").value);
        var f26= Number(document.getElementById("f62").value);
        var f27= Number(document.getElementById("f72").value);
        var f28= Number(document.getElementById("f82").value);

        let total = f21+f22+f23+f24+f25+f26+f27+f28;


        let f31 = (f21*100)/total;
        let f32 = (f22*100)/total;
        let f33 = (f23*100)/total;
        let f34 = (f24*100)/total;
        let f35 = (f25*100)/total;
        let f36 = (f26*100)/total;
        let f37 = (f27*100)/total;
        let f38 = (f28*100)/total;



        

        document.getElementById("f212").innerHTML=((f21*100)/total).toFixed(2)
        document.getElementById("f222").innerHTML=((f22*100)/total).toFixed(2);
        document.getElementById("f232").innerHTML=((f23*100)/total).toFixed(2);
        document.getElementById("f242").innerHTML=((f24*100)/total).toFixed(2);
        document.getElementById("f252").innerHTML=((f25*100)/total).toFixed(2);
        document.getElementById("f262").innerHTML=((f26*100)/total).toFixed(2);
        document.getElementById("f272").innerHTML=((f27*100)/total).toFixed(2);
        document.getElementById("f282").innerHTML=((f28*100)/total).toFixed(2);


        var xValues = [5,15,25,35,45,55,65,75];
        var yValues = [f31,f32,f33,f34,f35,f36,f37,f38];


        var max=f31;
        var jjj=0;

        for (i = 0; i < 7; i++){
           if(yValues[i]>max)
             {
              max=yValues[i];
              jjj=i;
            }
        }

        var modal = xValues[jjj];
        console.log(modal);

        document.getElementById("modal2").innerHTML=modal + "Kmph";

        new Chart("myChart2", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      fill: false,
      lineTension: 0,
      backgroundColor: "black",
      borderColor: "black",
      data: yValues
    }]
  },
   elements: {
        line: {
            borderJoinStyle: 'round'
        }
    },
  options: {
    title: {
      display: true,
      text : "Y Axis : Frequency, (%)        X Axis : Speed , (Kmph)",
    },
    legend: {display: false},
    scales: {
      yAxes: [{ticks: {min: 1, max:60}}],
    },

  },
           });
 
}

