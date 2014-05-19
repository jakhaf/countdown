//Define the enddate
var endDate = new Date('May 21, 2014 00:00:00');
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

if (remDay < 1) {
	console.log("" + Math.floor(remHr) + " hours ");
} else {
	console.log("" + Math.floor(remDay) + " day(s), " + Math.floor(remHr-(Math.floor(remDay)*24)) + " hours");
};






console.log(remDay);

if (remHr % 24 <= 0) {
	console.log(remHr)
}

