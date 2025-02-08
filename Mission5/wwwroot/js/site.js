// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(document).ready(function()
{
    $("#btnSubmit").click(function () {
        let perWeek = parseInt($("#perWeek").val());
        let progLength = parseInt($("#progLength").val());
        if (!isNaN(perWeek) &&  // checks if perWeek field is a number
            (0 < perWeek) &&  // checks to make sure it is positive
            (perWeek <= 4)) // checks if perweek is <= 4
        {
            let cost = perWeek * progLength * 25;
            $("#output").html("Total cost: $" + cost).fadeIn();
        }
        else
        {
            $("#output").html("Please enter valid inputs");
        }
    });
});

