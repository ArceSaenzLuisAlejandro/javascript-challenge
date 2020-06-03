// from data.js
var tableData = data;
// console.log(tableData);

// YOUR CODE HERE!
var tableBody = d3.select("tbody");

// Append table to the web page
tableData.forEach( function(UFO) {
    // console.log(UFO);
    // For each UFO add a row to the table.
    var row = tableBody.append("tr");
    Object.entries(UFO).forEach( function([key, value]) {
        // For each entry add a data cell.
        var cell = row.append("td");
        cell.text(value);
    });
  });

// Search for events based on the input #datetime
var button = d3.select("#filter-btn");
button.on("click", function() {

    tableBody.html("");

    // Extract the text from the input #datetime
    var inputText = d3.select("#datetime").property("value");

    // Filter the table by using the input #datetime
    // Use '===' 
    var filteredTableData = tableData.filter(UFO => UFO.datetime === inputText);

    // Append table to the web page
    filteredTableData.forEach( function(UFO) {
        // console.log(UFO);
        // For each UFO add a row to the table.
        var row = tableBody.append("tr");
        Object.entries(UFO).forEach( function([key, value]) {
            // For each entry add a data cell.
            var cell = row.append("td");
            cell.text(value);
        });
    });
});