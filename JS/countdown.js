var enddate = 'May 25, 2014 19:00:00';

// wrapped as function
var countdown = function(endDate){

// get time derivates
var now = new Date();
//console.log(now);
var remMsec = endDate - now;
//console.log(remMsec + " ms");
var remSec = remMsec * 0.001;
//console.log(remSec + " s");
var remMin = remSec * 0.0166666667;
//console.log(remMin + " m");
var remHr = remMin * 0.0166666667;
//console.log(remHr + " h");
var remDay = remHr * 0.0416666667;
//console.log(remDay + " d");

//day(s), hour(s), minute(s), improvement
if (Math.floor(remDay) <= 1){
	var dd = "day";
} else {
	var dd = "days";
};

if (Math.floor(remHr) <= 1){
	var hh = "hour";
} else {
	var hh = "hours";
};

if (Math.floor(remMin) <= 1){
	var mm = "minute";
} else {
	var mm = "minutes";
};


// rounding and combination

if (remDay < 1 && remHr < 1) {
	console.log("" + Math.floor(remMin-(Math.floor(remHr)*60)) + " " + mm + ", " + Math.floor(remSec-(Math.floor(remMin)*60)) + " seconds and " + Math.floor(remMsec-(Math.floor(remSec)*1000)) + " msec");
} else if (remDay < 1) {
	console.log("" + Math.floor(remHr-(Math.floor(remDay)*24)) + " " + hh + ", " + Math.floor(remMin-(Math.floor(remHr)*60)) + " " + mm + ", " + Math.floor(remSec-(Math.floor(remMin)*60)) + " seconds and " + Math.floor(remMsec-(Math.floor(remSec)*1000)) + " msec");		
} else {
	console.log("" + Math.floor(remDay) + " " + dd + ", " + Math.floor(remHr-(Math.floor(remDay)*24)) + " " + hh + ", " + + Math.floor(remMin-(Math.floor(remHr)*60)) + " " + mm + ", " + Math.floor(remSec-(Math.floor(remMin)*60)) + " seconds and " + Math.floor(remMsec-(Math.floor(remSec)*1000)) + " msec");
};
};

console.log(countdown('May 25, 2014 19:00:00')); //Define the enddate in this format 'May 25, 2014 19:00:00'