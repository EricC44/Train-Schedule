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
//This is our current time 
window.onload = setInterval(function(start) {
document.querySelector("#time").innerHTML = moment().format("hh:mm a")
console.log(start);
}, 1000);

//This is the form listening for the submit button.
document.querySelector("#train-stuff").addEventListener("submit" , function(event) {
    event.preventDefault();
    //These are the values that are trying to be submitted to the form
    var trainColor = document.querySelector("#train-color-input").value.trim();
    var trainLine = document.querySelector("#train-line-input").value.trim();
    var firstTrain = document.querySelector("#first-train-input").value.trim();
    var frequency = document.querySelector("#frequency-input").value.trim();

    console.log(trainColor , trainLine , firstTrain , frequency);
    //This uses the reference of the database and pushes the values
    database.ref().push({
        color: trainColor,
        trainline: trainLine,
        firstTrain: firstTrain,
        frequency: frequency,
    });
    //This should clear out the values of the form
    document.querySelector("#train-color-input").value = "";
    document.querySelector("#train-line-input").value = "";
    document.querySelector("#first-train-input").value = "";
    document.querySelector("#frequency-input").value = "";

    return false;

});

//Checks firebase for past values and initially loades them.
database.ref().addEventListener("add_child" , function(childSnapshot, prev) {
  var trainColor = childSnapshot.value.formtrainColor;
  var trainLine = childSnapshot.value.formtrainLine;
  var firstTrain = childSnapshot.value.formfirstTrain;
  var frequency = childSnapshot.value.formfrequency;
});  