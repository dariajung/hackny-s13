/*
  DigitalReadSerial
 Reads a digital input on pin 2, prints the result to the serial monitor 
 
 This example code is in the public domain.
 */

// digital pin 2 has a pushbutton attached to it. Give it a name:
int pushA = 2;
int pushS = 3;
int pushD = 4;
int pushF = 5;
int pushJ = 6;
int pushK = 7;
int pushL = 8;
int pushsem = 9;
//char a = KEY_A;

// the setup routine runs once when you press reset:
void setup() {
  // initialize serial communication at 9600 bits per second:
  Serial.begin(9600);
  // make the pushbutton's pin an input:
  pinMode(pushA, INPUT_PULLUP);
  digitalWrite(pushA, HIGH);
  
  pinMode(pushS, INPUT_PULLUP);
  digitalWrite(pushS, HIGH);
  
  pinMode(pushD, INPUT_PULLUP);
  digitalWrite(pushD, HIGH);
  
  pinMode(pushF, INPUT_PULLUP);
  digitalWrite(pushF, HIGH);
  
  pinMode(pushJ, INPUT_PULLUP);
  digitalWrite(pushJ, HIGH);
  
  pinMode(pushK, INPUT_PULLUP);
  digitalWrite(pushK, HIGH);
  
  pinMode(pushL, INPUT_PULLUP);
  digitalWrite(pushL, HIGH);
  
  pinMode(pushsem, INPUT_PULLUP);
  digitalWrite(pushsem, HIGH);
  
  Keyboard.begin();
}

// the loop routine runs over and over again forever:
void loop() {
  // read the input pin:
  int buttonA = digitalRead(pushA);
  int buttonS = digitalRead(pushS);
  int buttonD = digitalRead(pushD);
  int buttonF = digitalRead(pushF);
  int buttonJ = digitalRead(pushJ);
  int buttonK = digitalRead(pushK);
  int buttonL = digitalRead(pushL);
  int buttonSem = digitalRead(pushsem);
  // print out the state of the button:
  //Serial.println("buttons");
  //Serial.println(buttonA);
  //Serial.println(buttonS);
  //Serial.println("/buttons");
  if(buttonA==0){
    Keyboard.press('a');
    delay(100);
    Keyboard.releaseAll();
  }
  else if(buttonS==0){
   Keyboard.press('s');
    delay(100);
    Keyboard.releaseAll();
  }
  else if(buttonD==0){
   Keyboard.press('d');
    delay(100);
    Keyboard.releaseAll();
  }
    else if(buttonF==0){
   Keyboard.press('f');
    delay(100);
    Keyboard.releaseAll();
  }
    else if(buttonJ==0){
   Keyboard.press('j');
    delay(100);
    Keyboard.releaseAll();
  }
    else if(buttonK==0){
   Keyboard.press('k');
    delay(100);
    Keyboard.releaseAll();
  }
    else if(buttonL==0){
   Keyboard.press('l');
    delay(100);
    Keyboard.releaseAll();
  }
    else if(buttonSem==0){
   Keyboard.press(';');
    delay(100);
    Keyboard.releaseAll();
  }
  

  
  
  delay(10);        // delay in between reads for stability
}
