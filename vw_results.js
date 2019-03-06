"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 4

   Author: Jacob Gordon
   Date:   03/06/19
   
   Filename: vw_results.js
   
   Functions:
   
   The calcSum() function is a callback function used to
   calculte the total value from items within an array
   
   The calcPercent(value, sum) function calculates the percentage given
   a value and a sum
   
   The createBar(partyType, percent) function writes a different
   table data table based on the candidates party affilication.
   
      
*/

var reportHTML = "<h1>" + raceTitle + "</h1>";

for (var i = 0; i <= 7; i++) {
    var totalVotes = 0;
    votes[i].forEach(calcSum);
    reportHTML += "<table> caption>" + race[i] + "</caption><tr><th>" + candidate[i] + "</th><th>" + votes[i] + "</th></tr>";
    candidateRows(i, totalVotes);
    reportHTML += candidateRows();
    reportHTML += "</table";
};
document.getElementsByTagName("section")[0].innerHTML = reportHTML;



/* Callback Function to calculate an array sum */
function calcSum(value) {
    totalVotes += value;
}

/* Function to calculate a percentage */
function calcPercent(value, sum) {
    return (100 * value / sum);
}