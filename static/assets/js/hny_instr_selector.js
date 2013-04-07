var major_scale = [261.63, 293.66, 329.63, 349.23, 392.00, 440.00, 493.88, 523.25];
var minor_scale = [261.63, 293.66, 311.13, 349.23, 392.00, 415.30, 493.88, 523.25];
//var pent_scale = [];
//var oct_scale = [];
//var wt_scale = [];

//sets specifications for waveform by selecting based on int from 0-7
function setInstr(){
   $.ajax({
      dataType: "json",
      url: '/count',
      success: function(res) {
         num = res.count;
         //num = 13;
         console.log(num, 'Number');

         //chooses scale type
         major = false;
         if(num%2==0){
            major = true;
         }

         //chooses wave type (sine, square, sawtooth, or triangle)
         wave = num%4;
         setWaveType(wave);
         //setWaveType(num%4);
        
         //console.log(wave, "wave");
      }
   });
}

//func 1 - send key press/note - onkeydown
function keyDown(e){
   setInstr();
   code = e.keyCode;
   console.log(code);

   var sel;

   if(code == 97){
      freq = major_scale[0];
      console.log(freq);
      play(freq, wave);

   }
   else if(code == 115){
      freq = major_scale[1];
      play(freq, wave);
   }
   else if(code == 100){
      if(major){
         freq = major_scale[2];
      }
      else{
         freq = minor_scale[2];
      }
      play(freq, wave);
   }
   else if(code == 102){
      freq = major_scale[3];
      play(freq, wave);
   }
   else if(code == 106){
      freq = major_scale[4];
      play(freq, wave);
   }
   else if(code == 107){
      if(major){
         freq = major_scale[5];
      }
      else{
         freq = minor_scale[5];
      }
      play(freq, wave);
   }
   else if(code ==108){
      freq = major_scale[6];
      play(freq, wave);
   }
   else if(code == 59){
      freq = major_scale[7];
      play(freq, wave);
   }
   else if(code == 32){
      stop();
   }

   else{
      return;
   }  
}

//func 2 - send key release/stop note - onkeyup
function keyUp(){
   console.log('keyup');
   stop();
}
