NUMBER_OF_USERS = 0;
NUMBER_OF_ROUNDS = 0;
TABLE_1_OFFSET_X = 1;
TABLE_1_OFFSET_Y = 1;
let P1P = 0;
let P2P = 0;
let P3P = 0;
let P4P = 0;
let P5P = 0;
let P6P = 0;
let P7P = 0;
let P8P = 0;
DATA = "no values,";
SMALLARRAY = [];
BIGARRAY = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    []
];
function resetarray(){
    PLAYER_1_TOTAL = [];
    PLAYER_2_TOTAL = [];
    PLAYER_3_TOTAL = [];
    PLAYER_4_TOTAL = [];
    PLAYER_5_TOTAL = [];
    PLAYER_6_TOTAL = [];
    PLAYER_7_TOTAL = [];
    PLAYER_8_TOTAL = [];
    PLAYER_9_TOTAL = [];
    PLAYER_10_TOTAL = [];
    PLAYER_11_TOTAL = [];
    PLAYER_12_TOTAL = [];
    PLAYER_13_TOTAL = [];
    PLAYER_14_TOTAL = [];
    PLAYER_15_TOTAL = [];
    PLAYER_16_TOTAL = [];
    PLAYER_17_TOTAL = [];
    PLAYER_18_TOTAL = [];
    PLAYER_19_TOTAL = [];
    PLAYER_20_TOTAL = [];
}

/* */
ARRAY = ["name", "points",];

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

    document.getElementById('note').style.display = 'block';

    NUMBER_OF_USERS = selectedValue;
    console.log("NUMBER_OF_USERS = " + NUMBER_OF_USERS)
    NUMBER_OF_ROUNDS = NUMBER_OF_USERS * 3 + 12;
    numberOfPlayers.innerHTML = "there are " + NUMBER_OF_USERS + " players";
    numberOfRounds.innerHTML = "there will be " + NUMBER_OF_ROUNDS + " rounds";
  }
function getdata (){
    newt.innerHTML = "";
    newt2.innerHTML = "";
    const url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSWpkVgP8kZvSW-uAyznifIDcgRzT7BHZVwlEWr7zSKTyDRTLZCah_YDnhB6fYvwzQhmAXJ6eQoNS6m/pub?output=csv';
  
    fetch(url)
    .then(response => response.text())
    .then(temp => {
        DATA = temp;
        console.log("DATA = " + DATA);
        csvToBIGARRAY(DATA);
    })
    .catch(error => {
        console.error('Error:', error);

    });
}

reset.addEventListener("click", function(){
    console.log("run getdata");
 getdata();
});
rreset.addEventListener("change", function(){
    if( rreset.value == 5){

    }
});

function csvToBIGARRAY(csvString) {
    console.log("to arrays")
    ii = 0;
    for(i = 0; i < 1000; i++){
        temp = "";
        ii++;
            while(ii < 1000 && csvString[ii] != "," && csvString[ii] != "\\r\\"){
                temp = temp + csvString[ii];
                ii++
            }
            console.log(temp);
        SMALLARRAY.push(temp);
    }

    for(row = 0; row < 10; row++){
        for(i = 0; i < 43; i++){
            temp = "";
            console.log("row = " + row + " value = " + SMALLARRAY[(row*42)+i]);
            BIGARRAY[row].push(SMALLARRAY[(row*42)+i]);
        }
    }
    console.log("make table");

    bets_and_made = document.createElement('table');

    var headderRow = document.createElement('tr');
    bets_and_made.appendChild(headderRow);
    for(i = TABLE_1_OFFSET_X; i < (NUMBER_OF_USERS*2); i++){
        var head = document.createElement('th');
        head.textContent = BIGARRAY[1][i] + " bet";
        headderRow.appendChild(head);

        i++;

        var head = document.createElement('th');
        head.textContent = BIGARRAY[1][i] + " made";
        headderRow.appendChild(head);
    }

    for(i = (TABLE_1_OFFSET_Y+1); i < (NUMBER_OF_ROUNDS+TABLE_1_OFFSET_Y); i++){
        var row = document.createElement('tr');
        bets_and_made.appendChild(row);
        for(j = TABLE_1_OFFSET_X; j < ((NUMBER_OF_USERS * 2)+TABLE_1_OFFSET_X); j++){
            var cell = document.createElement('td');
            cell.textContent = BIGARRAY[i][j];
            row.appendChild(cell);
        }
    }

    newt.appendChild(bets_and_made);

    totals = document.createElement('table');

    var headderRow2 = document.createElement('tr');
    totals.appendChild(headderRow2);
    for(i = TABLE_1_OFFSET_X; i < ((NUMBER_OF_USERS*2)+1); i = 2 + i){
        var head2 = document.createElement('th');
        head2.textContent = BIGARRAY[1][i] + " score";
        headderRow2.appendChild(head2);
    }

    for(i = 0; i < NUMBER_OF_ROUNDS; i++){
        var row2 = document.createElement('tr');
        totals.appendChild(row2);
        for(j = 0; j < NUMBER_OF_USERS; j++){
            var cell2 = document.createElement('td');
            cell2.textContent = BIGARRAY[2][1] - BIGARRAY[2][2];
            row2.appendChild(cell2);
        }
    }
    newt.appendChild(totals);
}

function launchCalcTotals(){
    console.log("launched launchCalcTotals")
    for(i = 1; i < NUMBER_OF_USERS; i++){
        calculateTotals(ListOfArrays[(i+TABLE_1_OFFSET_X)],ListOfArrays[(i+TABLE_1_OFFSET_X+1)],i);
        console.log(ListOfArrays[(i+TABLE_1_OFFSET_X)],ListOfArrays[(i+TABLE_1_OFFSET_X+1)],i);
    }
}
function calculateTotals(AR1,AR2,PN){
    console.log("in");
    for( i = 2; i < 10; i++){
        if(AR1[i] - AR2[i] == 0){
            PLAYER_1_TOTAL.push(5);
        }
        else{
            if(AR1[i] == "" || AR2[i] == ""){
                PLAYER_1_TOTAL.push("-");
            }
            temp = AR1[i] - AR2[i];
            if(temp > 0){
                temp = temp * -1;
            }
            findPlayerTotalArray(PN).push(temp);
        }
    }
}
function findPlayerTotalArray(PN){
    if(PN == 1){
        return PLAYER_1_TOTAL;
    }
    if(PN == 2){
        return PLAYER_2_TOTAL;
    }
    if(PN == 3){
        return PLAYER_3_TOTAL;
    }
    if(PN == 4){
        return PLAYER_4_TOTAL;
    }
    if(PN == 5){
        return PLAYER_5_TOTAL;
    }
    if(PN == 6){
        return PLAYER_6_TOTAL;
    }
    if(PN == 7){
        return PLAYER_7_TOTAL;
    }
    if(PN == 8){
        return PLAYER_8_TOTAL;
    }
    if(PN == 9){
        return PLAYER_9_TOTAL;
    }
    if(PN == 10){
        return PLAYER_10_TOTAL;
    }
    if(PN == 11){
        return PLAYER_11_TOTAL;
    }
    if(PN == 12){
        return PLAYER_12_TOTAL;
    }
    if(PN == 13){
        return PLAYER_13_TOTAL;
    }
    if(PN == 14){
        return PLAYER_14_TOTAL;
    }
    if(PN == 15){
        return PLAYER_15_TOTAL;
    }
    if(PN == 16){
        return PLAYER_16_TOTAL;
    }
    if(PN == 17){
        return PLAYER_17_TOTAL;
    }
    if(PN == 18){
        return PLAYER_18_TOTAL;
    }
    if(PN == 19){
        return PLAYER_19_TOTAL;
    }
    if(PN == 20){
        return PLAYER_20_TOTAL;
    }
}
function findTotalArray(x,y){
    if(20 % x == 0){
        return(PLAYER_1_TOTAL[y]);
    }
    if(20 % x == 1){
        return(PLAYER_2_TOTAL[y]);
    }
    if(20 % x == 2){
        return(PLAYER_3_TOTAL[y]);
    }
    if(20 % x == 3){
        return(PLAYER_4_TOTAL[y]);
    }
    if(20 % x == 4){
        return(PLAYER_5_TOTAL[y]);
    }
    if(20 % x == 5){
        return(PLAYER_6_TOTAL[y]);
    }
    if(20 % x == 6){
        return(PLAYER_7_TOTAL[y]);
    }
    if(20 % x == 7){
        return(PLAYER_8_TOTAL[y]);
    }
    if(20 % x == 8){
        return(PLAYER_9_TOTAL[y]);
    }
    if(20 % x == 9){
        return(PLAYER_10_TOTAL[y]);
    }
    if(20 % x == 10){
        return(PLAYER_11_TOTAL[y]);
    }
    if(20 % x == 11){
        return(PLAYER_12_TOTAL[y]);
    }
    if(20 % x == 12){
        return(PLAYER_13_TOTAL[y]);
    }
    if(20 % x == 13){
        return(PLAYER_14_TOTAL[y]);
    }
    if(20 % x == 14){
        return(PLAYER_15_TOTAL[y]);
    }
    if(20 % x == 15){
        return(PLAYER_16_TOTAL[y]);
    }
    if(20 % x == 16){
        return(PLAYER_17_TOTAL[y]);
    }
    if(20 % x == 17){
        return(PLAYER_18_TOTAL[y]);
    }
    if(20 % x == 18){
        return(PLAYER_19_TOTAL[y]);
    }
    if(20 % x == 19){
        return(PLAYER_20_TOTAL[y]);
    }
}