var start;

function addRestaurantListener(){
  startBtn = document.getElementById('start-random-button');
  startBtn.addEventListener("click", function(){
  	  start = setInterval(randomFood,200);
  	  if(!document.getElementById('word')){
		restaurantString = wordCreate();
		getBtn = document.getElementById('get-restaurant-button');
		getBtn.parentNode.insertBefore(restaurantString,getBtn.nextSibling);
	  }
	  restaurantString.style.display = 'none'
	  getBtn = document.getElementById('get-restaurant-button');
	  getBtn.addEventListener("click", getRestaurant);
  })
}

function getRestaurant(){
	clearInterval(start)
	var restaurantName = document.getElementById('restaurant').innerHTML;
	var restaurantString = document.getElementById('word')
	restaurantString.innerHTML = "Great, lets eat " + restaurantName + "!!!"
	restaurantString.style.display = "inline"
}

function wordCreate(){
	createWord = document.createElement('p');
	createWord.setAttribute('id','word');
	return createWord
}

function randomFood(){
	restaurantArr = ["nasi kukus", "fish head noodle", "uncle don", "chicken rice"]
	var randomNumber = Math.floor(Math.random()*restaurantArr.length)
	document.getElementById('restaurant').innerHTML = restaurantArr[randomNumber]
}

// wait for DOM content to load before binding an event
document.addEventListener('DOMContentLoaded', addRestaurantListener);