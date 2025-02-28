NUMBER_OF_USERS = 0;
NUMBER_OF_ROUNDS = 0;
TABLE_1_OFFSET_X = 1;
TABLE_1_OFFSET_Y = 1;
STOP = false;
MAXVAL = 0;
MINVAL = 0;
let P1P = 0;
let P2P = 0;
let P3P = 0;
let P4P = 0;
let P5P = 0;
let P6P = 0;
let P7P = 0;
let P8P = 0;
DATA = "no values,";
lineGraph = null;
function resetArrays(){
    SMALLARRAY = [];
    TOTALSARRAY = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
    BIGARRAY = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
    PLAYERNAMES = [];
    COLORS = ["blue","red","limegreen","pink","purple","orange","pink","brown","cyan","magenta","lime","black","green","yellow",];
    RUNTOTAL = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
}

function createRounds(){
    ROUNDS = [];
    for(i = 0; i < NUMBER_OF_ROUNDS; i++){
        ROUNDS.push(i+1);
    }
}

ARRAY = ["name", "points",];

playernumber.addEventListener("change", function(){
    NUMBER_OF_USERS = document.getElementById('playernumber');
    console.log("NUMBER_OF_USERS = " + NUMBER_OF_USERS)
    NUMBER_OF_ROUNDS = NUMBER_OF_USERS * 3 + 12;
    var VarSpace = NUMBER_OF_ROUNDS * 36;
    createRounds();
    numberOfPlayers.innerHTML = "there are " + NUMBER_OF_USERS + " players";
    numberOfRounds.innerHTML = "there will be " + NUMBER_OF_ROUNDS + " rounds";
});

sibmitbutton.addEventListener("click", function(){
    getplayernumber();
  });

function getplayernumber() {
    // Get the select element by its ID
    var selectElement = document.getElementById('playernumber');
  
    // Retrieve the selected value
    var selectedValue = selectElement.value;
  
    // test the selected value
    console.log('Selected value:', selectedValue);
    document.getElementById('playernumber').style.display = 'none';
    document.getElementById('playernumberlabel').style.display = 'none';
    document.getElementById('sibmitbutton').style.display = 'none';

    document.getElementById('note').style.display = 'block';

    NUMBER_OF_USERS = selectedValue;
    console.log("NUMBER_OF_USERS = " + NUMBER_OF_USERS)
    NUMBER_OF_ROUNDS = NUMBER_OF_USERS * 3 + 12;
    var VarSpace = NUMBER_OF_ROUNDS * 36;
    createRounds();
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
    SMALLARRAY = csvString
    .split("\\r\\n")  // Split into rows
    .map(row => row.split(","))  // Split each row into columns (2D array)
    .flat();  // Flatten into a 1D array

    console.log(SMALLARRAY);

    for(row = 0; row < (NUMBER_OF_ROUNDS + 2); row++){
        for(i = 0; i < 43; i++){
            console.log("row = " + row + " value = " + SMALLARRAY[i + 42 * row]);
            BIGARRAY[i].push(SMALLARRAY[i + 42 * row]);
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
    findnames();
    calcruntotal();

    buildgraph();
}

function findnames(){
    for(i = TABLE_1_OFFSET_X; i < ((NUMBER_OF_USERS * 2) + TABLE_1_OFFSET_X); i = i + 2){
        PLAYERNAMES.push(BIGARRAY[i][1]);
    }
}

function calcruntotal(){
    MAXVAL = 0;
    MINVAL = 0;
    for(i = 0; i < NUMBER_OF_USERS; i++){
        console.log("run total for player" + i + " reading: " + ((i * 2) + 1));
        for(j = 1; j < TOTALSARRAY[((i * 2) + 1)].length; j++){
            val = TOTALSARRAY[((i * 2) + 1)][j];
            for(ii = 1; ii < j; ii++){
                val = (1 * val) + (1 * (TOTALSARRAY[((i * 2) + 1)][(j - ii)])); //multiplying by 1 to make sure they are ints
            }
            if(val != RUNTOTAL[i][RUNTOTAL[i].length - 1]){
                RUNTOTAL[i].push(val);
                console.log(val);
            }
            if(val < MINVAL){
                MINVAL = val;
            }
            if(val > MAXVAL){
                MAXVAL = val; 
            }
        }
    }
}

function buildTotals(){
    for(x = TABLE_1_OFFSET_X; x < ((NUMBER_OF_USERS * 2) + TABLE_1_OFFSET_X); x = x +2){
        for(y = 1 ; y < (NUMBER_OF_ROUNDS + 2); y++){
            if(BIGARRAY[x][y] == "" || BIGARRAY[x + 1][y] == ""){
                TOTALSARRAY[x].push("");
            }
            else{
                val = BIGARRAY[x][y] - BIGARRAY[x + 1][y];
                if(val == 0){
                    TOTALSARRAY[x].push(5);                
                }
                else{
                    if(val > 0){
                        TOTALSARRAY[x].push(val * -1);
                    }
                    else{
                        TOTALSARRAY[x].push(val);
                    }
                }
            }
        }
    }
}

function buildgraph() {
    const ctx = document.getElementById("lineGraph").getContext('2d');

    if(lineGraph instanceof Chart){
        lineGraph.destroy();
    }

    datasets = [];
    generateDatasets(datasets);
    
    lineGraph = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ROUNDS,
            datasets: datasets
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top'
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'rounds'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'score'
                    },
                    beginAtZero: true,
                    min: MINVAL - 10,
                    max: MAXVAL + 10
                }
            }
        }
    });
}
function generateDatasets(datasets){
    for (let i = 0; i < NUMBER_OF_USERS; i++) {
        datasets.push({
            label: PLAYERNAMES[i],
            data: RUNTOTAL[i],
            borderColor: COLORS[i],
            backgroundColor: COLORS[i],
            borderWidth: 2
        })
    }
}
function secondstest(){
    seconds = new Date().getTime() / 1000;
    timetest.innerHTML="time: " + seconds;
    if(STOP != true){
        refreshontime();
    }
}

function refreshontime(){
    RefreshRate = setTimeout(secondstest, 3000);
}

stopbutton.addEventListener("click", function(){
    console.log("clicked");
    if(STOP = true){
        STOP = false;
        console.log("started");
    }
    else{
        STOP = true;
        console.log("stopped");
    }
});