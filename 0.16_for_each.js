var movies = [
	{
		title: "Shawshank Redemption",
		rating: 5,
		hasWatched: true
	},
	{
		title: "Avatar",
		rating: 4.5,
		hasWatched: false
	},
	{
		title: "Jurassic Park",
		rating: 1,
		hasWatched: true
	}
];

movies.forEach(function(movie) {
	if (movie.hasWatched) {
		console.log("You have watched \"" + movie.title + "\" - " + movie.rating + " stars");
	}
	else {
		console.log("You have not seen \"" + movie.title + "\" - " + movie.rating + " stars");
	}
})