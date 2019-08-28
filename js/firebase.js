  var firebaseConfig = {
    apiKey: "AIzaSyBu-uJM6zzL1wq5pS0Pel-z5jJLriOBkVQ",
    authDomain: "doeflow-demo.firebaseapp.com",
    databaseURL: "https://doeflow-demo.firebaseio.com",
    projectId: "doeflow-demo",
    storageBucket: "",
    messagingSenderId: "650038030255",
    appId: "1:650038030255:web:364d85bd72f5c375"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var database = firebase.database();

  $('#workWageBtn').on('click', function(event){
  event.preventDefault();

  // inputs from wageCd
  var name = $("#userName").val().trim()
  var work = $('#workInput').val().trim()
  var jobTitle = $('#jobTitle').val().trim()
  var wage = $('#wageInput').val().trim()
  var state = $('#inputState').val().trim()
  var income = $('#incomeInput').val().trim()

  var userProfile = {
    yourName: name,
    work: work,
    jobTitle: jobTitle,
    wage: wage,
    state: state,
    income: income,
  }

database.ref().push(userProfile)

$('#userName').val("")
$('#workInput').val("")
$('#jobTitle').val("")
$('#wageInput').val("")
$('#inputState').val("")
$('#incomeInput').val("")

});

database.ref().on("child_added" , function(childSnapshot){
var cs = childSnapshot.val();
var theName = cs.yourName;
var workPlace = cs.work;
var jbTitle = cs.jobTitle;
var wagePay = cs.wage;
var yourState = cs.state;
var yourIncome = cs.income;

var newRow = $("<tr>").append(
  $("<td>").text(theName),
  $("<td>").text(workPlace),
  $("<td>").text(jbTitle),
  $("<td>").text(wagePay),
);

$("#profile > tbody").append(newRow);
});

  


