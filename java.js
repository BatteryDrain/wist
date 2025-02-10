let NUMBER_OF_USERS;
let P1P = 0;
let P2P = 0;
let P3P = 0;
let P4P = 0;
let P5P = 0;
let P6P = 0;
let P7P = 0;
let P8P = 0;
DARRAYEX = `name,points
John,25
Alice,30
Bob,22`;
var DATA = "no values,";


ARRAY = [name, points,];

sibmitbutton.addEventListener("click", function(){
    getplayernumber();
  });

function getplayernumber() {
    // Get the select element by its ID
    var selectElement = document.getElementById('player#');
  
    // Retrieve the selected value
    var selectedValue = selectElement.value;
  
    // test the selected value
    console.log('Selected value:', selectedValue);
    document.getElementById('player#').style.display = 'none';
    document.getElementById('playernumberlabel').style.display = 'none';
    document.getElementById('sibmitbutton').style.display = 'none';

    document.getElementById('player1n').style.display = 'block';
    document.getElementById('player1c').style.display = 'block';
    document.getElementById('player2n').style.display = 'block';
    document.getElementById('player2c').style.display = 'block';
    document.getElementById('player3n').style.display = 'block';
    document.getElementById('player3c').style.display = 'block';

    if(selectedValue>=4){
        document.getElementById('player4n').style.display = 'block';
        document.getElementById('player4c').style.display = 'block';
    }
    if(selectedValue>=5){
        document.getElementById('player5n').style.display = 'block';
        document.getElementById('player5c').style.display = 'block';
    }
    if(selectedValue>=6){
        document.getElementById('player6n').style.display = 'block';
        document.getElementById('player6c').style.display = 'block';
    }
    if(selectedValue>=7){
        document.getElementById('player7n').style.display = 'block';
        document.getElementById('player7c').style.display = 'block';
    }
    if(selectedValue>=8){
        document.getElementById('player8n').style.display = 'block';
        document.getElementById('player8c').style.display = 'block';
    }

    document.getElementById('savenames').style.display = 'block';
    document.getElementById('note').style.display = 'block';

    NUMBER_OF_USERS = selectedValue;
  }

savenames.addEventListener("click", function(){
  savingnames();
});

  function savingnames()  {
    var player1name = document.getElementById('player1n').value;
    var player1color = document.getElementById('player1c').value;

    var player2name = document.getElementById('player2n').value;
    var player2color = document.getElementById('player2c').value;

    var player3name = document.getElementById('player3n').value;
    var player3color = document.getElementById('player3c').value;

    var player4name = document.getElementById('player4n').value;
    var player4color = document.getElementById('player4c').value;

    var player5name = document.getElementById('player5n').value;
    var player5color = document.getElementById('player5c').value;

    var player6name = document.getElementById('player6n').value;
    var player6color = document.getElementById('player6c').value;

    var player7name = document.getElementById('player7n').value;
    var player7color = document.getElementById('player7c').value;


    var player8name = document.getElementById('player8n').value;
    var player8color = document.getElementById('player8c').value;

    
    console.log(player1name);
    console.log(player1color); //test

    console.log(NUMBER_OF_USERS);
    gofetch();
    // player1name, player2name, player3name, player4name, player5name, player6name, player7name, player8name
  }

// function gofetch()  {
  const url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSWpkVgP8kZvSW-uAyznifIDcgRzT7BHZVwlEWr7zSKTyDRTLZCah_YDnhB6fYvwzQhmAXJ6eQoNS6m/pub?output=csv';
  
  fetch(url)
    .then(response => response.text())
    .then(DATA => {
      console.log("DATA = " + DATA);  // CSV data as a string
    })
    .catch(error => {
      console.error('Error:', error);
     });
//  }

  set.addEventListener("click", function(){
     //array = ARRAYEX(DATA);
     csvToArray(DATA);
    //  console.log("ARRAY = "+ARRAY);
  });

// function csvToArray(csvString) {
// const rows = csvString.split("\n"); // Split by line
// return rows.map(row => row.split(",")); // Split each row by comma
// }

function csvToArray(csvString) {
    temp = ""
    for ( i = 0; i < 90; i++ ) {
        if( csvString[i] != ","){
            temp = temp + csvString[i];
        }
        else {
            console.log("csvString" + i + "=" + temp);
            ARRAY.push(temp);
            temp = "";
        }
    }
    console.log(ARRAY);
}