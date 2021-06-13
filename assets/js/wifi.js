"use strict";
function DebugTime(){
    function addZero(i) {
        if (i < 10) {
        i = "0" + i;
        }
        return i;
    }
    
    function timeNow() {
        let time;
        let d = new Date();
        let h = addZero(d.getHours());
        let m = addZero(d.getMinutes());
        let s = addZero(d.getSeconds());
        return time = h + ":" + m + ":" + s;
    }
console.log(timeNow());
}
DebugTime();


