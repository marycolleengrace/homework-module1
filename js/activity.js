$(document).ready(function() {
    $("td:not(:nth-child(1))").each(function() {
      if ($(this).text().trim() !== "Not Available") {
        $(this).css("cursor", "pointer"); // Change cursor to hand on hover
        $(this).on("click", function() {
          $(this).toggleClass("highlight");
        });
      }
    });
    
    $("head").append(`
      <style>
        .highlight {
          background-color: lightgreen;
          color: white;
        }
      </style>
    `);
  });
  