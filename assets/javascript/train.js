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
//This is the form listening for the submit button.
document.querySelector("#train-stuff").addEventListener("submit" , function(event) {
    event.preventDefault();
    //These are the values that are trying to be submitted to the form
    var trainColor = document.querySelector("#train-color-input").value.trim();
    var trainLine = document.querySelector("#train-line-input").value.trim();
    var firstTrain = document.querySelector("#first-train-input").value.trim();
    var frequency = document.querySelector("#frequency-input").value.trim();

    console.log(trainColor , trainLine , firstTrain , frequency);














});

