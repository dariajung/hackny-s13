/*
  DigitalReadSerial
 Reads a digital input on pin 2, prints the result to the serial monitor 
 
 This example code is in the public domain.
 */

// digital pin 2 has a pushbutton attached to it. Give it a name:
int pushA = 3;
int pushS = 6;
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
  Keyboard.begin();
}

// the loop routine runs over and over again forever:
void loop() {
  // read the input pin:
  int buttonA = digitalRead(pushA);
  int buttonS = digitalRead(pushS);
  // print out the state of the button:
  Serial.println("buttons");
  Serial.println(buttonA);
  Serial.println(buttonS);
  Serial.println("/buttons");
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
  delay(10);        // delay in between reads for stability
}
