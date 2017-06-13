$(document).ready(function() {

var checklist = document.getElementById("checklist");
var items = checklist.querySelectorAll("li");
var input = checklist.querySelectorAll("input");

for (var i=0; i<items.length; i++) {
	items[i].addEventListener("click", editItem)
	input[i].addEventListener("blur", updateItem)
	input[i].addEventListener("keypress", itemKeypress)
}

function editItem() {
	this.className = "edit";
	var input = this.querySelector("input");
	input.focus();
	input.setSelectionRange(0, input.value.length);
}

function updateItem() {
	this.previousElementSibling.innerHTML = this.value;
	this.parentNode.className = "";
}

function itemKeypress(eventObject) {
	if (eventObject.keyCode === 13) {
		updateItem.call(this);
	}
}

var addButton = document.querySelector("#addButton");
addButton.addEventListener("click", addLi);

function addLi() {
	checklist.append('<li><span>blah</span><input value="blah"></li>')
}


})