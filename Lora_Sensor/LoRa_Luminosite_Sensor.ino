//  FARM DATA RELAY SYSTEM
//
//  LoRa Sensor Example
//
//  Developed by Timm Bogner (timmbogner@gmail.com) for Sola Gratia Farm in Urbana, Illinois, USA.
//  An example of how to send data via LoRa using FDRS.
//

#include "fdrs_sensor_config.h"
#include <fdrs_node.h>

int analogPin = A3;
float data;

void setup() {
  beginFDRS();
}
void loop() {
  data = analogRead(analogPin);
  loadFDRS(data, LIGHT_T);
  sendFDRS();
  delay(10000);
  //sleepFDRS(10);  //Sleep time in seconds
}
