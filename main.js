/* setInterval(function(){
alert("This is 4 seconds")
}, 4000)
remember: 1000ms is one second
first argument = an anonymous function 
this makes "This is 4 seconds" every 4 seconds!*/
// var myArray = ["red", "pink", "green", "yellow", "blue", "black", "white"];
$(document).ready(function(){
	setInterval(function(){
		$("body").show();
		var myTime = new Date();
		var minutes = myTime.getMinutes();
		var hours = myTime.getHours();
		document.getElementById("minutes").innerHTML = minutes 
		// if (minutes%2 === 0) {
		// 	document.getElementById("clock").style.color = "white"
		// } else {
		// 	document.getElementById("clock").style.color = "black"
		// }
		// if (minutes%5 === 0) {
		// 	document.getElementById("body").style.backgroundColor ="#" + Math.random().toString(16).slice(2, 8)
		// }
		// if (minutes === 0) {
		// 	document.getElementById("clock").style.backgroundColor = myArray [Math.floor(Math.random()*myArray.length)];
		// }
		if (hours>12) {
			document.getElementById("hours").innerHTML = hours - 12
		} else {
			document.getElementById("hours").innerHTML = hours 
		}
		if (minutes <= 9){
			document.getElementById("minutes").innerHTML = minutes = "0"+minutes
		}
		if (hours < 12) {
			document.getElementById("message").innerHTML ="Good Morning";
			document.body.style.background = "white url('morning.jpg') center center  fixed no-repeat";
			document.body.style.backgroundSize = "cover";
			document.getElementById("message").style.color = "white";
			document.getElementById("clock").style.color = "white";

		} else if (hours >= 12 && hours <17) {
			document.getElementById("message").innerHTML ="Good Afternoon";
			document.body.style.background = "white url('afternoon.jpg') center center fixed no-repeat";
			document.body.style.backgroundSize = "cover";
			document.getElementById("message").style.color = "black";
			document.getElementById("clock").style.color = "black";

		} else if (hours >= 17 && hours <=23) {
			document.getElementById("message").innerHTML ="Good Evening";
			document.body.style.background = "white url('evening.jpg') center center fixed no-repeat";
			document.body.style.backgroundSize = "cover";
			document.getElementById("message").style.color = "white";
			document.getElementById("clock").style.color = "white";
		}

	}, 1000);
});;

