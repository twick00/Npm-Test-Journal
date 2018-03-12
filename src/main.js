import {Journal} from "./journal.js";
// import $ from 'jquery';

var journal = new Journal;
$(document).ready(function() {
  $("#journal-button").click(function() {
    journal.newEntry($("#journal-entry").val());
    $("#journal-entry").val("");
    let entryList = journal.getEntries();
    entryList.forEach(function(entry)
    {
      $("#journal-list").append("<h4>"+entry+"<h4><hr>");
    }
    );
  });
});


