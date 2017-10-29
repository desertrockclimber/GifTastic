$(function(){
	gifInfo(topics, 'searchButton', '#gifReturns');
	console.log("page loaded");
})
// Array for comedians to search in Giphy
var topics = ["Chris-Farley", "Mike-Myers", "Jim-Carrey", "Robin-Williams","Bill-Murray", "Will-Ferrell", "Dan-Akroyd", "Chevy-Chase", "Eddie-Murphy", "Gene-Wilder", "Billy-Crystal", "Phil-Hartman", "John-Belushi"];

// Take topics in array and add buttons
	function gifInfo (topics, classToAdd, areaToAddTo){
		$(areaToAddTo).empty();
		for (var i = 0; i<topics.length; i++){
			var a = $('<button>');
			a.addClass(classToAdd);
			a.attr('data-type', topics[i]);
      a.attr('type', "button");
			a.text(topics[i]);
			$(areaToAddTo).append(a);

		
		}
	}
	$(document).on('click', '.searchButton', function() {
     	var type = $(this).data('type');
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + type + "&api_key=dc6zaTOxFJmzC&limit=5";
      console.log(queryURL);

      $.ajax({
      url: queryURL, method: "GET" })
      .done(function(response){
      for (var i = 0; i<response.data.length; i++){
        var searchDiv = $('<div class= "search-item">');
        var rating = response.data[i].rating;
        var rating = response.data[i].rating;
        var searchDiv = $('<div class= "search-item">');
        var title = response.data[i].title;
        var title = response.data[i].title;

        var p = $('<p>').text("Title: " +title + " --  Rated: " +rating);

        var searchDiv = $('<div class= "search-item">');
        var title = response.data[i].title;
        var title = response.data[i].title;
      

        var animated = response.data[i].images.fixed_height.url;
        var still = response.data[i].images.fixed_height_still.url;
        var image = $('<img>');
        image.attr('src', still);
        image.attr('data-still', still);
        image.attr('data-animated',animated);
        image.attr('data-state', 'still');
        image.addClass('searchImage');
         searchDiv.append(image);
        searchDiv.append(p);
        $('#gifs').append(searchDiv);



      }
    });
});

$(document).on("click", '.searchImage' , function(){
  var state = $(this).attr('data-state');
  if (state == 'still'){
    $(this).attr('src' ,$(this).data('animated'));
    $(this).attr('data-state' , 'animated');


  }else {
    $(this).attr('src' , $(this).data('still'));
    $(this).attr('data-state' , 'still');

  }

})


$('#button').on('click', function(){
  var newSearch = $('#search-input').val();
  topics.push(newSearch);
  gifInfo(topics, 'searchButton', '#gifReturns');
  return false;
  
})


	