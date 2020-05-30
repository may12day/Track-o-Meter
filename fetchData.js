fetch('https://api.covid19india.org/data.json')
	.then(response => response.json())
	.then(function(data) {
		appendData(data.statewise[0]);
	})
	.catch(err => console.error('Error: ', err));
	
	function numberWithCommas(x) {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}
		
function appendData(data) {
	var mainContainer = document.getElementById("covid19Data");
	var div = document.createElement("div");
	div.innerHTML = 'Confirmed: ' + numberWithCommas(data.confirmed) + '<br><br>Active: ' + numberWithCommas(data.active) + '<br><br>Recovered: ' + 
					numberWithCommas(data.recovered) + '<br><br>Deceased: ' + numberWithCommas(data.deaths);
	mainContainer.appendChild(div);
}