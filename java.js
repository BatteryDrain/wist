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
    console.log("NUMBER_OF_USERS = " + NUMBER_OF_USERS)
    NUMBER_OF_ROUNDS = NUMBER_OF_USERS * 3 + 12;
    numberOfPlayers.innerHTML = "there are " + NUMBER_OF_USERS + " players";
    numberOfRounds.innerHTML = "there will be " + NUMBER_OF_ROUNDS + " rounds";
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
        newcsvToArray(DATA);
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

function newcsvToArray(csvString) {
    resetarray();
    i = 0;
    for(ii = 1; ii < 100; ii++){
        temp = "";
        i++
        // || "\\"
        while(i < 1000 && csvString[i] != ","){
            temp = temp + csvString[i];
            // if(csvString[i] == ","){
                 i++;
            // }
            // else{
            //     i = i + 3;
            // }
        }
        console.log("ii = " + ii + " " + temp);
        if(ii % 17 == 1){
            Columb_A.push(temp);
        }
        if(ii % 17 == 2){
            Columb_B.push(temp);
        }
        if(ii % 17 == 3){
            Columb_C.push(temp);
        }
        if(ii % 17 == 4){
            Columb_D.push(temp);
        }
        if(ii % 17 == 5){
            Columb_E.push(temp);
        }
        if(ii % 17 == 6){
            Columb_F.push(temp);
        }
        if(ii % 17 == 7){
            Columb_G.push(temp);
        }
        if(ii % 17 == 8){
            Columb_H.push(temp);
        }
        if(ii % 17 == 9){
            Columb_I.push(temp);
        }
        if(ii % 17 == 10){
            Columb_J.push(temp);
        }
        if(ii % 17 == 11){
            Columb_K.push(temp);
        }
        if(ii % 17 == 12){
            Columb_L.push(temp);
        }
        if(ii % 17 == 13){
            Columb_M.push(temp);
        }
        if(ii % 17 == 14){
            Columb_N.push(temp);
        }
        if(ii % 17 == 15){
            Columb_O.push(temp);
        }
        if(ii % 17 == 16){
            Columb_P.push(temp);
        }
        if(ii % 17 == 17){
            Columb_Q.push(temp);
        }
        if(ii % 17 == 18){
            Columb_R.push(temp);
        }
        if(ii % 17 == 19){
            Columb_S.push(temp);
        }
        if(ii % 17 == 20){
            Columb_T.push(temp);
        }
        if(ii % 17 == 21){
            Columb_U.push(temp);
        }
        if(ii % 17 == 22){
            Columb_V.push(temp);
        }
        if(ii % 17 == 23){
            Columb_W.push(temp);
        }
        if(ii % 17 == 24){
            Columb_X.push(temp);
        }
        if(ii % 17 == 25){
            Columb_Y.push(temp);
        }
        if(ii % 17 == 26){
            Columb_Z.push(temp);
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
    for(i = TABLE_1_OFFSET_X; i < (NUMBER_OF_USERS+1); i = 2 + i){
        var head2 = document.createElement('th');
        head2.textContent = findArray(i,1);
        headderRow2.appendChild(head2);
    }

    for(i = 0; i < NUMBER_OF_ROUNDS; i++){
        var row2 = document.createElement('tr');
        totals.appendChild(row2);
        for(j = 0; j < NUMBER_OF_USERS; j++){
            var cell2 = document.createElement('td');
            cell2.textContent = "-";
            row2.appendChild(cell2);
        }
    }
    newt.appendChild(totals);
}
function findArray(x,y){
    if(x % 17 == 0){
        return(Columb_A[y]);
    }
    if(x % 17 == 1){
        return(Columb_B[y]);
    }
    if(x % 17 == 2){
        return(Columb_C[y]);
    }
    if(x % 17 == 3){
        return(Columb_D[y]);
    }
    if(x % 17 == 4){
        return(Columb_E[y]);
    }
    if(x % 17 == 5){
        return(Columb_F[y]);
    }
    if(x % 17 == 6){
        return(Columb_G[y]);
    }
    if(x % 17 == 7){
        return(Columb_H[y]);
    }
    if(x % 17 == 8){
        return(Columb_I[y]);
    }
    if(x % 17 == 9){
        return(Columb_J[y]);
    }
    if(x % 17 == 10){
        return(Columb_K[y]);
    }
    if(x % 17 == 11){
        return(Columb_L[y]);
    }
    if(x % 17 == 12){
        return(Columb_M[y]);
    }
    if(x % 17 == 13){
        return(Columb_N[y]);
    }
    if(x % 17 == 14){
        return(Columb_O[y]);
    }
    if(x % 17 == 15){
        return(Columb_P[y]);
    }
    if(x % 17 == 16){
        return(Columb_Q[y]);
    }
    if(x % 17 == 17){
        return(Columb_R[y]);
    }
    if(x % 17 == 18){
        return(Columb_S[y]);
    }
    if(x % 17 == 19){
        return(Columb_T[y]);
    }
    if(x % 17 == 20){
        return(Columb_U[y]);
    }
    if(x % 17 == 21){
        return(Columb_V[y]);
    }
    if(x % 17 == 22){
        return(Columb_W[y]);
    }
    if(x % 17 == 23){
        return(Columb_X[y]);
    }
    if(x % 17 == 24){
        return(Columb_Y[y]);
    }
    if(x % 17 == 25){
        return(Columb_Z[y]);
    }
}

