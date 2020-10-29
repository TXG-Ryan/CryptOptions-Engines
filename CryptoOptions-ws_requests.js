
var ws_url = 'wss://cryptoptions.ie:8081';
var assets = [ 'BTC', 'ETH', 'BCH', 'LTC' ];

function initial_spot( asset, ccy )
{

    var data   = new Object();
    data.asset = asset;
    data.ccy   = ccy;

    var payload  = new Object();
    payload.url  = '/scripts/fxrates.php';
    payload.data = data;

    var header       = new Object();
    header.msg_type  = 'INITIALSPOT' + '|' + asset + '|' + ccy;
    header.target_id = asset + ccy;

    var msg     = new Object();
    msg.header  = header;
    msg.payload = payload;

    return msg;

}

function spot_price( asset, ccy )
{

    var data    = new Object();
    data.asset  = asset;
    data.ccy    = ccy;
    data.method = 'get_spot';

    var payload  = new Object();
    payload.url  = '/scripts/grid_functions.php';
    payload.data = data;

    var header       = new Object();
    header.msg_type  = 'SPOTPRICE' + '|' + asset + '|' + ccy;
    header.target_id = asset + ccy;

    var msg     = new Object();
    msg.header  = header;
    msg.payload = payload;

    return msg;

}

function grid_pricing( id, pricing_ccy )
{

    var data    = new Object();
    data.id          = id;
    data.pricing_ccy = pricing_ccy;
    data.method      = 'pricing';

    var payload  = new Object();
    payload.url  = '/scripts/grid_functions.php';
    payload.data = data;

    var header       = new Object();
    header.msg_type  = 'GRIDPRICING';
    header.target_id = id;

    var msg     = new Object();
    msg.header  = header;
    msg.payload = payload;

    return msg;

}
