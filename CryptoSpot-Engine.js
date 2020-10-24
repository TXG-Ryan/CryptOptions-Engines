var DELAY = 5;
var DP = 3;
var coins = [
	"ADAUSDT",
	"BATUSDT",
	"BNBUSDT",
	"BTCUSDT",
	"ETHUSDT",
	"LINKUSDT",
	"LTCUSDT",
	"XRPUSDT",
	"TRXUSDT",
	"OMGUSDT",
];

async function getPrice(coin) {
	const response = await fetch(
		"https://api.binance.com/api/v3/ticker/24hr?symbol=" + coin
	);
	const data = await response.json();
	const { prevClosePrice, priceChangePercent } = data;

	var lc_coin = coin.toLowerCase();

	//if (priceChangePercent > 0)
	//	document.getElementById("24hr-" + lc_coin).style.color = "green";

	// Coin Listing Panel
	document.getElementById("price-" + lc_coin).textContent = numberWithCommas(
		Number(prevClosePrice).toFixed(DP)
	);

	document.getElementById("24hr-" + lc_coin).textContent =
		priceChangePercent + "%";
}

for (var i = 0; i < coins.length; i++) {
	getPrice(coins[i]);
	setInterval(getPrice, 1000 * DELAY, coins[i]);
}
