///  Calling API and modeling data for each chart ///
const btcData = async () => {
	const response = await fetch(
		"https://min-api.cryptocompare.com/data/v2/histoday?fsym=BTC&tsym=USD&limit=119&api_key=0646cc7b8a4d4b54926c74e0b20253b57fd4ee406df79b3d57d5439874960146"
	);
	const json = await response.json();
	const data = json.Data.Data;
	const times = data.map((obj) => obj.time);
	const prices = data.map((obj) => obj.high);
	return {
		times,
		prices,
	};
};

/// Charts ///
let createBtcChart;

async function printBtcChart() {
	let { times, prices } = await btcData();

	let btcChart = document.getElementById("btcChart").getContext("2d");

	let gradient = btcChart.createLinearGradient(0, 0, 0, 400);

	gradient.addColorStop(0, "rgba(247,147,26,.5)");
	gradient.addColorStop(0.75, "rgba(255,193,119,0)");

	Chart.defaults.global.defaultFontFamily = "Red Hat Text";
	Chart.defaults.global.defaultFontSize = 12;

	createBtcChart = new Chart(btcChart, {
		type: "line",
		data: {
			labels: times,
			datasets: [
				{
					label: "$",
					data: prices,
					backgroundColor: gradient,
					borderColor: "rgba(247,147,26,1)",
					borderJoinStyle: "round",
					borderCapStyle: "round",
					borderWidth: 3,
					pointRadius: 0,
					pointHitRadius: 10,
					lineTension: 0.2,
				},
			],
		},

		options: {
			title: {
				display: false,
				text: "Heckin Chart!",
				fontSize: 35,
			},

			legend: {
				display: false,
			},

			layout: {
				padding: {
					left: 0,
					right: 0,
					top: 0,
					bottom: 0,
				},
			},

			scales: {
				xAxes: [
					{
						display: false,
						gridLines: {},
					},
				],
				yAxes: [
					{
						display: false,
						gridLines: {},
					},
				],
			},

			tooltips: {
				callbacks: {
					//This removes the tooltip title
					title: function () {},
				},
				//this removes legend color
				displayColors: false,
				yPadding: 10,
				xPadding: 10,
				position: "nearest",
				caretSize: 10,
				backgroundColor: "rgba(255,255,255,.9)",
				bodyFontSize: 15,
				bodyFontColor: "#303030",
			},
		},
	});
}

// Update current price //
async function updateBitcoinPrice() {
	let { times, prices } = await btcData();
	let currentPrice = prices[prices.length - 1].toFixed(2);

	document.getElementById("btcPrice").innerHTML = "$" + currentPrice;
}

updateBitcoinPrice();
printBtcChart();
