function Hotel(name, rooms, booked) {
	this.name = name;
	this.rooms = rooms;
	this.booked = booked;
	this.checkAvailability = function() {
		return this.rooms - this.booked;
	};
};

var rri = new Hotel("Red Roof Inn", 250, 230);
var alex = new Hotel("The Alexander", 500, 150);

var hotels = [rri, alex];

function showAllHotelsInfo() {
	for (var h in hotels) {
		var hotelName = hotels[h].name;
		var hotelHtmlText = document.createTextNode(hotelName);    //creates a "backpack" with the hotelname inside, to be handed to some part of the DOM (such as the LI's)
		var listItem = document.createElement("li");
		listItem.appendChild(hotelHtmlText);
		document.getElementById("hotels").appendChild(listItem);

		// var listItem = document.createElement("li").appendChild( document.createTextNode(hotels[h].name) );
		// document.getElementById("hotels").appendChild(listItem);
	}
}

showAllHotelsInfo();
















