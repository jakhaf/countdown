window.onload = function()
{
	// wrapped as function
	var countdown = function(){

		var el = document.getElementById(countdown);

		//Define the enddate //Define the enddate in this format 'May 25, 2014 19:00:00'
		var endDate = new Date('May 25, 2014 17:00:00');

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


		if (remDay < 2){
			var dd = "day";
		} else {
			var dd = "days";
		};

		if (remHr < 2){
			var hh = "hour";
		} else {
			var hh = "hours";
		};

		if (remMin < 2){
			var mm = "minute";
		} else {
			var mm = "minutes";
		};

		// rounding and combination
		if (remMsec < 0){
			var count = "No time left!"}
		else if (remDay < 1 && remHr < 1) {
			var count = ("<p>" + Math.floor(remMin-(Math.floor(remHr)*60)) + " " + mm + ", " + Math.floor(remSec-(Math.floor(remMin)*60)) + " seconds and " + Math.floor(remMsec-(Math.floor(remSec)*1000)) + " msec </p>");
		} else if (remDay < 1) {
			var count = ("" + Math.floor(remHr-(Math.floor(remDay)*24)) + " " + hh + ", " + Math.floor(remMin-(Math.floor(remHr)*60)) + " " + mm + ", " + Math.floor(remSec-(Math.floor(remMin)*60)) + " seconds and " + Math.floor(remMsec-(Math.floor(remSec)*1000)) + " msec");		
		} else {
			var count = ("" + Math.floor(remDay) + " " + dd + ", " + Math.floor(remHr-(Math.floor(remDay)*24)) + " " + hh + ", " + + Math.floor(remMin-(Math.floor(remHr)*60)) + " " + mm + ", " + Math.floor(remSec-(Math.floor(remMin)*60)) + " seconds and " + Math.floor(remMsec-(Math.floor(remSec)*1000)) + " msec");
		};
		//console.log(count);

		//innerHTML
		document.getElementById("countdown").innerHTML = String(count);


	};

	//refresher
	var countInterval = setInterval(countdown,1);
	
	//exec
	countdown();
};