var DELAY = 5;
var DP    = 4;
var coins = ['ADAUSDT', 'BATUSDT', 'BNBUSDT', 'BTCUSDT', 'ETHUSDT', 'LINKUSDT', 'LTCUSDT', 'XRPUSDT', 'TRXUSDT', 'OMGUSDT', 'BCHUSDT'];

async function getPrice( coin )
{

    const response = await fetch("https://api.binance.com/api/v3/ticker/24hr?symbol=" + coin );
    const data = await response.json();
    const { prevClosePrice, priceChangePercent, priceChange, highPrice, lowPrice, volume } = data;

    var lc_coin = coin.toLowerCase();

    // if ( priceChangePercent > 0 )
    //    document.getElementById( '24hr-' + lc_coin ).style.color = 'green';


    //if ( priceChange > 0 )
    // document.getElementById( '24hrPriceChange-' + lc_coin ).style.color = 'green';

    // Coin Listing Panel
    document.getElementById( 'price-' + lc_coin ).textContent = numberWithCommas(Number(prevClosePrice).toFixed(DP));
    document.getElementById( '24hr-' + lc_coin ).textContent = priceChangePercent + "%";
    document.getElementById( '24hrPriceChange-' + lc_coin ).textContent = numberWithCommas(Number(priceChange).toFixed(DP));

    // Coin Listing - More Info
    document.getElementById( 'highPrice-' + lc_coin ).textContent = numberWithCommas(Number(highPrice).toFixed(DP));
    document.getElementById( 'lowPrice-' + lc_coin ).textContent = numberWithCommas(Number(lowPrice).toFixed(DP));


    //var index = coin.indexOf( 'USDT' );
    var asset = coin.substr( 0, index );
    document.getElementById( 'volume-' + lc_coin ).textContent = numberWithCommas(Number(volume).toFixed(2) + ' ' + asset );

    setTimeout( getPrice, 1000*DELAY, coin );

}

function numberWithCommas( x )
{

    var parts = x.toString().split(".");
    parts[0]  = parts[0].replace( /\B(?=(\d{3})+(?!\d))/g, "," );

    return parts.join( "." );

}

for( var i = 0; i < coins.length; i++ )
    setTimeout( getPrice, 1, coins[i] );