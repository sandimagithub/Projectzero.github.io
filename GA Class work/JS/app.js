// Put all code in a window.onlad function

window.onload = function () {

	document.getElementById("get_info_button").addEventListener("click", function () {
		var myName = prompt("What is your name?");
		if (myName === null) {
			 return false;
		}
		else {
			document.getElementById ("name").innerHTML = myName; 

		}

	});
}
