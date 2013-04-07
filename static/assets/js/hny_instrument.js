//Oscillator of specified wave type plays a single pitch as specified in Hz

//some code adapted from https://github.com/usdivad/midas/blob/master/audio.js by David Su

var myAudio;

try{
    myAudio = new webkitAudioContext();
}

catch(e){
    try{
      myAudio = new AudioContext();
    }
    catch(e){
      console.log(e.stack);
      alert("Unsupported browser.");
    }
}

var masterVolume = myAudio.createGainNode();
masterVolume.gain.value=1;
masterVolume.connect(myAudio.destination);

var osc = myAudio.createOscillator();
//var oscg = myAudio.createGainNode();
//var oscf = myAudio.createBiquadFilter();

osc.type = 0; //default is a sine wave
//osc.connect(oscf);
osc.connect(masterVolume);
//oscf.connect(oscg);
//oscg.connect(masterVolume);

//plays a note until stopped or another note is played
function play(freq, wave){
  masterVolume.gain.value=1;
  //masterVolume.connect(myAudio.destination);
   if (freq != 0 && freq != osc.frequency.value){
      setPitch(freq);
      setWaveType(wave);
      if (osc.playbackState == 0){
         osc.noteOn(0);
      }
   }
}

//stops the oscillator
function stop(){
   //osc.noteOff(0);
   //osc.disconnect();
   //osc = myAudio.createOscillator();
   //masterVolume.disconnect();
   masterVolume.gain.value=0;
}

//can be sine, square, sawtooth, or triangle
function setWaveType(type) {
  //console.log(osc.type);
  osc.type = type;
}

//sets frequency in Hz
function setPitch(hz) {
  osc.frequency.value = hz;
}
