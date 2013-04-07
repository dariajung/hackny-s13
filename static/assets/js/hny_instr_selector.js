var major_scale = [261.63, 293.66, 329.63, 349.23, 392.00, 440.00, 493.88, 523.25];
var minor_scale = [261.63, 293.66, 311.13, 349.23, 392.00, 415.30, 493.88, 523.25];
//var pent_scale = [];
//var oct_scale = [];
//var wt_scale = [];

97 
115 
100 
102 
106 
107 
108 
59


//sets specifications for waveform by selecting based on int from 0-7
function setInstr(){
   $.ajax({
      dataType: "json",
      url: '/count',
      success: function(res) {
         var num = res.count;
         console.log(num);

         if(num%2==0){
            major = true;
         }
         else if(num<2){
            setWaveType(0);//sine
         }
         else if(num<4){
            setWaveType(1);//square
         }
         else if(num<6){
            setWaveType(2);//sawtooth
         }
         else {
            setWaveType(3);//triangle
         }
      }
   });



}

//func 1 - send key press/note - onkeydown
function keyDown(e){
   code = e.keyCode;
   var sel;

   if(code == 97){
      freq = major_scale[0];
   }
   else if(code == 115){
      freq = major_scale[1];
   }
   else if(code == 100){
      if(major){
         freq = major_scale[2];
      }
      else{
         freq = minor_scale[2];
      }
   }
   else if(code == 102){
      freq = major_scale[3];
   }
   else if(code == 106){
      freq = major_scale[4];
   }
   else if(code == 107){
      if(major){
         freq = major_scale[5];
      }
      else{
         freq = minor_scale[5];
      }
   }
   else if(code ==108){
      freq = major_scale[6];
   }
   else if(code == 59){
      freq = major_scale[7];
   }
   else{
      return;
   }
   play(freq);
}

//func 2 - send key release/stop note - onkeyup
function keyUp(){
   stop();
}
