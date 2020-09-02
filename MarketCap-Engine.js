function loadGainers() {
	var url =
		"https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
	var request = new XMLHttpRequest();
	request.open("GET", url, true);
	request.onload = function () {
		var json = JSON.parse(this.responseText);
		var json_results = json.Data;
		function comparator(a, b) {
			return (
				Number(b.DISPLAY.USD.CHANGEPCT24HOUR) -
				Number(a.DISPLAY.USD.CHANGEPCT24HOUR)
			);
		}
		json_results.sort(comparator);
		var html_string = "<table>";
		for (var i = 0; i < json_results.length; i++)
			html_string +=
				"<tr><td>" +
				json_results[i].CoinInfo.Name +
				"</td><td>" +
				json_results[i].DISPLAY.USD.PRICE +
				"</td><td>" +
				json_results[i].DISPLAY.USD.CHANGEPCT24HOUR +
				"</td></tr>";
		html_string += "</table>";
		document.getElementById("resultsGainers").innerHTML = html_string;
	};
	request.send();
}

function loadLosers() {
	var url =
		"https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
	var request = new XMLHttpRequest();
	request.open("GET", url, true);
	request.onload = function () {
		var json = JSON.parse(this.responseText);
		var json_results = json.Data;
		function comparator(a, b) {
			return (
				Number(a.DISPLAY.USD.CHANGEPCT24HOUR) -
				Number(b.DISPLAY.USD.CHANGEPCT24HOUR)
			);
		}
		json_results.sort(comparator);
		var html_string = "<table>";
		for (var i = 0; i < json_results.length; i++)
			html_string +=
				"<tr><td>" +
				json_results[i].CoinInfo.Name +
				"</td><td>" +
				json_results[i].DISPLAY.USD.PRICE +
				"</td><td>" +
				json_results[i].DISPLAY.USD.CHANGEPCT24HOUR +
				"</td></tr>";
		html_string += "</table>";
		document.getElementById("results-losers").innerHTML = html_string;
	};
	request.send();
}

function loadMarketcapUSD() {
	var url =
		"https://min-api.cryptocompare.com/data/top/mktcapfull?limit=100&tsym=USD";
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
				json_results[i].CoinInfo.Name +
				"</td><td>" +
				json_results[i].CoinInfo.FullName +
				"</td><td>" +
				json_results[i].DISPLAY.USD.PRICE +
				"</td><td>" +
				json_results[i].DISPLAY.USD.CHANGEPCT24HOUR +
				"</td><td>" +
				json_results[i].DISPLAY.USD.LOW24HOUR +
				"</td><td>" +
				json_results[i].DISPLAY.USD.HIGH24HOUR +
				"</td><td>" +
				json_results[i].DISPLAY.USD.VOLUME24HOURTO +
				"</td><td>" +
				json_results[i].DISPLAY.USD.MKTCAP +
				"</td></tr>";
		html_string += "</table>";
		document.getElementById("resultsMarketcapUSD").innerHTML = html_string;
	};
	request.send();
}

function loadMarketcapGBP() {
	var url =
		"https://min-api.cryptocompare.com/data/top/mktcapfull?limit=100&tsym=GBP";
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
				json_results[i].CoinInfo.Name +
				"</td><td>" +
				json_results[i].CoinInfo.FullName +
				"</td><td>" +
				json_results[i].DISPLAY.GBP.PRICE +
				"</td><td>" +
				json_results[i].DISPLAY.GBP.CHANGEPCT24HOUR +
				"</td><td>" +
				json_results[i].DISPLAY.GBP.LOW24HOUR +
				"</td><td>" +
				json_results[i].DISPLAY.GBP.HIGH24HOUR +
				"</td><td>" +
				json_results[i].DISPLAY.GBP.VOLUME24HOURTO +
				"</td><td>" +
				json_results[i].DISPLAY.GBP.MKTCAP +
				"</td></tr>";
		html_string += "</table>";
		document.getElementById("resultsMarketcapGBP").innerHTML = html_string;
	};
	request.send();
}

function loadMarketcapEUR() {
	var url =
		"https://min-api.cryptocompare.com/data/top/mktcapfull?limit=100&tsym=EUR";
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
				json_results[i].CoinInfo.Name +
				"</td><td>" +
				json_results[i].CoinInfo.FullName +
				"</td><td>" +
				json_results[i].DISPLAY.EUR.PRICE +
				"</td><td>" +
				json_results[i].DISPLAY.EUR.CHANGEPCT24HOUR +
				"</td><td>" +
				json_results[i].DISPLAY.EUR.LOW24HOUR +
				"</td><td>" +
				json_results[i].DISPLAY.EUR.HIGH24HOUR +
				"</td><td>" +
				json_results[i].DISPLAY.EUR.VOLUME24HOURTO +
				"</td><td>" +
				json_results[i].DISPLAY.EUR.MKTCAP +
				"</td></tr>";
		html_string += "</table>";
		document.getElementById("resultsMarketcapEUR").innerHTML = html_string;
	};
	request.send();
}

function loadMarketcapBTC() {
	var url =
		"https://min-api.cryptocompare.com/data/top/mktcapfull?limit=100&tsym=BTC";
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
				json_results[i].CoinInfo.Name +
				"</td><td>" +
				json_results[i].CoinInfo.FullName +
				"</td><td>" +
				json_results[i].DISPLAY.BTC.PRICE +
				"</td><td>" +
				json_results[i].DISPLAY.BTC.CHANGEPCT24HOUR +
				"</td><td>" +
				json_results[i].DISPLAY.BTC.LOW24HOUR +
				"</td><td>" +
				json_results[i].DISPLAY.BTC.HIGH24HOUR +
				"</td><td>" +
				json_results[i].DISPLAY.BTC.VOLUME24HOURTO +
				"</td><td>" +
				json_results[i].DISPLAY.BTC.MKTCAP +
				"</td></tr>";
		html_string += "</table>";
		document.getElementById("resultsMarketcapBTC").innerHTML = html_string;
	};
	request.send();
}

function loadMarketcapETH() {
	var url =
		"https://min-api.cryptocompare.com/data/top/mktcapfull?limit=100&tsym=ETH";
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
				json_results[i].CoinInfo.Name +
				"</td><td>" +
				json_results[i].CoinInfo.FullName +
				"</td><td>" +
				json_results[i].DISPLAY.ETH.PRICE +
				"</td><td>" +
				json_results[i].DISPLAY.ETH.CHANGEPCT24HOUR +
				"</td><td>" +
				json_results[i].DISPLAY.ETH.LOW24HOUR +
				"</td><td>" +
				json_results[i].DISPLAY.ETH.HIGH24HOUR +
				"</td><td>" +
				json_results[i].DISPLAY.ETH.VOLUME24HOURTO +
				"</td><td>" +
				json_results[i].DISPLAY.ETH.MKTCAP +
				"</td></tr>";
		html_string += "</table>";
		document.getElementById("resultsMarketcapETH").innerHTML = html_string;
	};
	request.send();
}

function loadMarketcapUSDT() {
	var url =
		"https://min-api.cryptocompare.com/data/top/mktcapfull?limit=100&tsym=USDT";
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
				json_results[i].CoinInfo.Name +
				"</td><td>" +
				json_results[i].CoinInfo.FullName +
				"</td><td>" +
				json_results[i].DISPLAY.USDT.PRICE +
				"</td><td>" +
				json_results[i].DISPLAY.USDT.CHANGEPCT24HOUR +
				"</td><td>" +
				json_results[i].DISPLAY.USDT.LOW24HOUR +
				"</td><td>" +
				json_results[i].DISPLAY.USDT.HIGH24HOUR +
				"</td><td>" +
				json_results[i].DISPLAY.USDT.VOLUME24HOURTO +
				"</td><td>" +
				json_results[i].DISPLAY.USDT.MKTCAP +
				"</td></tr>";
		html_string += "</table>";
		document.getElementById("resultsMarketcapUSDT").innerHTML = html_string;
	};
	request.send();
}

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
				json_results[i].exchange +
				"</td><td>" +
				json_results[i].fromSymbol +
				"</td><td>" +
				json_results[i].toSymbol +
				"</td><td>" +
				json_results[i].price +
				"</td><td>" +
				json_results[i].volume24h +
				"</td><td>" +
				json_results[i].volume24hTo +
				"</td><td>" +
				json_results[i].exchangeGrade +
				"</td></tr>";
		html_string += "</table>";
		document.getElementById("resultsExVolPairsUSD").innerHTML = html_string;
	};
	request.send();
}

function loadExVolPairsGBP() {
	var url =
		"https://min-api.cryptocompare.com/data/top/exchanges?limit=1000&fsym=BTC&tsym=GBP";
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
				json_results[i].exchange +
				"</td><td>" +
				json_results[i].fromSymbol +
				"</td><td>" +
				json_results[i].toSymbol +
				"</td><td>" +
				json_results[i].price +
				"</td><td>" +
				json_results[i].volume24h +
				"</td><td>" +
				json_results[i].volume24hTo +
				"</td><td>" +
				json_results[i].exchangeGrade +
				"</td></tr>";
		html_string += "</table>";
		document.getElementById("resultsExVolPairsGBP").innerHTML = html_string;
	};
	request.send();
}

function loadExVolPairsEUR() {
	var url =
		"https://min-api.cryptocompare.com/data/top/exchanges?limit=1000&fsym=BTC&tsym=EUR";
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
				json_results[i].exchange +
				"</td><td>" +
				json_results[i].fromSymbol +
				"</td><td>" +
				json_results[i].toSymbol +
				"</td><td>" +
				json_results[i].price +
				"</td><td>" +
				json_results[i].volume24h +
				"</td><td>" +
				json_results[i].volume24hTo +
				"</td><td>" +
				json_results[i].exchangeGrade +
				"</td></tr>";
		html_string += "</table>";
		document.getElementById("resultsExVolPairsEUR").innerHTML = html_string;
	};
	request.send();
}

function loadExVolPairsBTC() {
	var url =
		"https://min-api.cryptocompare.com/data/top/exchanges?limit=1000&fsym=BTC&tsym=BTC";
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
				json_results[i].exchange +
				"</td><td>" +
				json_results[i].fromSymbol +
				"</td><td>" +
				json_results[i].toSymbol +
				"</td><td>" +
				json_results[i].price +
				"</td><td>" +
				json_results[i].volume24h +
				"</td><td>" +
				json_results[i].volume24hTo +
				"</td><td>" +
				json_results[i].exchangeGrade +
				"</td></tr>";
		html_string += "</table>";
		document.getElementById("resultsExVolPairsBTC").innerHTML = html_string;
	};
	request.send();
}

function loadExVolPairsETH() {
	var url =
		"https://min-api.cryptocompare.com/data/top/exchanges?limit=1000&fsym=BTC&tsym=BTC";
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
				json_results[i].exchange +
				"</td><td>" +
				json_results[i].fromSymbol +
				"</td><td>" +
				json_results[i].toSymbol +
				"</td><td>" +
				json_results[i].price +
				"</td><td>" +
				json_results[i].volume24h +
				"</td><td>" +
				json_results[i].volume24hTo +
				"</td><td>" +
				json_results[i].exchangeGrade +
				"</td></tr>";
		html_string += "</table>";
		document.getElementById("resultsExVolPairsETH").innerHTML = html_string;
	};
	request.send();
}

function loadExVolPairsUSDT() {
	var url =
		"https://min-api.cryptocompare.com/data/top/exchanges?limit=1000&fsym=BTC&tsym=BTC";
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
				json_results[i].exchange +
				"</td><td>" +
				json_results[i].fromSymbol +
				"</td><td>" +
				json_results[i].toSymbol +
				"</td><td>" +
				json_results[i].price +
				"</td><td>" +
				json_results[i].volume24h +
				"</td><td>" +
				json_results[i].volume24hTo +
				"</td><td>" +
				json_results[i].exchangeGrade +
				"</td></tr>";
		html_string += "</table>";
		document.getElementById("resultsExVolPairsUSDT").innerHTML = html_string;
	};
	request.send();
}

function onLoad() {
	loadGainers();
	loadLosers();

	loadMarketcapUSD();
	loadMarketcapGBP();
	loadMarketcapEUR();
	loadMarketcapBTC();
	loadMarketcapETH();
	loadMarketcapUSDT();

	loadExVolPairsUSD();
	loadExVolPairsGBP();
	loadExVolPairsEUR();
	loadExVolPairsBTC();
	loadExVolPairsETH();
	loadExVolPairsUSDT();

	//setInterval(onLoad, 120000);
}

window.onload = onLoad;
