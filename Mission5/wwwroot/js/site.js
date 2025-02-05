// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(document).ready(function()
{
    $("#btnSubmit").click(function () {
        let perWeek = parseInt($("#perWeek").val());
        let progLength = parseInt($("#progLength").val());
        let cost = perWeek * progLength * 25;
        alert("Total cost: $" + cost);
    });
});

