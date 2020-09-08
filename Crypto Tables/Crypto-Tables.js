/* Bigger Winners */
<div id="main-widget"></div>;
window.X4CryptoTables = window.X4CryptoTables || [];
window.X4CryptoTables.push({
	type: "coinTable",
	selector: "#main-widget",
	margins: {top: 0, bottom: 0},
	colors: {
		primary: "rgba(255,255,255,1)",
		badgeGreenText: "rgba(255,255,255,1)",
		badgeGreenBack: "rgba(5,177,105,1)",
		badgeRedText: "rgba(255,255,255,1)",
		badgeRedBack: "rgba(223,95,103,1)",
		coin1: "rgba(0,176,255,1)",
	},
	controls: {
		coinTable: {
			columns: {
				rank: {badge: {visible: false}},
				mktcap: {visible: false},
				price: {format: {precision: "auto"}},
				vwap: {visible: false},
				supply: {visible: false},
				volume: {visible: false},
				actions: {visible: false},
			},
			background: {table: false, sort: true},
			flashes: {threshold: 0.0015},
			strategy: "exclude_all",
			theme: "material",
			subtheme: "standard",
			except: [
				"bitcoin",
				"ethereum",
				"ripple",
				"chainlink",
				"bitcoin-cash",
				"polkadot",
				"binance-coin",
				"litecoin",
				"bitcoin-sv",
				"eos",
				"cardano",
				"tron",
				"tezos",
				"stellar",
				"monero",
				"cosmos",
				"neo",
				"nem",
				"huobi-token",
				"iota",
			],
		},
		fiatSelect: {visible: false},
		perPageSelect: {visible: false},
		searchInput: {visible: false},
		pagerBlock: {visible: false},
		loader: {size: 148},
	},
	values: {sort: "change24h:desc", perPage: 10},
});

/* Bigger Losers */
<div id="main-widget"></div>;
window.X4CryptoTables = window.X4CryptoTables || [];
window.X4CryptoTables.push({
	type: "coinTable",
	selector: "#main-widget",
	margins: {top: 0, bottom: 0},
	colors: {
		primary: "rgba(255,255,255,1)",
		badgeGreenText: "rgba(255,255,255,1)",
		badgeGreenBack: "rgba(5,177,105,1)",
		badgeRedText: "rgba(255,255,255,1)",
		badgeRedBack: "rgba(223,95,103,1)",
		coin1: "rgba(0,176,255,1)",
	},
	controls: {
		coinTable: {
			columns: {
				rank: {badge: {visible: false}},
				mktcap: {visible: false},
				price: {format: {precision: "auto"}},
				vwap: {visible: false},
				supply: {visible: false},
				volume: {visible: false},
				actions: {visible: false},
			},
			background: {table: false, sort: true},
			flashes: {threshold: 0.0015},
			strategy: "exclude_all",
			theme: "material",
			subtheme: "standard",
			except: [
				"bitcoin",
				"ethereum",
				"ripple",
				"chainlink",
				"bitcoin-cash",
				"polkadot",
				"binance-coin",
				"litecoin",
				"bitcoin-sv",
				"eos",
				"cardano",
				"tron",
				"tezos",
				"stellar",
				"monero",
				"cosmos",
				"neo",
				"nem",
				"huobi-token",
				"iota",
			],
		},
		fiatSelect: {visible: false},
		perPageSelect: {visible: false},
		searchInput: {visible: false},
		pagerBlock: {visible: false},
		loader: {size: 148},
	},
	values: {sort: "change24h:asc", perPage: 10},
});

/* Market Cap Tables */

// USD //
<div id="main-widget"></div>;
window.X4CryptoTables = window.X4CryptoTables || [];
window.X4CryptoTables.push({
	type: "coinTable",
	selector: "#main-widget",
	subtheme: "standard",
	margins: {top: 0, bottom: 0},
	colors: {primary: "rgba(255,255,255,1)"},
	controls: {
		coinTable: {
			columns: {rank: {badge: {visible: false}}},
			actions: {buy: {url: ""}},
			background: {table: false, sort: true},
			flashes: {threshold: 0.0015},
			colors: {
				badgeGreenText: "rgba(255,255,255,1)",
				badgeGreenBack: "rgba(5,177,105,1)",
				badgeRedBack: "rgba(223,95,103,1)",
				badgeRedText: "rgba(255,255,255,1)",
				accent: "rgba(0,176,255,1)",
			},
		},
		fiatSelect: {visible: false},
		perPageSelect: {visible: false},
		searchInput: {visible: false},
		lineChart: {watermark: {template: "TXG [coin1]/[fiat]"}, colors: {coin1: "rgba(42,90,218,1)"}},
	},
	values: {sort: "mktcap:desc"},
});
