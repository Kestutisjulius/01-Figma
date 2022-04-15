function display() {  
    alert("Hello Class BIT-35!");  
    }  

    function startTime() {
        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();
        m = checkTime(m);
        s = checkTime(s);
        document.getElementById('time').innerHTML =
        h + ":" + m + ":" + s;
        var t = setTimeout(startTime, 500);
    }
    function checkTime(i) {
        if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
        return i;
    }

    var timeDisplay = document.getElementById("date");

    function refreshTime() {
    var dateString = new Date().toLocaleString("en-US", {timeZone: "Europe/Vilnius"});
    var formattedString = dateString.replace(", ", " - ");
    timeDisplay.innerHTML = formattedString;
    }

setInterval(refreshTime, 1000);