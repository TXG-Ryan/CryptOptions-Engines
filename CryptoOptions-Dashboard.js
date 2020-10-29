
var columnDefs = [
    {
        field        : 'doc',
        colId        : 'doc',
        headerName   : 'Contract',
        width        : 95,
        cellStyle    : { 'text-align': 'center', 'vertical-align': 'middle' },
        headerTooltip: 'Contract Description',
        cellRenderer : function(params) {

            var retstr = '';
            if( params.data !== undefined )
                retstr = '<button title="Click to view contract definition" class="btn btn_doc" onclick="showDoc(\'' + params.data.id + '\')">Document</button>';

            return retstr;

        }
    },
    {
        field            : 'bid',
        colId            : 'bid_price',
        width            : 130,
        cellStyle        : { 'text-align': 'right', 'vertical-align': 'middle', 'font-weight': 'bold' },
        cellRenderer     : 'agAnimateShowChangeCellRenderer',
        headerTooltip    : 'Sell Price',
        headerValueGetter: function () { return 'Bid Price (' + document.getElementById('pricing_ccy').value + ')'; },
        valueFormatter   : function (params) {

            if( params.data !== undefined )
                return formatNumber( params.value, get_precision( 'price' ) );

        }
    },
    {
        field            : 'bid_btn',
        colId            : 'bid_btn',
        width            : 45,
        cellStyle        : { 'text-align': 'center', 'vertical-align': 'middle' },
        tooltip          : function (params) { return 'Click to sell'; },
        headerTooltip    : 'Sell',
        headerValueGetter: function () { return ''; },
        cellRenderer     : function(params) {

            var retstr = '';
            if( params.data !== undefined )
                retstr = '<button class="btn btn_sell" onclick="transact( this, \'' + params.data.id + '\' )">Sell</button>';

            return retstr;

        }
    },
    {
        field            : 'bsize',
        colId            : 'bid_size',
        width            : 125,
        headerTooltip    : 'Sell Price Size',
        cellStyle        : { 'text-align': 'right', 'vertical-align': 'middle' },
        headerValueGetter: function () { return 'Bid Size (' + document.getElementById('asset').value + ')'; },
        valueFormatter   : function (params) {

            if( params.data !== undefined )
                return formatNumber( params.value, get_precision( 'size' ) );

        }
    },
    {
        field            : 'ask',
        colId            : 'ask_price',
        width            : 130,
        cellStyle        : { 'text-align': 'right', 'vertical-align': 'middle', 'font-weight': 'bold' },
        cellRenderer     : 'agAnimateShowChangeCellRenderer',
        headerTooltip    : 'Buy Price',
        headerValueGetter: function () { return 'Ask Price (' + document.getElementById('pricing_ccy').value + ')'; },
        valueFormatter   : function (params) {

            if( params.data !== undefined )
                return formatNumber( params.value, get_precision( 'price' ) );

        }
    },
    {
        field            : 'ask_btn',
        colId            : 'ask_btn',
        width            : 45,
        cellStyle        : { 'text-align': 'center', 'vertical-align': 'middle' },
        tooltip          : function (params) { return 'Click to buy'; },
        headerTooltip    : 'Buy',
        headerValueGetter: function () { return ''; },
        cellRenderer     : function(params) {

            var retstr = '';
            if( params.data !== undefined )
                retstr = '<button class="btn btn_buy" onclick="transact( this, \'' + params.data.id + '\' )">Buy</button>';

            return retstr;

        }
    },
    {
        field            : 'asize',
        colId            : 'ask_size',
        width            : 125,
        cellStyle        : { 'text-align': 'right', 'vertical-align': 'middle' },
        headerTooltip    : 'Buy Price Size',
        headerValueGetter: function () { return 'Ask Size (' + document.getElementById('asset').value + ')'; },
        valueFormatter   : function (params) {

            if( params.data !== undefined )
                return formatNumber( params.value, get_precision( 'size' ) );

        }
    },
    {
        field            : 'delta',
        colId            : 'delta',
        width            : 118,
        cellRenderer     : 'agAnimateSlideCellRenderer',
        cellStyle        : { 'text-align': 'right', 'vertical-align': 'middle' },
        headerTooltip    : 'Option price sensitivity with respect to spot price',
        headerValueGetter: function () { return 'Delta (' + document.getElementById('asset').value + ')'; },
        valueFormatter   : function (params) {

            if( params.data !== undefined )
                return formatNumber( params.value, get_precision( 'asset_greek' ) );

        }
    },
    {
        field            : 'gamma',
        colId            : 'gamma',
        width            : 118,
        cellRenderer     : 'agAnimateSlideCellRenderer',
        cellStyle        : { 'text-align': 'right', 'vertical-align': 'middle' },
        headerTooltip    : 'Option delta sensitivity with respect to spot price',
        headerValueGetter: function () { return 'Gamma (' + document.getElementById('asset').value + ')'; },
        valueFormatter   : function (params) {

            if( params.data !== undefined )
                return formatNumber( params.value, get_precision( 'asset_greek' ) );

        }
    },
    {
        field            : 'vega',
        colId            : 'vega',
        width            : 118,
        cellRenderer     : 'agAnimateSlideCellRenderer',
        cellStyle        : { 'text-align': 'right', 'vertical-align': 'middle' },
        headerTooltip    : 'Option price sensitivity with respect to 1% change in volatility',
        headerValueGetter: function () { return 'Vega (' + document.getElementById('ccy').value + ')'; },
        valueFormatter   : function (params) {

            if( params.data !== undefined )
                return formatNumber( params.value, get_precision( 'pricing_ccy_greek' ) );

        }

    },
    {
        field            : 'theta',
        colId            : 'theta',
        width            : 118,
        cellRenderer     : 'agAnimateSlideCellRenderer',
        cellStyle        : { 'text-align': 'right', 'vertical-align': 'middle' },
        headerTooltip    : 'Option price 1-day time decay',
        headerValueGetter: function () { return 'Theta (' + document.getElementById('ccy').value + ')'; },
        valueFormatter   : function (params) {

            if( params.data !== undefined )
                return formatNumber( params.value, get_precision( 'pricing_ccy_greek' ) );

        }
    }
];

var grid;
var calcs_prices = [ 'bid_price', 'ask_price' ];
var calcs_sizes  = [ 'bid_size', 'ask_size' ];
var calcs_greeks = [ 'delta', 'gamma', 'vega', 'theta' ];
var asset;
var ccy;
var pricing_ccy;
var last_spot = [];

var gridOptions = {
    rowHeight               : 35,
    rowSelection            : 'single',
    columnDefs              : columnDefs,
    treeData                : true,
    animateRows             : true,
    domLayout               :'autoHeight',
    enableFilter            : false,
    enableSorting           : false,
    enableColResize         : true,
    groupDefaultExpanded    : -1,
    getDataPath: function(data) {
        return data.contract;
    },
    getRowNodeId: function(data) {
        return data.id;
    },
    autoGroupColumnDef: {
        headerName: 'Contracts',
        headerTooltip: 'Asset, Expiry, Put/Call, Strike',
        width: 200,
        cellRendererParams: {
            checkbox        : false,
            suppressCount   : true
        }
    }
};

var spot_msecs  = 5000;
var price_msecs = 5000;

var g_socket;

$(document).ready(function()
{

    set_24h_rates();

    loadPage();

    bind_socket_handlers();

});

function set_24h_rates()
{

    $.ajax({

        url     : "/scripts/24h_rates.php",
        type    : "POST",
        async   : true,
        context : document.body

    }).done( function ( jresponse ) {

        var rates = JSON.parse( jresponse );

        document.getElementById( 'BTCUSD-24h').value = rates.BTCUSD;
        document.getElementById( 'ETHUSD-24h').value = rates.ETHUSD;
        document.getElementById( 'LTCUSD-24h').value = rates.LTCUSD;
        document.getElementById( 'BCHUSD-24h').value = rates.BCHUSD;

    });

}

function bind_socket_handlers()
{

    g_socket.onopen = function( event )
    {

        g_socket.send( JSON.stringify( initial_spot( 'GBP', 'USD' ) ) );
        g_socket.send( JSON.stringify( initial_spot( 'EUR', 'USD' ) ) );

        for( var l = 0; l < assets.length; l++ )
            g_socket.send( JSON.stringify( spot_price( assets[l], 'USD' ) ) );

    };

    g_socket.onmessage = function( event )
    {

        var msg = JSON.parse( event.data );

        if( msg.header.msg_type.indexOf( 'INITIALSPOT' ) == 0 )
        {

            document.getElementById( msg.header.target_id ).value = msg.payload.data;

        }
        else if( msg.header.msg_type.indexOf( 'SPOTPRICE' ) == 0 )
        {

            var spot   = Number( msg.payload.data );
            var gbpusd = document.getElementById( 'GBPUSD' ).value;
            var eurusd = document.getElementById( 'EURUSD' ).value;

            var ccy = msg.header.target_id.substr( 0, 3 );


            if( last_spot[ccy] != undefined )
            {

                var newClassSpec;
                if( Number( spot.toFixed( 2 ) ) > last_spot[ccy] )
                {
                    newClassSpec = 'spot-price increase-colour-tag';
                    document.getElementById( msg.header.target_id ).innerHTML   = '<div style="display:inline-block">' + numberWithCommas( spot.toFixed( 2 ) ) + '</div>' +
                                                                                  '<div style="display:inline-block" class="arrow-up">' +  '&#8593;' + '</div>';
                    document.getElementById( ccy + 'GBP' ).innerHTML            = '<div style="display:inline-block">' + numberWithCommas( (spot/gbpusd).toFixed( 2 ) ) + '</div>' +
                                                                                  '<div style="display:inline-block" class="arrow-up">' +  '&#8593;' + '</div>';
                    document.getElementById( ccy + 'EUR' ).innerHTML            = '<div style="display:inline-block">' + numberWithCommas( (spot/eurusd).toFixed( 2 ) ) + '</div>' +
                                                                                  '<div style="display:inline-block" class="arrow-up">' +  '&#8593;' + '</div>';
                }

                else if( Number( spot.toFixed( 2 ) ) < last_spot[ccy] )
                {
                    newClassSpec = 'spot-price decrease-colour-tag';
                    document.getElementById( msg.header.target_id ).innerHTML   = '<div style="display:inline-block">' + numberWithCommas( spot.toFixed( 2 ) ) + '</div>' +
                                                                                  '<div style="display:inline-block" class="arrow-down">' +  '&#8595;' + '</div>';
                    document.getElementById( ccy + 'GBP' ).innerHTML            = '<div style="display:inline-block">' + numberWithCommas( (spot/gbpusd).toFixed( 2 ) ) + '</div>' +
                                                                                  '<div style="display:inline-block" class="arrow-down">' +  '&#8595;' + '</div>';
                    document.getElementById( ccy + 'EUR' ).innerHTML            = '<div style="display:inline-block">' + numberWithCommas( (spot/eurusd).toFixed( 2 ) ) + '</div>' +
                                                                                  '<div style="display:inline-block" class="arrow-down">' +  '&#8595;' + '</div>';
                }
                else
                    newClassSpec = 'spot-price';

                document.getElementById( msg.header.target_id ).className = newClassSpec;
                document.getElementById( ccy + 'GBP' ).className          = newClassSpec;
                document.getElementById( ccy + 'EUR' ).className          = newClassSpec;

                setTimeout( resetClass, 3*1000, ccy );
            }

            var usd_24h                                                         = document.getElementById( ccy + 'USD-24h' ).value;
            document.getElementById( 'pct-' + msg.header.target_id ).innerHTML  = numberWithCommas( (((spot - usd_24h)/usd_24h)*100).toFixed( 2 ) ) + '%';
            document.getElementById( 'pct-' + ccy + 'GBP' ).innerHTML           = numberWithCommas( (((spot - usd_24h)/(gbpusd*usd_24h))*100).toFixed( 2 ) ) + '%';
            document.getElementById( 'pct-' + ccy + 'EUR' ).innerHTML           = numberWithCommas( (((spot - usd_24h)/(eurusd*usd_24h))*100).toFixed( 2 ) ) + '%';

            var classSpec = document.getElementById( 'pct-' + msg.header.target_id ).className;
            var classes   = classSpec.split( ' ' );
            newClassSpec = '';
            for( var j = 0; j < classes.length - 1; j++ )
                newClassSpec += classes[j] + ' ';

            if( spot >= usd_24h )
                newClassSpec += 'increase-colour-tag';
            else
                newClassSpec += 'decrease-colour-tag';

            document.getElementById( 'pct-' + msg.header.target_id ).className = newClassSpec;
            document.getElementById( 'pct-' + ccy + 'GBP' ).className          = newClassSpec;
            document.getElementById( 'pct-' + ccy + 'EUR' ).className          = newClassSpec;

            last_spot[ccy] = Number( spot.toFixed( 2 ) );

            setTimeout( setValueTrading, spot_msecs, msg.header.target_id );

        }

        else if( msg.header.msg_type.indexOf( 'GRIDPRICING' ) == 0 )
        {

            var response = msg.payload.data;

            var items = msg.header.target_id.split('|');
            var cnt   = items.length;

            var rootId = '';
            for( var k = 0; k < items.length - 1; k++ )
            {
                rootId = rootId + items[k];
                if( k != items.length - 2 )
                    rootId = rootId + '|';
            }

            var rowNode = gridOptions.api.getRowNode( rootId );

            try
            {
                rowNode.setDataValue( items[cnt - 1], Number(response) );
            }
            catch (err) {}

            setTimeout( setValueTrading, price_msecs, msg.header.target_id );

        }

    };

}

function resetClass( ccy )
{

    document.getElementById( ccy + 'USD' ).className = 'spot-price';
    document.getElementById( ccy + 'GBP' ).className = 'spot-price';
    document.getElementById( ccy + 'EUR' ).className = 'spot-price';

}

//const AG_GRID_LICENSE = "Evaluation_License_Not_For_Production_Valid_Until1_March_2019__MTU1MTM5ODQwMDAwMA==571888b3c7cbc45a13d91e9c2e885c44";

function loadPage()
{

    g_socket = new WebSocket( ws_url );

    agGrid.LicenseManager.setLicenseKey( "Evaluation_License_Not_For_Production_Valid_Until1_March_2019__MTU1MTM5ODQwMDAwMA==571888b3c7cbc45a13d91e9c2e885c44" );

    var gridDiv = document.querySelector( '#grid' );
    grid        = new agGrid.Grid( gridDiv, gridOptions );
    asset       = document.getElementById( 'asset' ).value;
    ccy         = document.getElementById( 'ccy' ).value;
    pricing_ccy = document.getElementById( 'pricing_ccy' ).value;

    var rowData = [];

    $.ajax({

        url : "/scripts/grid_functions.php",
        data: {
            method : "contractList",
            asset  : asset
        },
        type   : "POST",
        async  : true,
        context: document.body

    }).done(function (jresponse) {

        var contracts = JSON.parse( jresponse).data;
        for( var i = 0; i < contracts.length; i++ )
        {
            var tmpData = [];
            tmpData.id          = 'CO' + '|' + contracts[i].asset + '|' + contracts[i].expiry + '|' + contracts[i].strike + '|' + contracts[i].pc + '|' + contracts[i].ccy;
            tmpData.contract    = [ contracts[i].asset, contracts[i].expiry, contracts[i].pc == 'C' ? 'Call' : 'Put', contracts[i].strike ];
            tmpData.bid         = 0;
            tmpData.bsize       = 0;
            tmpData.ask         = 0;
            tmpData.asize       = 0;
            tmpData.delta       = 0;
            tmpData.gamma       = 0;
            tmpData.vega        = 0;
            tmpData.theta       = 0;
            rowData.push( tmpData );
        }
        gridOptions.api.setRowData( rowData );

        for( var j = 0; j < contracts.length; j++ )
        {

            for( var k = 0; k < calcs_prices.length; k++ )
                setTimeout( setValueTrading, 1, rowData[j].id + '|' + calcs_prices[k] );
            for( var k = 0; k < calcs_sizes.length; k++ )
                setTimeout( setValueTrading, 1, rowData[j].id + '|' + calcs_sizes[k] );

        }

        for( var j = 0; j < contracts.length; j++ )
            for( var k = 0; k < calcs_greeks.length; k++ )
                setTimeout( setValueTrading, 1, rowData[j].id + '|' + calcs_greeks[k] );

    });

    setTimeout( update_available_funds, 1 );

}

function update_available_funds()
{

    var available_funds_ccy = document.getElementById( 'available_funds_ccy' ).innerHTML;
    var email               = document.getElementById( 'email' ).value;

    $.ajax({

        url : "/scripts/trading_controls_functions.php",
        data: {
            method : "update_available_funds",
            email  : email,
            asset  : available_funds_ccy
        },
        type   : "POST",
        async  : true,
        context: document.body

    }).done(function (response) {

        document.getElementById( 'available_funds' ).innerHTML = response;

    });


    setTimeout( update_available_funds, 30*1000 );

}

function switch_available_funds_ccy()
{

    var available_funds_ccy = document.getElementById( 'available_funds_ccy').innerHTML;
    if( available_funds_ccy == 'BTC' )
        available_funds_ccy = 'ETH';
    else if( available_funds_ccy == 'ETH' )
        available_funds_ccy = 'BCH';
    else if( available_funds_ccy == 'BCH' )
        available_funds_ccy = 'LTC';
    else if( available_funds_ccy == 'LTC' )
        available_funds_ccy = 'BTC';
    document.getElementById( 'available_funds_ccy').innerHTML = available_funds_ccy;
    document.getElementById( 'available_funds').innerHTML     = '   0.00000000';

    setTimeout( update_available_funds, 1 );

}

function setValueTrading( id )
{

    if( id == 'BTCUSD' || id == 'ETHUSD' || id == 'BCHUSD' || id == 'LTCUSD' )
        g_socket.send( JSON.stringify( spot_price( id.substr( 0, 3 ), id.substr( 3, 3 ) ) ) );

    else
        g_socket.send( JSON.stringify( grid_pricing( id, pricing_ccy ) ) );

}

function change_pricing_ccy( t )
{

    var new_pricing_ccy = null;
    if( pricing_ccy == ccy )
        new_pricing_ccy = asset;
    else
        new_pricing_ccy = ccy;

    t.title = 'Convert prices to ' + pricing_ccy;
    document.getElementById( 'pricing_ccy').value = new_pricing_ccy;
    pricing_ccy = new_pricing_ccy;

    gridOptions.api.refreshHeader();

}

function change_asset( t )
{

    var parts = t.id.split( '_' );

    asset = parts[2];
    document.getElementById( 'asset' ).value = asset;

    ccy = 'USD';
    document.getElementById( 'ccy' ).value = ccy;

    pricing_ccy  = 'USD';
    document.getElementById( 'pricing_ccy' ).value = pricing_ccy;

    document.getElementById( 'pricing_ccy_button' ).title = 'Convert prices to ' + asset;

    var elem_list = [];
    elem_list.push( document.getElementById( 'asset_button_BTC' ) );
    elem_list.push( document.getElementById( 'asset_button_ETH' ) );
    elem_list.push( document.getElementById( 'asset_button_BCH' ) );
    elem_list.push( document.getElementById( 'asset_button_LTC' ) );
    for( var i = 0; i < elem_list.length; i++ )
        if( t == elem_list[i] )
            t.style = "background-color: blue;";

        else
            elem_list[i].style = "";

    grid.destroy();

    var highestTimeoutId = setTimeout(";");
    for ( i = 0 ; i < highestTimeoutId ; i++)
        clearTimeout(i);

    g_socket.close();
    loadPage();
    bind_socket_handlers();

}

function showDoc( id )
{

    var url = '/contract_details.php?contractId=' + id;

    window.open( url, 'Contract details', "width=1200, height=700" );

}

function get_precision( ntype )
{

    var precision = 2;

    if( ntype == 'price' )
    {
        if( pricing_ccy == ccy )
            precision = 2;
        else
            precision = 8;
    }
    else if( ntype == 'size' )
    {
        precision = 8;
    }
    else if( ntype == 'asset_greek' )
    {
        precision = 8;
    }
    else if( ntype == 'pricing_ccy_greek' )
    {
        precision = 2;
    }

    return precision;

}

function transact( btn, id )
{

    if( document.getElementById( 'email').value != '' )
    {

        var black  = "<html><head><body><div style='background-color: black;'></div></body></head></html>";
        var win    = window.open( '', 'CryptOptions Trade Details', "width=1050, height=900" );
        win.document.write( black );

    }

    var action = btn.innerHTML.toUpperCase();

    $.ajax({

        url    : "/scripts/transact.php",
        data   : {
            method      : 'create_ticket',
            action      : action,
            contract    : id
        },
        type   : "POST",
        async  : true,
        context: document.body

    }).done(function (jresponse) {

        if( jresponse != '' )
        {

            var obj = JSON.parse(jresponse);
            if ( obj.response == 'ok' )
                win.location.href = obj.url;

            else
                swal( 'CryptOptions', obj.response, 'error' );

        }
        else
            swal( 'CryptOptions', 'Please login to your CryptOptions account', 'info');

    });

}

function exit_dashboard( state )
{

    if( state == 'user' )
    {

        document.getElementById('exit_dashboard').innerHTML = 'Working...';

        $.ajax({

            url    : "/scripts/logout.php",
            type   : "POST",
            async  : true,
            context: document.body

        }).done(function (response) {

            var obj = JSON.parse(response);
            if ( obj.response == 'ok' )
                window.location = obj.url;
            else
                swal( 'CryptOptions', obj.response, 'error' );

        });

    }
    else
        window.location = '/index.php';

}

