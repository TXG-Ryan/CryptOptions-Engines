// UPDATED 03/11/2020

var options_update_frequency     = 5000;
var spot_update_frequency        = 3000;
var stylechange_update_frequency = 3000;
var url_root                     = "https://www.cryptoptions.ie:443";

$(document).ready(function() {

    initialize_spot();

    initialize_options();

});

function initialize_spot()
{

    $.ajax({

        url : url_root + "/scripts/fxrates.php",
        data: {
            asset  : "GBP",
            ccy    : "USD"
        },
        type   : "POST",
        async  : true,
        context: document.body

    }).done(function (jresponse) {

        var response = JSON.parse( jresponse );
        document.getElementById( 'GBPUSD').value = response.data;

    });

    $.ajax({

        url : url_root + "/scripts/fxrates.php",
        data: {
            asset  : "EUR",
            ccy    : "USD"
        },
        type   : "POST",
        async  : true,
        context: document.body

    }).done(function (jresponse) {

        var response = JSON.parse( jresponse );
        document.getElementById( 'EURUSD').value = response.data;

    });

    setTimeout( setSpot, 1, 'BTC', 'USD' );
    setTimeout( setSpot, 1, 'ETH', 'USD' );
    setTimeout( setSpot, 1, 'BCH', 'USD' );
    setTimeout( setSpot, 1, 'LTC', 'USD' );

}

function setSpot( asset, ccy )
{

    $.ajax({

        url : url_root + "/scripts/grid_functions.php",
        data: {
            method : "get_spot",
            asset  : asset,
            ccy    : ccy
        },
        type   : "POST",
        async  : true,
        context: document.body

     })//.done(function (jresponse) {

    //     var response = JSON.parse( jresponse );

    //     if( response.data != document.getElementById( asset + '-' + ccy ).value )
    //     {

    //         var elem   = document.getElementById( asset + '-' + ccy);
    //         var nstyle = null;
    //         var ostyle = elem.style;
    //         if( response.data > elem.value )
    //             nstyle = "color: green; font-weight: bold;";
    //         else
    //             nstyle = "color: red; font-weight: bold;";
    //         elem.style = nstyle;
    //         setTimeout( setStyle, stylechange_update_frequency, elem, ostyle );

    //         var astart     = '<a onclick="alert(\'Go to www.cryptoptions.ie to trade\')">';
    //         var aend       = '</a>';
    //         elem.value     = Number(response.data);
    //         elem.innerHTML =  astart + numberWithCommas( formatNumber( Number(response.data), 2 ) ) + aend;

    //         var gbpusd = document.getElementById( 'GBPUSD').value;
    //         var eurusd = document.getElementById( 'EURUSD').value;

    //         document.getElementById( asset + '-GBP' ).value     = Number(response.data)/gbpusd;
    //         document.getElementById( asset + '-GBP' ).innerHTML = astart + numberWithCommas( formatNumber( Number(response.data)/gbpusd, 2 ) ) + aend;

    //         document.getElementById( asset + '-EUR' ).value     = Number(response.data)/eurusd;
    //         document.getElementById( asset + '-EUR' ).innerHTML = astart + numberWithCommas( formatNumber( Number(response.data)/eurusd, 2 ) ) + aend;

    //     }

    // });

    setTimeout( setSpot, spot_update_frequency, asset, ccy );

}

function initialize_options()
{

    var assets = ['BTC', 'ETH', 'BCH', 'LTC'];
    for( var i = 0; i < assets.length; i++ )
    {

        $.ajax({

            url : url_root + "/scripts/grid_functions.php",
            data: {
                method : "contractListLimit",
                asset  : assets[i]
            },
            type   : "POST",
            async  : true,
            context: document.body

        }).done(function (jresponse) {

            var response = JSON.parse( jresponse );
            for( var x = 0; x < response.data.expiries.length; x++ )
            {

                try {

                    document.getElementById(response.data.asset + '_EXPIRY_' + (x + 1).toString()).innerHTML = response.data.expiries[x];
                    for(var y = 0; y < response.data.strikes.length; y++) {

                        document.getElementById(response.data.asset + '_STRIKE_' + (x + 1).toString() + '_' + (y + 1).toString()).innerHTML = response.data.strikes[y];
                        setTimeout(setOptions, 1, build_id(response.data.asset, response.data.expiries[x], response.data.strikes[y], 'C', 'USD', 'ask_price'), x, y);
                        setTimeout(setOptions, 1, build_id(response.data.asset, response.data.expiries[x], response.data.strikes[y], 'P', 'USD', 'ask_price'), x, y);
                        setTimeout(setOptions, 1, build_id(response.data.asset, response.data.expiries[x], response.data.strikes[y], 'C', 'USD', 'delta'), x, y);
                        setTimeout(setOptions, 1, build_id(response.data.asset, response.data.expiries[x], response.data.strikes[y], 'P', 'USD', 'delta'), x, y);

                    }

                }
                catch( err ) {}

            }

        });

    }

}

function setOptions( id, x, y )
{

    $.ajax({

        url : url_root + "/scripts/grid_functions.php",
        data: {
            method      : "pricing",
            id          : id,
            pricing_ccy : 'USD'
        },
        type   : "POST",
        async  : true,
        indexValue: {
            p1: x.toString(),
            p2: y.toString()
        }

    }).done(function (jresponse) {

        var response = JSON.parse( jresponse );

        var strong  = '<strong>';
        var estrong = '</strong>';
        var astart  = '<a onclick="alert(\'Go to www.cryptoptions.ie to trade\')">';
        var aend    = '</a>';

        var x            = Number(this.indexValue.p1);
        var y            = Number(this.indexValue.p2);
        var asset        = response.id.split('|')[1];
        var pc           = response.id.split('|')[4];
        var prefix       = (pc == 'C' ? '' : '');                   {/* removed 'call:' and 'put:' tags var prefix. line 189 */}
        var ccy          = response.id.split('|')[5];
        var request_type = response.id.split('|')[6];

        try {

            if(request_type == 'bid_price' || request_type == 'ask_price') {

                let elem = document.getElementById(asset + '_GRID_' + (x + 1).toString() + '_' + (y + 1).toString() + '_' + pc + '_PV');
                if(response.data != elem.value) {

                    let nstyle = null;
                    let ostyle = elem.style;
                    if(response.data > elem.value)
                        nstyle = "color: green; font-weight: bold;";
                    else
                        nstyle = "color: red; font-weight: bold;";
                    elem.style = nstyle;
                    setTimeout(setStyle, stylechange_update_frequency, elem, ostyle);

                    elem.value     = response.data;
                    elem.innerHTML = astart + strong + prefix + estrong + formatNumber(response.data, 2) + ' ' + ccy + aend;

                }

            }
            else if(request_type == 'delta') {

                let elem = document.getElementById(asset + '_GRID_' + (x + 1).toString() + '_' + (y + 1).toString() + '_' + pc + '_' + request_type);
                if(response.data != elem.value) {

                    let nstyle = "font-weight: bold;";
                    let ostyle = elem.style;
                    elem.style = nstyle;
                    setTimeout(setStyle, stylechange_update_frequency, elem, ostyle);

                    elem.value     = response.data;
                    elem.innerHTML = astart + strong + '' + estrong + formatNumber(100 * response.data, 2) + '%' + aend;
                    {/* removed 'delta:' tag from line 228 ''*/
                    }

                }

            }

        }
        catch( err ) {}

    });

    setTimeout( setOptions, options_update_frequency , id, x, y );

}

function build_id( asset, expiry, strike, pc, pricing_ccy, code )
{

    return 'CO' + '|' + asset + '|' + expiry + '|' + strike + '|' + pc + '|' + pricing_ccy + '|' + code;

}

function numberWithCommas( x )
{

    var parts = x.toString().split(".");
    parts[0]  = parts[0].replace( /\B(?=(\d{3})+(?!\d))/g, "," );

    return parts.join( "." );

}

function formatNumber( number, precision )
{

    var s;

    if( number != undefined )
    {

        var n = number.toFixed( precision );

        var parts = n.split('.');
        var lhs   = parts[0];
        var rhs   = parts[1];

        if( parts.length == 2 )
        {
            if ( rhs.length < precision )
            {
                s = rhs;
                for( i = rhs.length; i < precision; i++ )
                    s = s + '0';
                return lhs + '.' + s;
            }
            else
                return n;
        }
        else
        {
            s = '';
            for( i = 0; i < precision; i++ )
                s = s + '0';
            return lhs + '.' + s;
        }

    }
    else
        return 0;

}

function setStyle( elem, style )
{

    elem.style = style;

}


