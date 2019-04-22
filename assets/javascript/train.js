//Set the initial index value to 0

var index = 0;

//This is to initialize firebase 
var config = {
    apiKey: "AIzaSyDmbrJY8SYIoakszgztcjviDIpcPrqXPnY",
    authDomain: "train-schedule-bart.firebaseapp.com",
    databaseURL: "https://train-schedule-bart.firebaseio.com",
    projectId: "train-schedule-bart",
    storageBucket: "train-schedule-bart.appspot.com",
    messagingSenderId: "145812291444"
  };
  firebase.initializeApp(config);

var database = firebase.database();

