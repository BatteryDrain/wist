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
function resetArrays(){
    SMALLARRAY = [];
    TOTALSARRAY = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]]
    BIGARRAY = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
}


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
    resetArrays();
    console.log("to arrays");
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

    for(arrayrow = 0; arrayrow < (NUMBER_OF_ROUNDS + 2); arrayrow++){
        for(i = 0; i < 43; i++){
            temp = "";
            console.log("arrayrow = " + arrayrow + " value = " + SMALLARRAY[i + 42 * arrayrow]);
            BIGARRAY[i].push(SMALLARRAY[i + 42 * arrayrow]);
        }
    }
    console.log("make table");

    bets_and_made = document.createElement('table');

    var headderRow = document.createElement('tr');
    bets_and_made.appendChild(headderRow);
    for(i = TABLE_1_OFFSET_X; i < (NUMBER_OF_USERS*2); i++){
        var head = document.createElement('th');
        head.textContent = BIGARRAY[i][1] + " bet";
        headderRow.appendChild(head);

        i++;

        var head = document.createElement('th');
        head.textContent = BIGARRAY[i][1] + " made";
        headderRow.appendChild(head);
    }

    for(i = (TABLE_1_OFFSET_Y+1); i < (NUMBER_OF_ROUNDS+TABLE_1_OFFSET_Y); i++){
        var row = document.createElement('tr');
        bets_and_made.appendChild(row);
        for(j = TABLE_1_OFFSET_X; j < ((NUMBER_OF_USERS * 2) + TABLE_1_OFFSET_X); j++){
            var cell = document.createElement('td');
            cell.textContent = BIGARRAY[j][i];
            row.appendChild(cell);
        }
    }

    newt.appendChild(bets_and_made);

    buildTotals();

    console.log("fill totals table");

    totals = document.createElement('table');

    var headderRow2 = document.createElement('tr');
    totals.appendChild(headderRow2);
    console.log("NUMBER_OF_USERS = " + NUMBER_OF_USERS);
    for(i = TABLE_1_OFFSET_X; i < ((NUMBER_OF_USERS*2)+1); i = 2 + i){
        var head2 = document.createElement('th');
        head2.textContent = BIGARRAY[i][1] + " score";
        headderRow2.appendChild(head2);
    }

    for(i = TABLE_1_OFFSET_Y; i < (NUMBER_OF_ROUNDS + TABLE_1_OFFSET_Y); i++){
        var row2 = document.createElement('tr');
        totals.appendChild(row2);
        for(j = TABLE_1_OFFSET_X; j < ((NUMBER_OF_USERS * 2) + TABLE_1_OFFSET_X); j = j + 2){ //multiplying by 1 to convert srring to int
            var cell2 = document.createElement('td');
            cell2.textContent = TOTALSARRAY[j][i];
            row2.appendChild(cell2);
        }
    }
    newt.appendChild(totals);
}

function buildTotals(){
    for(x = TABLE_1_OFFSET_X; x < ((NUMBER_OF_USERS * 2) + TABLE_1_OFFSET_X); x = x +2){
        for(y = 1 ; y < (NUMBER_OF_ROUNDS + 1); y++){
            if(BIGARRAY[x][y] == "" || BIGARRAY[x + 1][y] == ""){
                TOTALSARRAY[x].push("");
            }
            else{
                val = BIGARRAY[x][y] - BIGARRAY[x + 1][y];
                if(val == 0){
                    TOTALSARRAY[(x / 2)].push(5);                
                }
                else{
                    if(val > 0){
                        TOTALSARRAY[(x / 2)].push(val * -1);
                    }
                    else{
                        TOTALSARRAY[(x / 2)].push(val);
                    }
                }
            }
        }
    }
}