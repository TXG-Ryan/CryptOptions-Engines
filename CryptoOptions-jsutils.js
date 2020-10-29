
//const AG_GRID_LICENSE = "Evaluation_License_Not_For_Production_Valid_Until1_March_2019__MTU1MTM5ODQwMDAwMA==571888b3c7cbc45a13d91e9c2e885c44";

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

function readable_description( d )
{

    var retstr = null;
    var str = d.value;
    if (str.indexOf('|') != -1) {

        var s = str.split('|');
        retstr = s[1] + ( s[4] == 'C' ? ' Call ' : ' Put ' ) + s[2] + ' @ ' + s[3];

    }
    else
        retstr = d.value;

    return retstr;

}

function numberWithCommas( x )
{

    var parts = x.toString().split(".");
    parts[0]  = parts[0].replace( /\B(?=(\d{3})+(?!\d))/g, "," );

    return parts.join( "." );

}

function launch_blotter( b )
{

    var bw = window.open( '/grid_window.php?invoker=trade_blotter', 'Trade Blotter', "width=980, height=800" );

}

function launch_risk_viewer( b )
{

    var rw = window.open( '/grid_window.php?invoker=risk_viewer', 'Risk Viewer', "width=980, height=800" );

}

function launch_funding( b )
{

    var win   = window.open( '/loading_white.php', 'Funding', "width=800, height=800" );
    var email = document.getElementById( 'email' ).value;

    $.ajax({

        url : "/scripts/cbecomif.php",
        data: {
            method : "any_amount",
            email  : email
        },
        type   : "POST",
        async  : true,
        context: document.body

    }).done(function (jresponse) {

        var response = JSON.parse( jresponse );

        if( response.status == 'ok' )
            win.location.href = response.url;
        else
            swal( 'CryptOptions', response.status, 'success' );

    });

}

