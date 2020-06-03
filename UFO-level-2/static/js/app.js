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
    var inputTextDate = d3.select("#datetime").property("value");
    // Extract the text from the input #city
    var inputTextCity = d3.select("#city").property("value");
    // Extract the text from the input #state
    var inputTextState = d3.select("#state").property("value");
    // Extract the text from the input #country
    var inputTextCountry = d3.select("#country").property("value");
    // Extract the text from the input #shape
    var inputTextShape = d3.select("#shape").property("value");

    // Filter the table by using all the input fields. 
    // If there's an input, evaluate the text and move on to the next field. 
    // Use '===' to compare the given text.

    if (inputTextDate) {
        var filteredTableData = tableData.filter(UFO => UFO.datetime === inputTextDate );
    } else if (inputTextCity) {
        var filteredTableData = tableData.filter(UFO => UFO.city === inputTextCity );
    } else if (inputTextState) {
        var filteredTableData = tableData.filter(UFO => UFO.state === inputTextState );
    } else if (inputTextCountry) {
        var filteredTableData = tableData.filter(UFO => UFO.country === inputTextCountry );
    } else if (inputTextShape) {
        var filteredTableData = tableData.filter(UFO => UFO.shape === inputTextShape );
    };   
    
    if (inputTextDate) {
        filteredTableData = filteredTableData.filter(UFO => UFO.datetime === inputTextDate );
    } if (inputTextCity) {
        filteredTableData = filteredTableData.filter(UFO => UFO.city === inputTextCity );
    } if (inputTextState) {
        filteredTableData = filteredTableData.filter(UFO => UFO.state === inputTextState );
    } if (inputTextCountry) {
        filteredTableData = filteredTableData.filter(UFO => UFO.country === inputTextCountry );
    } if (inputTextShape) {
        filteredTableData = filteredTableData.filter(UFO => UFO.shape === inputTextShape );
    }; 

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