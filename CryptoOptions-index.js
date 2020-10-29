
var marquee_rate_frequency = 5000;

$(document).ready(function()
{

    var socket = new WebSocket( ws_url );

    socket.onopen = function( event )
    {

        socket.send( JSON.stringify( initial_spot( 'GBP', 'USD' ) ) );

    };

    socket.onmessage = function( event )
    {

        var msg = JSON.parse( event.data );

        if( msg.header.msg_type == 'INITIALSPOT|GBP|USD' )
        {

            document.getElementById( msg.header.target_id ).value = msg.payload.data;
            socket.send( JSON.stringify( initial_spot( 'EUR', 'USD' ) ) );

        }
        else if( msg.header.msg_type == 'INITIALSPOT|EUR|USD' )
        {

            document.getElementById( msg.header.target_id ).value = msg.payload.data;
            for( var i = 0; i < assets.length; i++ )
                setTimeout( marquee_rates, marquee_rate_frequency, socket, assets[i] + 'USD' );

        }
        else
        {

            var spot   = Number( msg.payload.data );
            var gbpusd = document.getElementById( 'GBPUSD' ).value;
            var eurusd = document.getElementById( 'EURUSD' ).value;

            document.getElementById( msg.header.target_id ).innerHTML                        = numberWithCommas( spot.toFixed( 2 ) );
            document.getElementById( msg.header.target_id.substr( 0, 3 ) + 'GBP' ).innerHTML = numberWithCommas( (spot/gbpusd).toFixed( 2 ) );
            document.getElementById( msg.header.target_id.substr( 0, 3 ) + 'EUR' ).innerHTML = numberWithCommas( (spot/eurusd).toFixed( 2 ) );

            setTimeout( marquee_rates, marquee_rate_frequency, socket, msg.header.target_id );

        }

    };

});

function marquee_rates( socket, id )
{

    socket.send( JSON.stringify( spot_price( id.substr( 0, 3 ), id.substr( 3, 3 ) ) ) );

}

function numberWithCommas( x )
{

    var parts = x.toString().split( "." );
    parts[0]  = parts[0].replace( /\B(?=(\d{3})+(?!\d))/g, "," );

    return parts.join( "." );

}
