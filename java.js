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
    Columb_A = [];
    Columb_B = [];
    Columb_C = [];
    Columb_D = [];
    Columb_E = [];
    Columb_F = [];
    Columb_G = [];
    Columb_H = [];
    Columb_I = [];
    Columb_J = [];
    Columb_K = [];
    Columb_L = [];
    Columb_M = [];
    Columb_N = [];
    Columb_O = [];
    Columb_P = [];
    Columb_Q = [];
    Columb_R = [];
    Columb_S = [];
    Columb_T = [];
    Columb_U = [];
    Columb_V = [];
    Columb_W = [];
    Columb_X = [];
    Columb_Y = [];
    Columb_Z = [];
    Columb_AA = [];
    Columb_AB = [];
    Columb_AC = [];
    Columb_AD = [];
    Columb_AE = [];
    Columb_AF = [];
    Columb_AG = [];
    Columb_AH = [];
    Columb_AI = [];
    Columb_AJ = [];
    Columb_AK = [];
    Columb_AL = [];
    Columb_AM = [];
    Columb_AN = [];
    Columb_AO = [];
    Columb_AP = [];
    Columb_AQ = [];
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
ListOfArrays = [
"Columb_A",
"Columb_B",
"Columb_C",
"Columb_D",
"Columb_E",
"Columb_F",
"Columb_G",
"Columb_H",
"Columb_I",
"Columb_J",
"Columb_K",
"Columb_L",
"Columb_M",
"Columb_N",
"Columb_O",
"Columb_P",
"Columb_Q",
"Columb_R",
"Columb_S",
"Columb_T",
"Columb_U",
"Columb_V",
"Columb_W",
"Columb_X",
"Columb_Y",
"Columb_Z",
"Columb_AA",
"Columb_AB",
"Columb_AC",
"Columb_AD",
"Columb_AE",
"Columb_AF",
"Columb_AG",
"Columb_AH",
"Columb_AI",
"Columb_AJ",
"Columb_AK",
"Columb_AL",
"Columb_AM",
"Columb_AN",
"Columb_AO",
"Columb_AP",
"Columb_AQ"]


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
            while(ii < 1000 && csvString[ii] != "," || csvString[ii] != "\\r\\"){
                temp = temp + csvString[ii];
                ii++
            }
        SMALLARRAY.push(temp);
    }

    for(row = 0; row < 10; row++){
        for(i = 0; i < 43; i++){
            temp = "";
            console.log("row = " + row + " value = " + SMALLARRAY[(row*42)+i]);
            BIGARRAY[row].push(SMALLARRAY[(row*42)+i]);
        }
    }
}


function newcsvToArray(csvString) {
    resetarray();
    i = 0;
    for(ii = 1; ii < 100; ii++){
        temp = "";
        i++;
        // || "\\"
        while(i < 1000 && csvString[i] != ","){
            temp = temp + csvString[i];
            i++
        }
        console.log("ii = " + ii + " " + temp);
        if(ii % 43 == 1){
            Columb_A.push(temp);
        }
        if(ii % 43 == 2){
            Columb_B.push(temp);
        }
        if(ii % 43 == 3){
            Columb_C.push(temp);
        }
        if(ii % 43 == 4){
            Columb_D.push(temp);
        }
        if(ii % 43 == 5){
            Columb_E.push(temp);
        }
        if(ii % 43 == 6){
            Columb_F.push(temp);
        }
        if(ii % 43 == 7){
            Columb_G.push(temp);
        }
        if(ii % 43 == 8){
            Columb_H.push(temp);
        }
        if(ii % 43 == 9){
            Columb_I.push(temp);
        }
        if(ii % 43 == 10){
            Columb_J.push(temp);
        }
        if(ii % 43 == 11){
            Columb_K.push(temp);
        }
        if(ii % 43 == 12){
            Columb_L.push(temp);
        }
        if(ii % 43 == 13){
            Columb_M.push(temp);
        }
        if(ii % 43 == 14){
            Columb_N.push(temp);
        }
        if(ii % 43 == 15){
            Columb_O.push(temp);
        }
        if(ii % 43 == 16){
            Columb_P.push(temp);
        }
        if(ii % 43 == 17){
            Columb_Q.push(temp);
        }
        if(ii % 43 == 18){
            Columb_R.push(temp);
        }
        if(ii % 43 == 19){
            Columb_S.push(temp);
        }
        if(ii % 43 == 20){
            Columb_T.push(temp);
        }
        if(ii % 43 == 21){
            Columb_U.push(temp);
        }
        if(ii % 43 == 22){
            Columb_V.push(temp);
        }
        if(ii % 43 == 23){
            Columb_W.push(temp);
        }
        if(ii % 43 == 24){
            Columb_X.push(temp);
        }
        if(ii % 43 == 25){
            Columb_Y.push(temp);
        }
        if(ii % 43 == 26){
            Columb_Z.push(temp);
        }
        if(ii % 43 == 27){
            Columb_AA.push(temp);
        }
        if(ii % 43 == 28){
            Columb_AB.push(temp);
        }
        if(ii % 43 == 29){
            Columb_AC.push(temp);
        }
        if(ii % 43 == 30){
            Columb_AD.push(temp);
        }
        if(ii % 43 == 31){
            Columb_AE.push(temp);
        }
        if(ii % 43 == 32){
            Columb_AF.push(temp);
        }
        if(ii % 43 == 33){
            Columb_AG.push(temp);
        }
        if(ii % 43 == 34){
            Columb_AH.push(temp);
        }
        if(ii % 43 == 35){
            Columb_AI.push(temp);
        }
        if(ii % 43 == 36){
            Columb_AJ.push(temp);
        }
        if(ii % 43 == 37){
            Columb_AK.push(temp);
        }
        if(ii % 43 == 38){
            Columb_AL.push(temp);
        }
        if(ii % 43 == 39){
            Columb_AM.push(temp);
        }
        if(ii % 43 == 40){
            Columb_AN.push(temp);
        }
        if(ii % 43 == 41){
            Columb_AO.push(temp);
        }
        if(ii % 43 == 42){
            Columb_AP.push(temp);
        }
        if(ii % 43 == 43){
            Columb_AQ.push(temp);
        }
    }
    console.log("make table");

    bets_and_made = document.createElement('table');

    var headderRow = document.createElement('tr');
    bets_and_made.appendChild(headderRow);
    for(i = TABLE_1_OFFSET_X; i < (NUMBER_OF_USERS*2); i++){
        var head = document.createElement('th');
        head.textContent = findArray(i,1) + " bet";
        headderRow.appendChild(head);

        i++;

        var head = document.createElement('th');
        head.textContent = findArray(i,1) + " made";
        headderRow.appendChild(head);
    }

    for(i = (TABLE_1_OFFSET_Y+1); i < (NUMBER_OF_ROUNDS+TABLE_1_OFFSET_Y); i++){
        var row = document.createElement('tr');
        bets_and_made.appendChild(row);
        for(j = TABLE_1_OFFSET_X; j < ((NUMBER_OF_USERS * 2)+TABLE_1_OFFSET_X); j++){
            var cell = document.createElement('td');
            cell.textContent = findArray(j,i);
            row.appendChild(cell);
        }
    }

    newt.appendChild(bets_and_made);

    totals = document.createElement('table');

    var headderRow2 = document.createElement('tr');
    totals.appendChild(headderRow2);
    for(i = TABLE_1_OFFSET_X; i < ((NUMBER_OF_USERS*2)+1); i = 2 + i){
        var head2 = document.createElement('th');
        head2.textContent = findArray(i,1) + " score";
        headderRow2.appendChild(head2);
    }

    for(i = 0; i < NUMBER_OF_ROUNDS; i++){
        var row2 = document.createElement('tr');
        totals.appendChild(row2);
        for(j = 0; j < NUMBER_OF_USERS; j++){
            var cell2 = document.createElement('td');
            cell2.textContent = findTotalArray(j,i);
            row2.appendChild(cell2);
        }
    }
    newt.appendChild(totals);
}
function findArray(x,y){
    if(x % 42 == 0){
        return(Columb_A[y]);
    }
    if(x % 42 == 1){
        return(Columb_B[y]);
    }
    if(x % 42 == 2){
        return(Columb_C[y]);
    }
    if(x % 42 == 3){
        return(Columb_D[y]);
    }
    if(x % 42 == 4){
        return(Columb_E[y]);
    }
    if(x % 42 == 5){
        return(Columb_F[y]);
    }
    if(x % 42 == 6){
        return(Columb_G[y]);
    }
    if(x % 42 == 7){
        return(Columb_H[y]);
    }
    if(x % 42 == 8){
        return(Columb_I[y]);
    }
    if(x % 42 == 9){
        return(Columb_J[y]);
    }
    if(x % 42 == 10){
        return(Columb_K[y]);
    }
    if(x % 42 == 11){
        return(Columb_L[y]);
    }
    if(x % 42 == 12){
        return(Columb_M[y]);
    }
    if(x % 42 == 13){
        return(Columb_N[y]);
    }
    if(x % 42 == 14){
        return(Columb_O[y]);
    }
    if(x % 42 == 15){
        return(Columb_P[y]);
    }
    if(x % 42 == 16){
        return(Columb_Q[y]);
    }
    if(x % 42 == 17){
        return(Columb_R[y]);
    }
    if(x % 42 == 18){
        return(Columb_S[y]);
    }
    if(x % 42 == 19){
        return(Columb_T[y]);
    }
    if(x % 42 == 20){
        return(Columb_U[y]);
    }
    if(x % 42 == 21){
        return(Columb_V[y]);
    }
    if(x % 42 == 22){
        return(Columb_W[y]);
    }
    if(x % 42 == 23){
        return(Columb_X[y]);
    }
    if(x % 42 == 24){
        return(Columb_Y[y]);
    }
    if(x % 42 == 25){
        return(Columb_Z[y]);
    }
    if(x % 42 == 26){
        return(Columb_AA[y]);
    }
    if(x % 42 == 27){
        return(Columb_AB[y]);
    }
    if(x % 42 == 28){
        return(Columb_AC[y]);
    }
    if(x % 42 == 29){
        return(Columb_AD[y]);
    }
    if(x % 42 == 30){
        return(Columb_AE[y]);
    }
    if(x % 42 == 31){
        return(Columb_AF[y]);
    }
    if(x % 42 == 32){
        return(Columb_AG[y]);
    }
    if(x % 42 == 33){
        return(Columb_AH[y]);
    }
    if(x % 42 == 34){
        return(Columb_AI[y]);
    }
    if(x % 42 == 35){
        return(Columb_AJ[y]);
    }
    if(x % 42 == 36){
        return(Columb_AK[y]);
    }
    if(x % 42 == 37){
        return(Columb_AL[y]);
    }
    if(x % 42 == 38){
        return(Columb_AM[y]);
    }
    if(x % 42 == 39){
        return(Columb_AN[y]);
    }
    if(x % 42 == 40){
        return(Columb_AO[y]);
    }
    if(x % 42 == 41){
        return(Columb_AP[y]);
    }
    if(x % 42 == 42){
        return(Columb_AQ[y]);
    }
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