
function add_value(input, character) {
	if(input.value == null || input.value == "0")
		input.value = character
	else
		input.value += character
}

function checkNum(str) {
	for (var i = 0; i < str.length; i++) {
		var ch = str.substring(i, i+1)
		if (ch < "0" || ch > "9") {
			if (ch != "/" && ch != "*" && ch != "+" && ch != "-" && ch != "."
				&& ch != "(" && ch!= ")") {
				alert("invalid entry!")
				return false
				}
			}
		}
		return true
}

function answere(form) {
	form.display.value = eval(form.display.value)
}
 
function deleteChar(input) {
	input.value = input.value.substring(0, input.value.length - 1)
}
 
function changeSign(input) {
	if(input.value.substring(0, 1) == "-")
		input.value = input.value.substring(1, input.value.length)
	else
		input.value = "-" + input.value
}

function sqrt(form) {
	form.display.value = Math.sqrt(form.display.value);
}

 
function square(form) {
	form.display.value = eval(form.display.value) * eval(form.display.value)
}
 

