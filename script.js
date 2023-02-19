<script>
function timeFunction() {
    const myTime = new Date();
    var h = myTime.getHours();
    var m = myTime.getMinutes();
    var s = myTime.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    
    setTimeout(timeFunction, 1000);
    document.getElementById("time").innerHTML = 
    h + ":" + m + ":" + s;
}

function checkTime(i) {
    if (i < 10) {i = "0" + 1}
    return i;
}
</script>
