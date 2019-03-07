"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 4

   Author: Caleb Snow
   Date:   3/4/19

   Filename: vw_results.js

   Functions:

   The calcSum() function is a callback function used to
   calculte the total value from items within an array

   The calcPercent(value, sum) function calculates the percentage given
   a value and a sum

   The createBar(partyType, percent) function writes a different
   table data table based on the candidates party affilication.


*/
// Creates a variable that will will bring in the race Title variable from another file as an h1 element
var reportHTML="<h1>" +raceTitle+"</h1>";
// Creates a for loop that creates a table which runs for what the variable of i is equal to at the time of being ran. Each table changes
// Depending on the loop
for(var i=0;i<race.length;i++){
    var totalVotes=0;
    votes[i].forEach(calcSum);
    reportHTML+="<table>";
    reportHTML+="<caption>"+race[i]+"</caption>";
    reportHTML+="<tr><th>Candidate</th><th>Votes</th></tr>";
    reportHTML+=candidateRows(i,totalVotes);
    reportHTML+="</table>"
}

document.getElementsByTagName("section")[0].innerHTML=reportHTML;
//Creates a function that creates variables for the candidate, party, and votes, and then one for the precentage of votes. It uses these variables
//to create a row with different datacells containing them.
function candidateRows(raceNum, totalVotes){
    var rowHTML=""
    for(var j=0;j<=2;j++){
    var candidateName = candidate[raceNum][j];
    var candidateParty = party[raceNum][j];
    var candidateVotes=votes[raceNum][j];
    var candidatePercent=calcPercent(candidateVotes, totalVotes);
    rowHTML+="<tr><td>"+candidateName+"(" +candidateParty+")</td><td>" +candidateVotes.toLocaleString()+"(" +candidatePercent.toFixed(1)+"%)</td></tr>";
  //
    for(var k=0;k<candidatePercent;k++){
        rowHTML +=createBar(candidateParty);
    }
    rowHTML+="</tr>"
}
return rowHTML
}

/* Callback Function to calculate an array sum */
function calcSum(value) {
    totalVotes += value;
 }
 
 /* Function to calculate a percentage */
 function calcPercent(value, sum) {
    return (100*value/sum);
 }
// Creates a function that has an empty variable for the bars, it then runs a switch case for the 3 different types of party classes
//If the case is true then it runs the code within the case, but if not then it continues to run. Finally, it returns the barHTML
function createBar(partyType){
    var barHTML="";
    switch(partyType){
    case "D":
    barHTML="<td class='dem'></td>"
    break;
    case "R":
    barHTML="<td class='rep'></td>"
    break;
    case "I":
    barHTML="<td class='ind'></td>"
    break;
}
return barHTML;
}