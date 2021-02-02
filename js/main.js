$(document).ready(function () {
    var thisHeader = document.getElementById("banner");
    if (thisHeader !== null) {
        thisHeader.innerHTML = 
            "";
        //<nav class=\"navbar navbar-dark bg-dark\"></nav > 
    }

    var thisFooter = document.getElementById("footer");
    if (thisFooter !== null) {
        thisFooter.innerHTML =
        "<nav class=\"navbar navbar-dark  \"></nav>";
    }
});