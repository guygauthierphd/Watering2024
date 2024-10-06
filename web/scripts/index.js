// DOM elements
const logoutNavElement = document.querySelector('#logout-link');
const loginNavElement = document.querySelector('#login-link');
const sensorNavElement = document.querySelector('#sensor-link');
const signedOutMessageElement = document.querySelector('#signedOutMessage');
const dashboardElement = document.querySelector("#dashboardSignedIn");
const userDetailsElement = document.querySelector('#user-details');

// MANAGE LOGIN/LOGOUT UI
const setupUI = (user) => {
  if (user) {
    //toggle UI elements
    logoutNavElement.style.display = 'block';
    sensorNavElement.style.display = 'block';
    loginNavElement.style.display = 'none';
    signedOutMessageElement.style.display ='none';
    dashboardElement.style.display = 'block';
    userDetailsElement.style.display ='block';
    userDetailsElement.innerHTML = user.email;

    // get user UID to get data from database
    var uid = user.uid;
    console.log(uid);

    // Database paths (with user UID)
    var dbPathBtn1 = 'zone/1';
    var dbPathBtn2 = 'zone/2';
    var dbPathBtn3 = 'zone/3';
    var dbPathBtn4 = 'zone/4';
    var dbPathBtn5 = 'zone/5';
    var dbPathBtn6 = 'zone/6';
    var dbPathBtn7 = 'zone/7';
    var dbPathBtn8 = 'zone/8';
    var dbPathBtn9 = 'zone/9';
    var dbPathBtn10 = 'zone/10';
    var dbPathBtn11 = 'zone/11';
    var dbPathBtn12 = 'zone/12';
    var dbPathBtn13 = 'zone/13';
    var dbPathBtnM = 'modeArrosage';
   
    var dbPathInput1 = 'heureDepart';
    var dbPathInput1b = 'heureDepart2e';
    var dbPathInput2 = 'duree/zone1';
    var dbPathInput2b = 'duree2e/zone1';
    var dbPathInput3 = 'duree/zone2';
    var dbPathInput3b = 'duree2e/zone2';
    var dbPathInput4 = 'duree/zone3';
    var dbPathInput4b = 'duree2e/zone3';
    var dbPathInput5 = 'duree/zone4';
    var dbPathInput5b = 'duree2e/zone4';
    var dbPathInput6 = 'duree/zone5';
    var dbPathInput7 = 'duree/zone6';
    var dbPathInput8 = 'duree/zone7';
    var dbPathInput9 = 'duree/zone8';
    var dbPathInput10 = 'duree/zone9';
    var dbPathInput11 = 'duree/zone10';
    var dbPathInput12 = 'duree/zone11';
    var dbPathInput13 = 'duree/zone12';
    var dbPathInput14 = 'duree/zone13';
    var dbPathInput6b = 'duree2e/zone5';
    var dbPathInput7b = 'duree2e/zone6';
    var dbPathInput8b = 'duree2e/zone7';
    var dbPathInput9b = 'duree2e/zone8';
    var dbPathInput10b = 'duree2e/zone9';
    var dbPathInput11b = 'duree2e/zone10';
    var dbPathInput12b = 'duree2e/zone11';
    var dbPathInput13b = 'duree2e/zone12';
    var dbPathInput14b = 'duree2e/zone13';
   
    var dbPathTempDTH = 'temperature';
    var dbPathHumiDTH = 'humidite';
    var dbPathPluie24h = 'pluie24h';
    var dbPathEtatRue = 'EtatSorties/data';
    var dbPathEtatCour = 'EtatSortiesRue/data';
   
    var dbPathNewTime =  'horloge/nouvelleH';
    var dbPathSubmitNT = 'horloge/submitNT';

    //////// Button 1 ////////
    var btn1State = document.getElementById('btn1State');
    var dbBtn1 = firebase.database().ref().child(dbPathBtn1);

    // Button 1 - Update state message on web page
    dbBtn1.on('value', snap => {
      if(snap.val()==1) {
        btn1State.innerText = "MARCHE";
      }
      else {
        btn1State.innerText = "ARRÊT";
      }
    });

    // Button 1 - Update database upon button click
    const btn1On = document.getElementById('btn1On');
    const btn1Off = document.getElementById('btn1Off');
    const gpio2Win = document.getElementById('gpio2');

    btn1On.onclick = () => {
      firebase.database().ref().child(dbPathBtn1).set(1);
      firebase.database().ref().child(dbPathBtn2).set(0);
      firebase.database().ref().child(dbPathBtn3).set(0);
      firebase.database().ref().child(dbPathBtn4).set(0);
      firebase.database().ref().child(dbPathBtn5).set(0);
      firebase.database().ref().child(dbPathBtn6).set(0);
      firebase.database().ref().child(dbPathBtn7).set(0);
      firebase.database().ref().child(dbPathBtn8).set(0);
      firebase.database().ref().child(dbPathBtn9).set(0);
      firebase.database().ref().child(dbPathBtn10).set(0);
      firebase.database().ref().child(dbPathBtn11).set(0);
      firebase.database().ref().child(dbPathBtn12).set(0);
      firebase.database().ref().child(dbPathBtn13).set(0);
    }
    btn1Off.onclick = () => {
      firebase.database().ref().child(dbPathBtn1).set(0);
    }

    //////// Button 2 ////////
    var btn2State = document.getElementById('btn2State');
    var dbBtn2 = firebase.database().ref().child(dbPathBtn2);

    // Button 2 - Update state message on web page
    dbBtn2.on('value', snap => {
      if(snap.val()==1) {
        btn2State.innerText = "MARCHE";
      }
      else {
        btn2State.innerText = "ARRÊT";
      }
    });

    // Button 2 - Update database upon button click
    const btn2On = document.getElementById('btn2On');
    const btn2Off = document.getElementById('btn2Off');

    btn2On.onclick = () => {
      firebase.database().ref().child(dbPathBtn2).set(1);
      firebase.database().ref().child(dbPathBtn1).set(0);
      firebase.database().ref().child(dbPathBtn3).set(0);
      firebase.database().ref().child(dbPathBtn4).set(0);
      firebase.database().ref().child(dbPathBtn5).set(0);
      firebase.database().ref().child(dbPathBtn6).set(0);
      firebase.database().ref().child(dbPathBtn7).set(0);
      firebase.database().ref().child(dbPathBtn8).set(0);
      firebase.database().ref().child(dbPathBtn9).set(0);
      firebase.database().ref().child(dbPathBtn10).set(0);
      firebase.database().ref().child(dbPathBtn11).set(0);
      firebase.database().ref().child(dbPathBtn12).set(0);
      firebase.database().ref().child(dbPathBtn13).set(0);
    }
    btn2Off.onclick = () => {
      firebase.database().ref().child(dbPathBtn2).set(0);
    }

    //////// Button 3 ////////
    var btn3State = document.getElementById('btn3State');
    var dbBtn3 = firebase.database().ref().child(dbPathBtn3);

    // Button 3 - Update state message on web page
    dbBtn3.on('value', snap => {
      if(snap.val()==1) {
        btn3State.innerText = "MARCHE";
      }
      else {
        btn3State.innerText = "ARRÊT";
      }
    });

    // Button 3 - Update database upon button click
    const btn3On = document.getElementById('btn3On');
    const btn3Off = document.getElementById('btn3Off');

    btn3On.onclick = () => {
      firebase.database().ref().child(dbPathBtn3).set(1);
      firebase.database().ref().child(dbPathBtn1).set(0);
      firebase.database().ref().child(dbPathBtn2).set(0);
      firebase.database().ref().child(dbPathBtn4).set(0);
      firebase.database().ref().child(dbPathBtn5).set(0);
      firebase.database().ref().child(dbPathBtn6).set(0);
      firebase.database().ref().child(dbPathBtn7).set(0);
      firebase.database().ref().child(dbPathBtn8).set(0);
      firebase.database().ref().child(dbPathBtn9).set(0);
      firebase.database().ref().child(dbPathBtn10).set(0);
      firebase.database().ref().child(dbPathBtn11).set(0);
      firebase.database().ref().child(dbPathBtn12).set(0);
      firebase.database().ref().child(dbPathBtn13).set(0);
    }
    btn3Off.onclick = () => {
      firebase.database().ref().child(dbPathBtn3).set(0);
    }

    //////// Button 4 ////////
    var btn4State = document.getElementById('btn4State');
    var dbBtn4 = firebase.database().ref().child(dbPathBtn4);

    // Button 4 - Update state message on web page
    dbBtn4.on('value', snap => {
      if(snap.val()==1) {
        btn4State.innerText = "MARCHE";
      }
      else {
        btn4State.innerText = "ARRÊT";
      }
    });

    // Button 4 - Update database upon button click
    const btn4On = document.getElementById('btn4On');
    const btn4Off = document.getElementById('btn4Off');

    btn4On.onclick = () => {
      firebase.database().ref().child(dbPathBtn4).set(1);
      firebase.database().ref().child(dbPathBtn1).set(0);
      firebase.database().ref().child(dbPathBtn2).set(0);
      firebase.database().ref().child(dbPathBtn3).set(0);
      firebase.database().ref().child(dbPathBtn5).set(0);
      firebase.database().ref().child(dbPathBtn6).set(0);
      firebase.database().ref().child(dbPathBtn7).set(0);
      firebase.database().ref().child(dbPathBtn8).set(0);
      firebase.database().ref().child(dbPathBtn9).set(0);
      firebase.database().ref().child(dbPathBtn10).set(0);
      firebase.database().ref().child(dbPathBtn11).set(0);
      firebase.database().ref().child(dbPathBtn12).set(0);
      firebase.database().ref().child(dbPathBtn13).set(0);
    }
    btn4Off.onclick = () => {
      firebase.database().ref().child(dbPathBtn4).set(0);
    }
   
    //////// Button 5 ////////
    var btn5State = document.getElementById('btn5State');
    var dbBtn5 = firebase.database().ref().child(dbPathBtn5);

     // Button 5 - Update state message on web page
    dbBtn5.on('value', snap => {
      if(snap.val()==1) {
        btn5State.innerText = "MARCHE";
      }
      else {
        btn5State.innerText = "ARRÊT";
      }
    });

    // Button 5 - Update database upon button click
    const btn5On = document.getElementById('btn5On');
    const btn5Off = document.getElementById('btn5Off');

    btn5On.onclick = () => {
      firebase.database().ref().child(dbPathBtn5).set(1);
      firebase.database().ref().child(dbPathBtn1).set(0);
      firebase.database().ref().child(dbPathBtn2).set(0);
      firebase.database().ref().child(dbPathBtn3).set(0);
      firebase.database().ref().child(dbPathBtn4).set(0);
      firebase.database().ref().child(dbPathBtn6).set(0);
      firebase.database().ref().child(dbPathBtn7).set(0);
      firebase.database().ref().child(dbPathBtn8).set(0);
      firebase.database().ref().child(dbPathBtn9).set(0);
      firebase.database().ref().child(dbPathBtn10).set(0);
      firebase.database().ref().child(dbPathBtn11).set(0);
      firebase.database().ref().child(dbPathBtn12).set(0);
      firebase.database().ref().child(dbPathBtn13).set(0);
    }
    btn5Off.onclick = () => {
      firebase.database().ref().child(dbPathBtn5).set(0);
    }

    //////// Button 6 ////////
    var btn6State = document.getElementById('btn6State');
    var dbBtn6 = firebase.database().ref().child(dbPathBtn6);

     // Button 6 - Update state message on web page
    dbBtn6.on('value', snap => {
      if(snap.val()==1) {
        btn6State.innerText = "MARCHE";
      }
      else {
        btn6State.innerText = "ARRÊT";
      }
    });

    // Button 6 - Update database upon button click
    const btn6On = document.getElementById('btn6On');
    const btn6Off = document.getElementById('btn6Off');

    btn6On.onclick = () => {
      firebase.database().ref().child(dbPathBtn6).set(1);
      firebase.database().ref().child(dbPathBtn1).set(0);
      firebase.database().ref().child(dbPathBtn2).set(0);
      firebase.database().ref().child(dbPathBtn3).set(0);
      firebase.database().ref().child(dbPathBtn4).set(0);
      firebase.database().ref().child(dbPathBtn5).set(0);
      firebase.database().ref().child(dbPathBtn7).set(0);
      firebase.database().ref().child(dbPathBtn8).set(0);
      firebase.database().ref().child(dbPathBtn9).set(0);
      firebase.database().ref().child(dbPathBtn10).set(0);
      firebase.database().ref().child(dbPathBtn11).set(0);
      firebase.database().ref().child(dbPathBtn12).set(0);
      firebase.database().ref().child(dbPathBtn13).set(0);
    }
    btn6Off.onclick = () => {
      firebase.database().ref().child(dbPathBtn6).set(0);
    }
   
    //////// Button 7 ////////
    var btn7State = document.getElementById('btn7State');
    var dbBtn7 = firebase.database().ref().child(dbPathBtn7);

     // Button 7 - Update state message on web page
    dbBtn7.on('value', snap => {
      if(snap.val()==1) {
        btn7State.innerText = "MARCHE";
      }
      else {
        btn7State.innerText = "ARRÊT";
      }
    });

    // Button 7 - Update database upon button click
    const btn7On = document.getElementById('btn7On');
    const btn7Off = document.getElementById('btn7Off');

    btn7On.onclick = () => {
      firebase.database().ref().child(dbPathBtn7).set(1);
      firebase.database().ref().child(dbPathBtn1).set(0);
      firebase.database().ref().child(dbPathBtn2).set(0);
      firebase.database().ref().child(dbPathBtn3).set(0);
      firebase.database().ref().child(dbPathBtn4).set(0);
      firebase.database().ref().child(dbPathBtn5).set(0);
      firebase.database().ref().child(dbPathBtn6).set(0);
      firebase.database().ref().child(dbPathBtn8).set(0);
      firebase.database().ref().child(dbPathBtn9).set(0);
      firebase.database().ref().child(dbPathBtn10).set(0);
      firebase.database().ref().child(dbPathBtn11).set(0);
      firebase.database().ref().child(dbPathBtn12).set(0);
      firebase.database().ref().child(dbPathBtn13).set(0);
    }
    btn7Off.onclick = () => {
      firebase.database().ref().child(dbPathBtn7).set(0);
    }
   
    //////// Button 8 ////////
    var btn8State = document.getElementById('btn8State');
    var dbBtn8 = firebase.database().ref().child(dbPathBtn8);

     // Button 8 - Update state message on web page
    dbBtn8.on('value', snap => {
      if(snap.val()==1) {
        btn8State.innerText = "MARCHE";
      }
      else {
        btn8State.innerText = "ARRÊT";
      }
    });

    // Button 8 - Update database upon button click
    const btn8On = document.getElementById('btn8On');
    const btn8Off = document.getElementById('btn8Off');

    btn8On.onclick = () => {
      firebase.database().ref().child(dbPathBtn8).set(1);
      firebase.database().ref().child(dbPathBtn1).set(0);
      firebase.database().ref().child(dbPathBtn2).set(0);
      firebase.database().ref().child(dbPathBtn3).set(0);
      firebase.database().ref().child(dbPathBtn4).set(0);
      firebase.database().ref().child(dbPathBtn6).set(0);
      firebase.database().ref().child(dbPathBtn7).set(0);
      firebase.database().ref().child(dbPathBtn5).set(0);
      firebase.database().ref().child(dbPathBtn9).set(0);
      firebase.database().ref().child(dbPathBtn10).set(0);
      firebase.database().ref().child(dbPathBtn11).set(0);
      firebase.database().ref().child(dbPathBtn12).set(0);
      firebase.database().ref().child(dbPathBtn13).set(0);
    }
    btn8Off.onclick = () => {
      firebase.database().ref().child(dbPathBtn8).set(0);
    }
   
    //////// Button 9 ////////
    var btn9State = document.getElementById('btn9State');
    var dbBtn9 = firebase.database().ref().child(dbPathBtn9);

     // Button 9 - Update state message on web page
    dbBtn9.on('value', snap => {
      if(snap.val()==1) {
        btn9State.innerText = "MARCHE";
      }
      else {
        btn9State.innerText = "ARRÊT";
      }
    });

    // Button 9 - Update database upon button click
    const btn9On = document.getElementById('btn9On');
    const btn9Off = document.getElementById('btn9Off');

    btn9On.onclick = () => {
      firebase.database().ref().child(dbPathBtn9).set(1);
      firebase.database().ref().child(dbPathBtn1).set(0);
      firebase.database().ref().child(dbPathBtn2).set(0);
      firebase.database().ref().child(dbPathBtn3).set(0);
      firebase.database().ref().child(dbPathBtn4).set(0);
      firebase.database().ref().child(dbPathBtn6).set(0);
      firebase.database().ref().child(dbPathBtn7).set(0);
      firebase.database().ref().child(dbPathBtn8).set(0);
      firebase.database().ref().child(dbPathBtn5).set(0);
      firebase.database().ref().child(dbPathBtn10).set(0);
      firebase.database().ref().child(dbPathBtn11).set(0);
      firebase.database().ref().child(dbPathBtn12).set(0);
      firebase.database().ref().child(dbPathBtn13).set(0);
    }
    btn9Off.onclick = () => {
      firebase.database().ref().child(dbPathBtn9).set(0);
    }
   
    //////// Button 10 ////////
    var btn10State = document.getElementById('btn10State');
    var dbBtn10 = firebase.database().ref().child(dbPathBtn10);

     // Button 10 - Update state message on web page
    dbBtn10.on('value', snap => {
      if(snap.val()==1) {
        btn10State.innerText = "MARCHE";
      }
      else {
        btn10State.innerText = "ARRÊT";
      }
    });

    // Button 10 - Update database upon button click
    const btn10On = document.getElementById('btn10On');
    const btn10Off = document.getElementById('btn10Off');

    btn10On.onclick = () => {
      firebase.database().ref().child(dbPathBtn10).set(1);
      firebase.database().ref().child(dbPathBtn1).set(0);
      firebase.database().ref().child(dbPathBtn2).set(0);
      firebase.database().ref().child(dbPathBtn3).set(0);
      firebase.database().ref().child(dbPathBtn4).set(0);
      firebase.database().ref().child(dbPathBtn6).set(0);
      firebase.database().ref().child(dbPathBtn7).set(0);
      firebase.database().ref().child(dbPathBtn8).set(0);
      firebase.database().ref().child(dbPathBtn9).set(0);
      firebase.database().ref().child(dbPathBtn5).set(0);
      firebase.database().ref().child(dbPathBtn11).set(0);
      firebase.database().ref().child(dbPathBtn12).set(0);
      firebase.database().ref().child(dbPathBtn13).set(0);
    }
    btn10Off.onclick = () => {
      firebase.database().ref().child(dbPathBtn10).set(0);
    }
   
    //////// Button 11 ////////
    var btn11State = document.getElementById('btn11State');
    var dbBtn11 = firebase.database().ref().child(dbPathBtn11);

     // Button 11 - Update state message on web page
    dbBtn11.on('value', snap => {
      if(snap.val()==1) {
        btn11State.innerText = "MARCHE";
      }
      else {
        btn11State.innerText = "ARRÊT";
      }
    });

    // Button 11 - Update database upon button click
    const btn11On = document.getElementById('btn11On');
    const btn11Off = document.getElementById('btn11Off');

    btn11On.onclick = () => {
      firebase.database().ref().child(dbPathBtn11).set(1);
      firebase.database().ref().child(dbPathBtn1).set(0);
      firebase.database().ref().child(dbPathBtn2).set(0);
      firebase.database().ref().child(dbPathBtn3).set(0);
      firebase.database().ref().child(dbPathBtn4).set(0);
      firebase.database().ref().child(dbPathBtn6).set(0);
      firebase.database().ref().child(dbPathBtn7).set(0);
      firebase.database().ref().child(dbPathBtn8).set(0);
      firebase.database().ref().child(dbPathBtn9).set(0);
      firebase.database().ref().child(dbPathBtn5).set(0);
      firebase.database().ref().child(dbPathBtn10).set(0);
      firebase.database().ref().child(dbPathBtn12).set(0);
      firebase.database().ref().child(dbPathBtn13).set(0);
    }
    btn11Off.onclick = () => {
      firebase.database().ref().child(dbPathBtn11).set(0);
    }
   
    //////// Button 12 ////////
    var btn12State = document.getElementById('btn12State');
    var dbBtn12 = firebase.database().ref().child(dbPathBtn12);

     // Button 12 - Update state message on web page
    dbBtn12.on('value', snap => {
      if(snap.val()==1) {
        btn12State.innerText = "MARCHE";
      }
      else {
        btn12State.innerText = "ARRÊT";
      }
    });

    // Button 12 - Update database upon button click
    const btn12On = document.getElementById('btn12On');
    const btn12Off = document.getElementById('btn12Off');

    btn12On.onclick = () => {
      firebase.database().ref().child(dbPathBtn12).set(1);
      firebase.database().ref().child(dbPathBtn1).set(0);
      firebase.database().ref().child(dbPathBtn2).set(0);
      firebase.database().ref().child(dbPathBtn3).set(0);
      firebase.database().ref().child(dbPathBtn4).set(0);
      firebase.database().ref().child(dbPathBtn6).set(0);
      firebase.database().ref().child(dbPathBtn7).set(0);
      firebase.database().ref().child(dbPathBtn8).set(0);
      firebase.database().ref().child(dbPathBtn9).set(0);
      firebase.database().ref().child(dbPathBtn5).set(0);
      firebase.database().ref().child(dbPathBtn11).set(0);
      firebase.database().ref().child(dbPathBtn10).set(0);
      firebase.database().ref().child(dbPathBtn13).set(0);
    }
    btn12Off.onclick = () => {
      firebase.database().ref().child(dbPathBtn12).set(0);
    }
   
    //////// Button 13 ////////
    var btn13State = document.getElementById('btn13State');
    var dbBtn13 = firebase.database().ref().child(dbPathBtn13);

     // Button 10 - Update state message on web page
    dbBtn13.on('value', snap => {
      if(snap.val()==1) {
        btn13State.innerText = "MARCHE";
      }
      else {
        btn13State.innerText = "ARRÊT";
      }
    });

    // Button 13 - Update database upon button click
    const btn13On = document.getElementById('btn13On');
    const btn13Off = document.getElementById('btn13Off');

    btn13On.onclick = () => {
      firebase.database().ref().child(dbPathBtn13).set(1);
      firebase.database().ref().child(dbPathBtn1).set(0);
      firebase.database().ref().child(dbPathBtn2).set(0);
      firebase.database().ref().child(dbPathBtn3).set(0);
      firebase.database().ref().child(dbPathBtn4).set(0);
      firebase.database().ref().child(dbPathBtn6).set(0);
      firebase.database().ref().child(dbPathBtn7).set(0);
      firebase.database().ref().child(dbPathBtn8).set(0);
      firebase.database().ref().child(dbPathBtn9).set(0);
      firebase.database().ref().child(dbPathBtn5).set(0);
      firebase.database().ref().child(dbPathBtn11).set(0);
      firebase.database().ref().child(dbPathBtn12).set(0);
      firebase.database().ref().child(dbPathBtn10).set(0);
    }
    btn13Off.onclick = () => {
      firebase.database().ref().child(dbPathBtn13).set(0);
    }

        ////////  Button 2 - GPIO 12 ////////
    var btnMState = document.getElementById('btnMState');
    var dbBtnM = firebase.database().ref().child(dbPathBtnM);

    // Button 2 - GPIO 12 - Update state message on web page
    dbBtnM.on('value', snap => {
      if(snap.val()==2) {
        btnMState.innerText = "ANNULATION";
        parametres.style.display = "none";
        modeManuel.style.display = "none";
      }
      else {
      if(snap.val()==1) {
        btnMState.innerText = "MANUEL";
        parametres.style.display = "none";
        modeManuel.style.display = "block";
      }
      else {
        btnMState.innerText = "AUTOMATIQUE";
        parametres.style.display = "block";
        modeManuel.style.display = "none";
      } }
    });
    // Button Mode - GPIO Mode - Update database upon button click
    const btnMAnn = document.getElementById('btnMAnn');
    const btnMOn = document.getElementById('btnManu');
    const btnMOff = document.getElementById('btnAuto');

    btnMAnn.onclick = () => {
      firebase.database().ref().child(dbPathBtnM).set(2);
      firebase.database().ref().child(dbPathBtn1).set(0);
      firebase.database().ref().child(dbPathBtn2).set(0);
      firebase.database().ref().child(dbPathBtn3).set(0);
      firebase.database().ref().child(dbPathBtn4).set(0);
      firebase.database().ref().child(dbPathBtn5).set(0);
      firebase.database().ref().child(dbPathBtn6).set(0);
      firebase.database().ref().child(dbPathBtn7).set(0);
      firebase.database().ref().child(dbPathBtn8).set(0);
      firebase.database().ref().child(dbPathBtn9).set(0);
      firebase.database().ref().child(dbPathBtn10).set(0);
      firebase.database().ref().child(dbPathBtn11).set(0);
      firebase.database().ref().child(dbPathBtn12).set(0);
      firebase.database().ref().child(dbPathBtn13).set(0);
    }
    btnMOn.onclick = () => {
      firebase.database().ref().child(dbPathBtnM).set(1);
    }
    btnMOff.onclick = () => {
      firebase.database().ref().child(dbPathBtnM).set(0);
      firebase.database().ref().child(dbPathBtn1).set(0);
      firebase.database().ref().child(dbPathBtn2).set(0);
      firebase.database().ref().child(dbPathBtn3).set(0);
      firebase.database().ref().child(dbPathBtn4).set(0);
      firebase.database().ref().child(dbPathBtn5).set(0);
      firebase.database().ref().child(dbPathBtn6).set(0);
      firebase.database().ref().child(dbPathBtn7).set(0);
      firebase.database().ref().child(dbPathBtn8).set(0);
      firebase.database().ref().child(dbPathBtn9).set(0);
      firebase.database().ref().child(dbPathBtn10).set(0);
      firebase.database().ref().child(dbPathBtn11).set(0);
      firebase.database().ref().child(dbPathBtn12).set(0);
      firebase.database().ref().child(dbPathBtn13).set(0);
    }


    //////// Input 1 - Heure du 1er arrosage ////////
    var dbInput1 = firebase.database().ref().child(dbPathInput1);
    const input1 = document.getElementById('input1');
    const input1Text = document.getElementById('input1Text');
    // Input 1 - Update input text on web page
    dbInput1.on('value', snap => {
      input1Text.innerText = snap.val();
      input1.defaultValue = snap.val();
    });
    // Input 1 - Update database input value
    input1.onchange = () => {
      firebase.database().ref().child(dbPathInput1).set(input1.value);
    }
    //////// Input 1 - Heure du 1er arrosage ////////
    var dbInput1b = firebase.database().ref().child(dbPathInput1b);
    const input1b = document.getElementById('input1b');
    const input1bText = document.getElementById('input1bText');
    // Input 1b - Update input text on web page
    dbInput1b.on('value', snap => {
      input1bText.innerText = snap.val();
      input1b.defaultValue = snap.val();
    });
    // Input 1 - Update database input value
    input1b.onchange = () => {
      firebase.database().ref().child(dbPathInput1b).set(input1b.value);
    }
    //////// Input 2 - Durée zone 1////////
    var dbInput2 = firebase.database().ref().child(dbPathInput2);
    const input2 = document.getElementById('input2');
    const input2Text = document.getElementById('input2Text');
    // Input 2 - Update input text on web page
    dbInput2.on('value', snap => {
      input2Text.innerText = snap.val();
      input2.defaultValue = snap.val();
    });
    // Input 2 - Update database input value
    input2.onchange = () => {
      firebase.database().ref().child(dbPathInput2).set(input2.value);
    }
   
    //////// Input 2b - Durée zone 1 - 2e arrosage ////////
    var dbInput2b = firebase.database().ref().child(dbPathInput2b);
    const input2b = document.getElementById('input2b');
    const input2bText = document.getElementById('input2bText');
    // Input 2b - Update input text on web page
    dbInput2b.on('value', snap => {
      input2bText.innerText = snap.val();
      input2b.defaultValue = snap.val();
    });
    // Input 2b - Update database input value
    input2b.onchange = () => {
      firebase.database().ref().child(dbPathInput2b).set(input2b.value);
    }
   
    //////// Input 3 - Durée zone 2 ////////
    var dbInput3 = firebase.database().ref().child(dbPathInput3);
    const input3 = document.getElementById('input3');
    const input3Text = document.getElementById('input3Text');
    // Input 3 - Update input text on web page
    dbInput3.on('value', snap => {
      input3Text.innerText = snap.val();
      input3.defaultValue = snap.val();
    });
    // Input 3 - Update database input value
    input3.onchange = () => {
      firebase.database().ref().child(dbPathInput3).set(input3.value);
    }
    //////// Input 3b - Durée zone 2 - 2e arrosage ////////
    var dbInput3b = firebase.database().ref().child(dbPathInput3b);
    const input3b = document.getElementById('input3b');
    const input3bText = document.getElementById('input3bText');
    // Input 3b - Update input text on web page
    dbInput3b.on('value', snap => {
      input3bText.innerText = snap.val();
      input3b.defaultValue = snap.val();
    });
    // Input 3b - Update database input value
    input3b.onchange = () => {
      firebase.database().ref().child(dbPathInput3b).set(input3b.value);
    }
    //////// Input 4 - Durée zone 3 ////////
    var dbInput4 = firebase.database().ref().child(dbPathInput4);
    const input4 = document.getElementById('input4');
    const input4Text = document.getElementById('input4Text');
    // Input 4 - Update input text on web page
    dbInput4.on('value', snap => {
      input4Text.innerText = snap.val();
      input4.defaultValue = snap.val();
    });
    // Input 4 - Update database input value
    input4.onchange = () => {
      firebase.database().ref().child(dbPathInput4).set(input4.value);
    }
      //////// Input 4b - Durée zone 3 - 2e arrosage ////////
    var dbInput4b = firebase.database().ref().child(dbPathInput4b);
    const input4b = document.getElementById('input4b');
    const input4bText = document.getElementById('input4bText');
    // Input 4b - Update input text on web page
    dbInput4b.on('value', snap => {
      input4bText.innerText = snap.val();
      input4b.defaultValue = snap.val();
    });
    // Input 4b - Update database input value
    input4b.onchange = () => {
      firebase.database().ref().child(dbPathInput4b).set(input4b.value);
    }
    //////// Input 5 - Durée zone 4 ////////
    var dbInput5 = firebase.database().ref().child(dbPathInput5);
    const input5 = document.getElementById('input5');
    const input5Text = document.getElementById('input5Text');
    // Input 5 - Update input text on web page
    dbInput5.on('value', snap => {
      input5Text.innerText = snap.val();
      input5.defaultValue = snap.val();
    });
    // Input 5 - Update database input value
    input5.onchange = () => {
      firebase.database().ref().child(dbPathInput5).set(input5.value);
    }  
    //////// Input 5b - Durée zone 4 - 2e arrosage ////////
    var dbInput5b = firebase.database().ref().child(dbPathInput5b);
    const input5b = document.getElementById('input5b');
    const input5bText = document.getElementById('input5bText');
    // Input 5b - Update input text on web page
    dbInput5b.on('value', snap => {
      input5bText.innerText = snap.val();
      input5b.defaultValue = snap.val();
    });
    // Input 5b - Update database input value
    input5b.onchange = () => {
      firebase.database().ref().child(dbPathInput5b).set(input5b.value);
    }
    //////// Input 6 - Durée zone 5 ////////
    var dbInput6 = firebase.database().ref().child(dbPathInput6);
    const input6 = document.getElementById('input6');
    const input6Text = document.getElementById('input6Text');
    // Input 6 - Update input text on web page
    dbInput6.on('value', snap => {
      input6Text.innerText = snap.val();
      input6.defaultValue = snap.val();
    });
    // Input 6 - Update database input value
    input6.onchange = () => {
      firebase.database().ref().child(dbPathInput6).set(input6.value);
    }
    //////// Input 6b - Durée zone 5 - 2e arrosage ////////
    var dbInput6b = firebase.database().ref().child(dbPathInput6b);
    const input6b = document.getElementById('input6b');
    const input6bText = document.getElementById('input6bText');
    // Input 6b - Update input text on web page
    dbInput6b.on('value', snap => {
      input6bText.innerText = snap.val();
      input6b.defaultValue = snap.val();
    });
    // Input 6b - Update database input value
    input6b.onchange = () => {
      firebase.database().ref().child(dbPathInput6b).set(input6b.value);
    }
    //////// Input 7 - Durée zone 6 ////////
    var dbInput7 = firebase.database().ref().child(dbPathInput7);
    const input7 = document.getElementById('input7');
    const input7Text = document.getElementById('input7Text');
    // Input 7 - Update input text on web page
    dbInput7.on('value', snap => {
      input7Text.innerText = snap.val();
      input7.defaultValue = snap.val();
    });
    // Input 7 - Update database input value
    input7.onchange = () => {
      firebase.database().ref().child(dbPathInput7).set(input7.value);
    }
    //////// Input 7b - Durée zone 6 - 2e arrosage ////////
    var dbInput7b = firebase.database().ref().child(dbPathInput7b);
    const input7b = document.getElementById('input7b');
    const input7bText = document.getElementById('input7bText');
    // Input 7b - Update input text on web page
    dbInput7b.on('value', snap => {
      input7bText.innerText = snap.val();
      input7b.defaultValue = snap.val();
    });
    // Input 7b - Update database input value
    input7b.onchange = () => {
      firebase.database().ref().child(dbPathInput7b).set(input7b.value);
    }
        //////// Input 8 - Durée zone 7 ////////
    var dbInput8 = firebase.database().ref().child(dbPathInput8);
    const input8 = document.getElementById('input8');
    const input8Text = document.getElementById('input8Text');
    // Input 8 - Update input text on web page
    dbInput8.on('value', snap => {
      input8Text.innerText = snap.val();
      input8.defaultValue = snap.val();
    });
    // Input 8 - Update database input value
    input8.onchange = () => {
      firebase.database().ref().child(dbPathInput8).set(input8.value);
    }
    //////// Input 8b - Durée zone 7 - 2e arrosage ////////
    var dbInput8b = firebase.database().ref().child(dbPathInput8b);
    const input8b = document.getElementById('input8b');
    const input8bText = document.getElementById('input8bText');
    // Input 8b - Update input text on web page
    dbInput8b.on('value', snap => {
      input8bText.innerText = snap.val();
      input8b.defaultValue = snap.val();
    });
    // Input 8b - Update database input value
    input8b.onchange = () => {
      firebase.database().ref().child(dbPathInput8b).set(input8b.value);
    }
        //////// Input 9 - Durée zone 8 ////////
    var dbInput9 = firebase.database().ref().child(dbPathInput9);
    const input9 = document.getElementById('input9');
    const input9Text = document.getElementById('input9Text');
    // Input 9 - Update input text on web page
    dbInput9.on('value', snap => {
      input9Text.innerText = snap.val();
      input9.defaultValue = snap.val();
    });
    // Input 9 - Update database input value
    input9.onchange = () => {
      firebase.database().ref().child(dbPathInput9).set(input9.value);
    }
    //////// Input 9b - Durée zone 8 - 2e arrosage ////////
    var dbInput9b = firebase.database().ref().child(dbPathInput9b);
    const input9b = document.getElementById('input9b');
    const input9bText = document.getElementById('input9bText');
    // Input 9b - Update input text on web page
    dbInput9b.on('value', snap => {
      input9bText.innerText = snap.val();
      input9b.defaultValue = snap.val();
    });
    // Input 9b - Update database input value
    input9b.onchange = () => {
      firebase.database().ref().child(dbPathInput9b).set(input9b.value);
    }
        //////// Input 10 - Durée zone 9 ////////
    var dbInput10 = firebase.database().ref().child(dbPathInput10);
    const input10 = document.getElementById('input10');
    const input10Text = document.getElementById('input10Text');
    // Input 10 - Update input text on web page
    dbInput10.on('value', snap => {
      input10Text.innerText = snap.val();
      input10.defaultValue = snap.val();
    });
    // Input 10 - Update database input value
    input10.onchange = () => {
      firebase.database().ref().child(dbPathInput10).set(input10.value);
    }
    //////// Input 10b - Durée zone 9 - 2e arrosage ////////
    var dbInput10b = firebase.database().ref().child(dbPathInput10b);
    const input10b = document.getElementById('input10b');
    const input10bText = document.getElementById('input10bText');
    // Input 10b - Update input text on web page
    dbInput10b.on('value', snap => {
      input10bText.innerText = snap.val();
      input10b.defaultValue = snap.val();
    });
    // Input 10b - Update database input value
    input10b.onchange = () => {
      firebase.database().ref().child(dbPathInput10b).set(input10b.value);
    }
    //////// Input 13 - Durée zone 12 ////////
    var dbInput13 = firebase.database().ref().child(dbPathInput13);
    const input13 = document.getElementById('input13');
    const input13Text = document.getElementById('input13Text');
    // Input 13 - Update input text on web page
    dbInput13.on('value', snap => {
      input13Text.innerText = snap.val();
      input13.defaultValue = snap.val();
    });
    // Input 13 - Update database input value
    input13.onchange = () => {
      firebase.database().ref().child(dbPathInput13).set(input13.value);
    }
    //////// Input 13b - Durée zone 12 - 2e arrosage ////////
    var dbInput13b = firebase.database().ref().child(dbPathInput13b);
    const input13b = document.getElementById('input13b');
    const input13bText = document.getElementById('input13bText');
    // Input 13b - Update input text on web page
    dbInput13b.on('value', snap => {
      input13bText.innerText = snap.val();
      input13b.defaultValue = snap.val();
    });
    // Input 13b - Update database input value
    input13b.onchange = () => {
      firebase.database().ref().child(dbPathInput13b).set(input13b.value);
    }
    //////// Input 11 - Durée zone 10 ////////
    var dbInput11 = firebase.database().ref().child(dbPathInput11);
    const input11 = document.getElementById('input11');
    const input11Text = document.getElementById('input11Text');
    // Input 11 - Update input text on web page
    dbInput11.on('value', snap => {
      input11Text.innerText = snap.val();
      input11.defaultValue = snap.val();
    });
    // Input 11 - Update database input value
    input11.onchange = () => {
      firebase.database().ref().child(dbPathInput11).set(input11.value);
    }
    //////// Input 11b - Durée zone 10 - 2e arrosage ////////
    var dbInput11b = firebase.database().ref().child(dbPathInput11b);
    const input11b = document.getElementById('input11b');
    const input11bText = document.getElementById('input11bText');
    // Input 11b - Update input text on web page
    dbInput11b.on('value', snap => {
      input11bText.innerText = snap.val();
      input11b.defaultValue = snap.val();
    });
    // Input 11b - Update database input value
    input11b.onchange = () => {
      firebase.database().ref().child(dbPathInput11b).set(input11b.value);
    }
    //////// Input 12 - Durée zone 11 ////////
    var dbInput12 = firebase.database().ref().child(dbPathInput12);
    const input12 = document.getElementById('input12');
    const input12Text = document.getElementById('input12Text');
    // Input 12 - Update input text on web page
    dbInput12.on('value', snap => {
      input12Text.innerText = snap.val();
      input12.defaultValue = snap.val();
    });
    // Input 12 - Update database input value
    input12.onchange = () => {
      firebase.database().ref().child(dbPathInput12).set(input12.value);
    }
    //////// Input 12b - Durée zone 11 - 2e arrosage ////////
    var dbInput12b = firebase.database().ref().child(dbPathInput12b);
    const input12b = document.getElementById('input12b');
    const input12bText = document.getElementById('input12bText');
    // Input 12b - Update input text on web page
    dbInput12b.on('value', snap => {
      input12bText.innerText = snap.val();
      input12b.defaultValue = snap.val();
    });
    // Input 12b - Update database input value
    input12b.onchange = () => {
      firebase.database().ref().child(dbPathInput12b).set(input12b.value);
    }
    //////// Input 14 - Durée zone 13 ////////
    var dbInput14 = firebase.database().ref().child(dbPathInput14);
    const input14 = document.getElementById('input14');
    const input14Text = document.getElementById('input14Text');
    // Input 14 - Update input text on web page
    dbInput14.on('value', snap => {
      input14Text.innerText = snap.val();
      input14.defaultValue = snap.val();
    });
    // Input 14 - Update database input value
    input14.onchange = () => {
      firebase.database().ref().child(dbPathInput14).set(input14.value);
    }
    //////// Input 14b - Durée zone 13 - 2e arrosage ////////
    var dbInput14b = firebase.database().ref().child(dbPathInput14b);
    const input14b = document.getElementById('input14b');
    const input14bText = document.getElementById('input14bText');
    // Input 14b - Update input text on web page
    dbInput14b.on('value', snap => {
      input14bText.innerText = snap.val();
      input14b.defaultValue = snap.val();
    });
    // Input 14b - Update database input value
    input14b.onchange = () => {
      firebase.database().ref().child(dbPathInput14b).set(input14b.value);
    }
   
    //////// Temperature ////////
    var dbtempDHT = firebase.database().ref().child(dbPathTempDTH);
    const inputTempDTHText = document.getElementById('senTempDHT');
    // Input 14 - Update input text on web page
    dbtempDHT.on('value', snap => {
      inputTempDTHText.innerText = snap.val();
      //input.defaultValue = snap.val();
    });
   
    //////// Humidité ////////
    var dbhumiDHT = firebase.database().ref().child(dbPathHumiDTH);
    const inputHumiDTHText = document.getElementById('senHumiDHT');
    // Input 14 - Update input text on web page
    dbhumiDHT.on('value', snap => {
      inputHumiDTHText.innerText = snap.val();
      //input.defaultValue = snap.val();
    });
   
    //////// Pluie 24h ////////
    var dbPluie24h = firebase.database().ref().child(dbPathPluie24h);
    const inputPluie24hText = document.getElementById('senPluie24h');
    // Input 14 - Update input text on web page
    dbPluie24h.on('value', snap => {
      inputPluie24hText.innerText = snap.val();
      //input.defaultValue = snap.val();
    });
   
     //////// Etat cote rue ////////
    var dbEtatRue = firebase.database().ref().child(dbPathEtatRue);
    const inputEtatRueText = document.getElementById('senEtatRue');
    // Input 14 - Update input text on web page
    dbEtatRue.on('value', snap => {
        switch (snap.val()) {
        case 0:
            inputEtatRueText.innerText = "Aucun arrosage";
            break;
        case 1:
            inputEtatRueText.innerText = "Pelouse est";
            break;
        case 2:
            inputEtatRueText.innerText = "Pelouse centre";
            break;
        case 4:
            inputEtatRueText.innerText = "Pelouse ouest";
            break;
        case 8:
            inputEtatRueText.innerText = "Parterre haut";
            break;
        case 16:
            inputEtatRueText.innerText = "Parterre bas";
            break;
        case 32:
            inputEtatRueText.innerText = "Parterre ilot";
            break;
        default:
      inputEtatRueText.innerText = snap.val();
      }
      //input.defaultValue = snap.val();
    });
   
     //////// Etat cote rue ////////
    var dbEtatCour = firebase.database().ref().child(dbPathEtatCour);
    const inputEtatCourText = document.getElementById('senEtatCour');
    // Input 14 - Update input text on web page
    dbEtatCour.on('value', snap => {
        switch (snap.val()) {
        case 0:
            inputEtatCourText.innerText = "Aucun arrosage";
            break;
        case 1:
            inputEtatCourText.innerText = "Pelouse centre";
            break;
        case 2:
            inputEtatCourText.innerText = "Pelouse ouest";
            break;
        case 4:
            inputEtatCourText.innerText = "Parterre perron";
            break;
        case 8:
            inputEtatCourText.innerText = "Parterre cabanon";
            break;
        case 16:
            inputEtatCourText.innerText = "Parterre passage";
            break;
        case 32:
            inputEtatCourText.innerText = "Parterre balançoire";
            break;
        case 64:
             inputEtatCourText.innerText = "Haie de cèdre";
             break;
        default:
      inputEtatCourText.innerText = snap.val();
      }
      //input.defaultValue = snap.val();
    });

        const inputHM = document.getElementById("heure");
        inputHM.onchange = () => {
            firebase.database().ref().child(dbPathNewTime).set(inputHM.value);
            //firebase.database().ref().child(dbPathSubmitNT).set(1);
        }
   
   
  // if user is logged out
  } else{
    // toggle UI elements
    logoutNavElement.style.display = 'none';
    sensorNavElement.style.display = 'none';
    loginNavElement.style.display = 'block';
    signedOutMessageElement.style.display ='block';
    dashboardElement.style.display = 'none';
    userDetailsElement.style.display ='none';
  }
}
