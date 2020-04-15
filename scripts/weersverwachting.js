
function getAPIdata() {

	var url = 'https://api.openweathermap.org/data/2.5/weather';
	var apiKey ='b5d3150d206e1545a95dcf4d04ff8eea';
	var city = document.getElementById('stad').value;

	var request = url + '?' + 'appid=' + apiKey + '&' + 'q=' + city;
	
	fetch(request)
	
	.then(function(response) {
		if(!response.ok) throw Error(response.statusText);
		return response.json();
	})
	
	.then(function(response) {
		onAPISucces(response);	
	})
	
	.catch(function (error) {
		onAPIError(error);
	});
}


function onAPISucces(response) {
	var type = response.weather[0].description;

	var degC = Math.floor(response.main.temp - 273.15);


	var weatherBox = document.getElementById('weersverwachting');
	weatherBox.innerHTML = degC + '&#176;C <br>' + type;
}


function onAPIError(error) {
	console.error('Fetch request failed', error);
	var weatherBox = document.getElementById('weersverwachting');
	weatherBox.innerHTML = 'No weather data available <br /> Did you enter a valid city?'; 
}

document.getElementById('geefWeer').onclick = function(){
	getAPIdata();
};
