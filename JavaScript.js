
var ID1 = 0;
var ID2 = 0;
var ID3 = 0;
var ID4 = 0;
var sec = 1;
var small_sec = 1;
var min = 1;
var hour = 1;

function printHour()
{
    document.getElementById("hour").innerHTML = hour;
    hour++;
}

function printMinute()
{
    document.getElementById("minute").innerHTML = min;
    min++;
    if(min == 60)
        min = 0;
}

function printSeconds()
{
    document.getElementById("second").innerHTML = sec;
    sec++;
    if(sec == 60)
        sec = 0;
}

function printSmallSeconds()
{
    document.getElementById("small-second").innerHTML = small_sec;
    small_sec++;
    if(small_sec == 100)
        small_sec = 0;
}



function start()
{
    ID1 = window.setInterval(printSmallSeconds, 10);
    ID2 = window.setInterval(printSeconds , 1000 );
    ID3 = window.setInterval(printMinute, 60000);
    ID4 = window.setInterval(printHour, 3600000)

    document.getElementById("start-id").disabled = true;
    document.getElementById("stop-id").disabled = false;
}

function stop()
{
    window.clearInterval(ID1);
    window.clearInterval(ID2);
    window.clearInterval(ID3);
    window.clearInterval(ID4);

    document.getElementById("stop-id").disabled = true;
    document.getElementById("start-id").disabled = false;
}

//document.write("<h2>"+ cars[4] +"</h2>");