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
//console.log(start);
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
        trainLine: trainLine,
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
database.ref().on("child_added" , function(childSnapshot) {
  var trainColor = childSnapshot.value.color;
  var trainLine = childSnapshot.value.trainLine;
  var firstTrain = childSnapshot.value.firstTrain;
  var frequency = childSnapshot.value.frequency;

  console.log(trainColor);
  console.log(trainLine);
  console.log(frequency);


  
  //This is to get the first time, I also counted back 10 days before the "current" time.
  var firstTrainFreq = moment(firstTrain , "hh:mm").subtract(10 , "days");
  console.log(firstTrainFreq);
  //This is just a reference for the current time so we can do conversions
  var currentTime = moment();
  console.log("The current time is: " + moment(currentTime).format("hh:mm a"));
  //working on the timer
  document.querySelector("#time").innerText = currentTime.format("hh:mm a");
  //diffence between the train frequency and the first train
  var timeDiff = moment().diff(moment(firstTrainFreq) , "minutes");
  console.log("Time difference is " + timeDiff);
  //our remainder in the calculation.
  var Remainder = timeDiff % frequency;
  console.log(Remainder);

  var minutesAway = frequency - Remainder;
  console.log(minutesAway);

  var nextTrain = moment().add(minutesAway , "minutes").format("hh:mm a");
  console.log("The next train will arrive at " + nextTrain);





});

