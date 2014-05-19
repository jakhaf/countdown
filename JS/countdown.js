//Define the enddate
var endDate = new Date('May 20, 2014 16:01:00');
console.log(endDate);

// get time derivates
var now = new Date();
console.log(now);

var remMsec = endDate - now;
console.log(remMsec + " ms");

var remSec = remMsec * 0.001;
console.log(remSec + " s");

var remMin = remSec * 0.0166666667;
console.log(remMin + " m");

var remHr = remMin * 0.0166666667;
console.log(remHr + " h");

var remDay = remHr * 0.0416666667;
console.log(remDay + " d");

// rounding and combination

if (remDay < 1 && remHr < 1) {
	console.log("" + Math.floor(remMin-(Math.floor(remHr)*60)) + " minutes, " + Math.floor(remSec-(Math.floor(remMin)*60)) + " seconds and " + Math.floor(remMsec-(Math.floor(remSec)*1000)) + " msec");
} else if (remDay < 1) {
	console.log("" + Math.floor(remHr-(Math.floor(remDay)*24)) + " hours, " + Math.floor(remMin-(Math.floor(remHr)*60)) + " minutes, " + Math.floor(remSec-(Math.floor(remMin)*60)) + " seconds and " + Math.floor(remMsec-(Math.floor(remSec)*1000)) + " msec");		
} else {
	console.log("" + Math.floor(remDay) + " day(s), " + Math.floor(remHr-(Math.floor(remDay)*24)) + " hours, " + Math.floor(remMin-(Math.floor(remHr)*60)) + " minutes, " + Math.floor(remSec-(Math.floor(remMin)*60)) + " seconds and " + Math.floor(remMsec-(Math.floor(remSec)*1000)) + " msec");
};


/*else if (remDay < 1 && remHr < 1) {
	
} else if {
	console.log("" + )
}



console.log(remDay);

if (remHr % 24 <= 0) {
	console.log(remHr)
}*/

