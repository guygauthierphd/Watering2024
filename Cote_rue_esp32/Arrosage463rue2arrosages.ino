//  FARM DATA RELAY SYSTEM
//
//  ESP-NOW Sensor Example
//
//  Developed by Timm Bogner (timmbogner@gmail.com) in Urbana, Illinois, USA.
//  An example of how to send data via ESP-NOW using FDRS.
//

#include "fdrs_node_config.h"
#include <fdrs_node.h>
#include <Preferences.h>

#define JOURARROSAGE 4

Preferences valeurs;

unsigned long int chien = 0;
const int nbZones = 6; // 6 côté rue, 8 côté cours
int modeArrosage = 0;
int oldMode = 0;
const unsigned int sorties[8] = {27,33,12,32,14,15,34,39};
unsigned int heureDep = 0;
unsigned int heureDep2 = 0;
unsigned int heureAct = 0;
unsigned int jourAct = 0;
int h=0;
int m=0;
unsigned int durees[8] = {0,0,0,0,0,0,0,0};
unsigned int durees2[8] = {0,0,0,0,0,0,0,0};
unsigned int zoneGo[9] = {0,0,0,0,0,0,0,0,0};
unsigned int zoneGo2[9] = {0,0,0,0,0,0,0,0,0};
int zoneEtat[8] = {0,0,0,0,0,0,0,0};
int oldEtat[8] = {0,0,0,0,0,0,0,0};
int zE = 0;

void fdrs_recv_cb(DataReading theData)
{
  DBG("ID: " + String(theData.id));
  DBG("Type: " + String(theData.t));
  DBG("Data: " + String(theData.d));
  int zEr = 0;
  if (theData.id==WRITING_ID) {
    switch (theData.t)
    {
      case 1: //Heure de départ 
        heureDep = theData.d;
        valeurs.putUInt("hDep", theData.d);
        //DBG("Heure de départ: "+String(theData.d));
        break;
      case 25: //Heure de départ 2e arrosage 
        heureDep2 = theData.d;
        valeurs.putUInt("hDep2", theData.d);
        //DBG("Heure de départ: "+String(theData.d));
        break;
      case 2: //Duree zone 1
        durees[0] = theData.d;
        valeurs.putUInt("z0D", theData.d);
        DBG(valeurs.getUInt("z0D",0));
        break;
      case 3: //Duree zone 2
        durees[1] = theData.d;
        valeurs.putUInt("z1D", theData.d);
        break;
      case 4: //Duree zone 3
        durees[2] = theData.d;
        valeurs.putUInt("z2D", theData.d);
        break;
      case 5: //Duree zone 4
        durees[3] = theData.d;
        valeurs.putUInt("z3D", theData.d);
        break;
      case 6: //Duree zone 5
        durees[4] = theData.d;
        valeurs.putUInt("z4D", theData.d);
        break;
      case 7: //Duree zone 6
        durees[5] = theData.d;
        valeurs.putUInt("z5D", theData.d);
        break;
      /*case 8: //Duree zone 7
        durees[6] = theData.d;
        valeurs.putUInt("z6D", theData.d);
        break;
      case 9: //Duree zone 8
        durees[7] = theData.d;
        valeurs.putUInt("z7D", theData.d);
        break;*/
      case 52: //Duree zone 1 2e arrosage 
        durees2[0] = theData.d;
        valeurs.putUInt("z0D2", theData.d);
        DBG(valeurs.getUInt("z0D2",0));
        break;
      case 53: //Duree zone 2 2e arrosage 
        durees2[1] = theData.d;
        valeurs.putUInt("z1D2", theData.d);
        break;
      case 54: //Duree zone 3 2e arrosage 
        durees2[2] = theData.d;
        valeurs.putUInt("z2D2", theData.d);
        break;
      case 55: //Duree zone 4 2e arrosage 
        durees2[3] = theData.d;
        valeurs.putUInt("z3D2", theData.d);
        break;
      case 56: //Duree zone 5 2e arrosage 
        durees2[4] = theData.d;
        valeurs.putUInt("z4D2", theData.d);
        break;
      case 57: //Duree zone 6 2e arrosage 
        durees2[5] = theData.d;
        valeurs.putUInt("z5D2", theData.d);
        break;
      case 10: //Mode arrosage
        modeArrosage = theData.d;
        valeurs.putUInt("mode", theData.d);
        break;
      
      case 12: //Mode manuel zone 2
        if (modeArrosage==1) {
          zEr = theData.d;
          for(int k = 0; k<nbZones; k++) {
            zoneEtat[k] = zEr & 0x0001;
            zEr = zEr>>1;
            if (k==2) 
            {
              zEr = zEr>>2;
            }
          }
        }      
      case 20: // Jour actuel
        jourAct = theData.d;
        break;
      case 21: // Heure actuelle 
        heureAct = theData.d;
        //valeurs.putUInt("hDep", theData.d);
        h = floor(heureAct/60.0);
        m = heureAct - 60*h;
        chien = millis();
        DBG("Heure actuelle : "+String(h)+":"+String(m));
        //DBG(chien);
        break;
        
      default:
        DBG("Erreur : " + theData.t);
    }
    
    zoneGo[0] = heureDep;
    zoneGo2[0] = heureDep2;
    for(int k=0;k<nbZones;k++){
      zoneGo[k+1] = zoneGo[k] + durees[k];
      zoneGo2[k+1] = zoneGo2[k] + durees2[k];
    }
    
  }
}

void automatique()
{
  if (jourAct==JOURARROSAGE){
  if (((heureAct>=zoneGo[0]) && (heureAct<zoneGo[1]))||((heureAct>=zoneGo2[0]) && (heureAct<zoneGo2[1]))){
    if (zoneEtat[0]==0) DBG("Arrosage zone 1");
    zoneEtat[0] = 1;
    zoneEtat[1] = 0;
    zoneEtat[2] = 0;
    zoneEtat[3] = 0;
    zoneEtat[4] = 0;
    zoneEtat[5] = 0;
    zoneEtat[6] = 0;
    zoneEtat[7] = 0;
  }
  else zoneEtat[0] = 0;
  
  if (((heureAct>=zoneGo[1]) && (heureAct<zoneGo[2]))||((heureAct>=zoneGo2[1]) && (heureAct<zoneGo2[2]))){
    if (zoneEtat[1]==0) DBG("Arrosage zone 2");
    zoneEtat[1] = 1;
    zoneEtat[0] = 0;
    zoneEtat[2] = 0;
    zoneEtat[3] = 0;
    zoneEtat[4] = 0;
    zoneEtat[5] = 0;
    zoneEtat[6] = 0;
    zoneEtat[7] = 0;
  }
  else zoneEtat[1] = 0;
  
  if (((heureAct>=zoneGo[2]) && (heureAct<zoneGo[3]))||((heureAct>=zoneGo2[2]) && (heureAct<zoneGo2[3]))){
    if (zoneEtat[2]==0) DBG("Arrosage zone 3");
    zoneEtat[2] = 1;
    zoneEtat[0] = 0;
    zoneEtat[1] = 0;
    zoneEtat[3] = 0;
    zoneEtat[4] = 0;
    zoneEtat[5] = 0;
    zoneEtat[6] = 0;
    zoneEtat[7] = 0;
  }
  else zoneEtat[2] = 0;
  }
  //if (jourAct==JOURARROSAGE){
  if (((heureAct>=zoneGo[3]) && (heureAct<zoneGo[4]))||((heureAct>=zoneGo2[3]) && (heureAct<zoneGo2[4]))){
    if (zoneEtat[3]==0) DBG("Arrosage zone 4");
    zoneEtat[3] = 1;
    zoneEtat[0] = 0;
    zoneEtat[1] = 0;
    zoneEtat[2] = 0;
    zoneEtat[4] = 0;
    zoneEtat[5] = 0;
    zoneEtat[6] = 0;
    zoneEtat[7] = 0;
  }
  else zoneEtat[3] = 0;
  
  if (((heureAct>=zoneGo[4]) && (heureAct<zoneGo[5]))||((heureAct>=zoneGo2[4]) && (heureAct<zoneGo2[5]))){
    if (zoneEtat[4]==0) DBG("Arrosage zone 5");
    zoneEtat[4] = 1;
    zoneEtat[0] = 0;
    zoneEtat[1] = 0;
    zoneEtat[2] = 0;
    zoneEtat[3] = 0;
    zoneEtat[5] = 0;
    zoneEtat[6] = 0;
    zoneEtat[7] = 0;
  }
  else zoneEtat[4] = 0;
  
  if (((heureAct>=zoneGo[5]) && (heureAct<zoneGo[6]))||((heureAct>=zoneGo2[5]) && (heureAct<zoneGo2[6]))){
    if (zoneEtat[5]==0) DBG("Arrosage zone 6");
    zoneEtat[5] = 1;
    zoneEtat[0] = 0;
    zoneEtat[1] = 0;
    zoneEtat[2] = 0;
    zoneEtat[3] = 0;
    zoneEtat[4] = 0;
    zoneEtat[6] = 0;
    zoneEtat[7] = 0;
  }
  else zoneEtat[5] = 0;
  //}
}

int detecterChangements()
{
  int changement = 0;
  for(int k=0; k<nbZones; k++){
    if (zoneEtat[k]!=oldEtat[k]){
      oldEtat[k] = zoneEtat[k];
      changement=1;
      DBG("Changement détecté ");
      //break;
    }
  }
  if (modeArrosage!=oldMode) {
    oldMode = modeArrosage;
    changement =1;
  }
  return changement;
}

void initialiseOutputs()
{
  for(int k=0; k<nbZones; k++){
    pinMode(sorties[k], OUTPUT);
    digitalWrite(sorties[k], LOW);
  }
}

void updateOutputs()
{
  for(int k=0; k<nbZones; k++){
    if (zoneEtat[k]==0) digitalWrite(sorties[k], LOW);
    else digitalWrite(sorties[k], HIGH);
  }
}

void setup()
{
  valeurs.begin("arroRue",false);
  initialiseOutputs();
  
  durees[0] = valeurs.getUInt("z0D",0);
  durees[1] = valeurs.getUInt("z1D",0);
  durees[2] = valeurs.getUInt("z2D",0);
  durees[3] = valeurs.getUInt("z3D",0);
  durees[4] = valeurs.getUInt("z4D",0);
  durees[5] = valeurs.getUInt("z5D",0);
  durees[6] = valeurs.getUInt("z6D",0);
  durees[7] = valeurs.getUInt("z7D",0);
  durees2[0] = valeurs.getUInt("z0D2",0);
  durees2[1] = valeurs.getUInt("z1D2",0);
  durees2[2] = valeurs.getUInt("z2D2",0);
  durees2[3] = valeurs.getUInt("z3D2",0);
  durees2[4] = valeurs.getUInt("z4D2",0);
  durees2[5] = valeurs.getUInt("z5D2",0);
  durees2[6] = valeurs.getUInt("z6D2",0);
  durees2[7] = valeurs.getUInt("z7D2",0);
  heureDep = valeurs.getUInt("hDep",0);
  heureDep2 = valeurs.getUInt("hDep2",0);
  modeArrosage = valeurs.getUInt("mode", 0);
  
  beginFDRS();
  pingFDRS(1000);
  addFDRS(fdrs_recv_cb);
  subscribeFDRS(WRITING_ID);
  chien = millis();
  
}
void loop()
{
  loopFDRS();
  if (millis()-chien > 90000) {
    DBG("Alerte, temps non mis à jour...");
    chien = millis();
  }
  if (millis()<chien) chien = millis(); // en cas de débordement 

  /* Mode Automatique */
  if (modeArrosage==0) {
    if (((heureAct>=zoneGo[0]) && (heureAct<zoneGo[6]))||((heureAct>=zoneGo2[0]) && (heureAct<zoneGo2[6]))) {
      automatique();
    }
    else {
      for(int k=0; k<nbZones; k++) zoneEtat[k]=0;
    }
  }
  
  /* ANNULATION */
  if (modeArrosage==2){
    for(int k=0; k<nbZones; k++) zoneEtat[k]=0;
  }
  
  updateOutputs();
  if (detecterChangements()==1){
      zE = 0;
      for(int k=nbZones-1;k>=0;k--) {
        zE = 2*zE + zoneEtat[k];
      }
      loadFDRS(zE, 40);
      if(sendFDRS()){
      DBG("Big Success!");
    } else {
      DBG("Nope, not so much.");
    }
  }
}
