var numOne;
var numTwo;

function exerciseNum(){
	numOne = document.getElementById("numOne").value;
	numTwo = document.getElementById("numTwo").value;
}

function addCalc(numOne,numTwo){
	var result = parseFloat(numOne) + parseFloat(numTwo),
 	string = numOne + ' + ' + numTwo + ' = ' result;
	return string
}

function subtCalc(numOne, numTwo){
	var result = parseFloat(numOne) - parseFloat(numTwo),
		string = numOne + '-' + numTwo + '=' + result;
	return string
}

function multCalc(numOne, numTwo){
	var result = parseFloat(numOne) * parseFloat(numTwo),
		string = numOne + '*' + numTwo + '=' + result;
	return string
}

function divCalc(numOne, numTwo){
	var result = parseFloat(numOne) / parseFloat(numTwo),
		string = numOne + '/' + numTwo + '=' + result;
	return string
}


var input1 = numOne
var input2 = numTwo
var output = result

function populatehtml(input1, input2){

document.getElementById("add").onclick = function(){poppulatehtml(addCalc)};
document.getElementById("subt").onclick = function(){poppulatehtml(subtCalc)};
document.getElementById("mult").onclick = function(){poppulatehtml(multCalc)};
document.getElementById("div").onclick = function(){poppulatehtml(divCalc)};

}

