$(document).ready(function() {
    $("td:not(:nth-child(1))").each(function() {a
      if ($(this).text().trim() !== "Not Available") {
        $(this).css("cursor", "pointer"); 
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
  