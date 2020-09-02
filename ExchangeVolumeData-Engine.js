function loadExVolPairsUSD() {
	var url =
		"https://min-api.cryptocompare.com/data/top/exchanges?limit=1000&fsym=BTC&tsym=USD";
	var request = new XMLHttpRequest();
	request.open("GET", url, true);
	request.onload = function () {
		var json = JSON.parse(this.responseText);
		var json_results = json.Data;
		//function comparator( a, b ) {
		//    return Number(b.DISPLAY.USD.VOLUME24HOURTO) - Number(a.DISPLAY.USD.VOLUME24HOURTO);
		//}
		//json_results.sort( comparator );
		var html_string = "<table>";
		for (var i = 0; i < json_results.length; i++)
			html_string +=
				"<tr><td>" +
				json_results[i].DATA.exchange +
				"</td><td>" +
				json_results[i].DATA.fromSymbol +
				"</td><td>" +
				json_results[i].DATA.toSymbol +
				"</td><td>" +
				json_results[i].DATA.price +
				"</td><td>" +
				json_results[i].DATA.volume24h +
				"</td><td>" +
				json_results[i].DATA.volume24hTo +
				"</td><td>" +
				json_results[i].DATA.exchangeGrade +
				"</td></tr>";
		html_string += "</table>";
		document.getElementById("resultsExVolPairsUSD").innerHTML = html_string;
	};
	request.send();
}

function onLoad() {
	loadExVolPairsUSD();
}

window.onload = onLoad;
