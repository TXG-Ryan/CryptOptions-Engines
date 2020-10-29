var mcp = {"url":"http://localhost/widgets","ajax_url":"http://localhost/widgets/widgets/ajax","numformat":"EU","sidebar":true};
/*
* JohnyDepp
* https://github.com/muicss/johnnydepp
*/
this.depp||function(n,e){depp=function(){var n={},u=function(){},f={},o={},a={},s={},d={};function p(n){throw new Error("Depp Error: "+n)}function r(n,e){var t=function r(n,i){i=i||[];var c=[],o=[];return n.forEach(function(t){if(0<=i.indexOf(t)&&p("Circular reference"),!(t in f))return c.push("#"+t);f[t].forEach(function(n){if("#"==n[0]){var e=i.slice();e.push(t),e=r([n.slice(1)],e),c=c.concat(e[0]),o=o.concat(e[1])}else o.push(n)})}),[c,o]}(n);t[0].length?i(t[0],function(){r(n,e)}):e(t[1])}function i(n,t){var e,r,i=n.length,c=i;if(0==i)return t();for(e=function(n,e){if(e)return t(n);--c||t()};i--;)(r=n[i])in a?e(r,a[r]):(o[r]=o[r]||[]).push(e)}function l(n,e){var t=o[n];if(a[n]=e,t)for(;t.length;)t[0](n,e),t.splice(0,1)}return n.define=function(n){var e;for(var t in n)t in f&&p("Bundle already defined"),e=n[t],f[t]=e.push?e:[e],l("#"+t)},n.config=function(n){for(var e in n)d[e]=n[e]},n.require=function(n,e,t){r(n=n.push?n:[n],function(n){i(n,function(n){n?(t||u)(n):(e||u)()}),n.forEach(function(n){var t,r,i,c,e,o,f;n in s||(s[n]=!0,t=n,r=l,e=document,o=d.before||u,f=t.replace(/^(css|img)!/,""),/(^css!|\.css$)/.test(t)?(i=!0,(c=e.createElement("link")).rel="stylesheet",c.href=f):/(^img!|\.(png|gif|jpg|svg)$)/.test(t)?(c=e.createElement("img")).src=f:((c=e.createElement("script")).src=t,c.async=!1),c.onload=c.onerror=c.onbeforeload=function(n){var e=n.type[0];if(i&&"hideFocus"in c)try{c.sheet.cssText.length||(e="e")}catch(n){18!=n.code&&(e="e")}if("b"==e){if(!n.defaultPrevented)return;e="e"}r(t,"e"==e)},o(t,c),e.head.appendChild(c))})})},n.done=function(n){f[n]=[],l("#"+n)},n.isDefined=function(n){return n in f},n.reset=function(){f={},o={},a={},s={},d={}},n}(),(e=n.createEvent("HTMLEvents")).initEvent?e.initEvent("depp-load",!1,!1):e=new Event("depp-load"),n.dispatchEvent(e)}(document);

function addCommas(nStr) {
    var d = (mcp.numformat === 'US') ? '.' : ',';
    var s = (mcp.numformat === 'US') ? ',' : '.';
    nStr += '';
    var x = nStr.split('.');
    var x1 = x[0];
    var x2 = x.length > 1 ? d + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + s + '$2');
    }
    return x1 + x2;
}

function hex2rgb(hex) {

    hex = hex.replace('#','');
  
    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
  
    var r = parseInt(hex.substring(0,2), 16);
    var g = parseInt(hex.substring(2,4), 16);
    var b = parseInt(hex.substring(4,6), 16);
  
    if (isNaN(r) || isNaN(g) || isNaN(b)) {
      return new Error('Invalid Hex');
    } else {
      return r + ',' + g+ ',' + b;
    }
  
}

function commarize(data,format) {

    if(format == '1'){
        formats = [' T',' B',' M',' K'];
    } else if(format == '2'){
        formats = [' Trillion',' Billion',' Million','Thousand'];
    }

    if(format != '3'){
        return (Math.abs(Number(data).toFixed(2)) >= 1.0e+15)
        ? (Math.abs(Number(data)) / 1.0e+12).toFixed(2) + formats[0]
        : Math.abs(Number(data)) >= 1.0e+9
        ? (Math.abs(Number(data)) / 1.0e+9).toFixed(2) + formats[1]
        : Math.abs(Number(data)) >= 1.0e+6
        ? (Math.abs(Number(data)) / 1.0e+6).toFixed(2) + formats[2]
        : Math.abs(Number(data)) >= 1.0e+3
        ? (Math.abs(Number(data)) / 1.0e+3).toFixed(2) + formats[3]
        : addCommas(Math.abs(Number(data)));
    } else {
        return addCommas(Math.abs(Number(data)).toFixed(0));
    }
}

function rgb2hex(rgb) {
    rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
    return (rgb && rgb.length === 4) ? "#" +
    ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
    ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
    ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
}

function isBrightness($that) {
    var c = rgb2hex($that.css('background-color'));
    var rgb = parseInt(c.substring(1), 16);
    var r = (rgb >> 16) & 0xff;
    var g = (rgb >>  8) & 0xff;
    var b = (rgb >>  0) & 0xff;

    var luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;

    if (luma < 50) {
        $that.addClass('invert-act');
    }
}

function realtimeUpdate() {

    var realtimes = $('[data-realtime="on"]');

    if (typeof window.socket === 'undefined' && realtimes.length > 0) {

        var coins = [];

        realtimes.find('[data-live-price]').each(function() {
            coins.push($(this).data('live-price'));
        });

        var coins = coins.filter(function(item, pos) {
            return coins.indexOf(item) == pos; 
        });

        if (coins.length) {

            window.socket = new WebSocket('wss://ws.coincap.io/prices?assets=' + coins.join(','));

            window.socket.addEventListener('message', function(msg) {

                tradeMsg = JSON.parse(msg.data);

                for (var coin in tradeMsg) {
                    realtimes.find('[data-live-price="' + coin + '"]').each(function(){
                        $(this).realTime(tradeMsg[coin]);
                    });
                }

            });

        }

    }

}

depp.define({
    'jquery': [mcp.url + '/assets/public/js/jquery-3.3.1.min.js'],
    'css': [mcp.url + '/assets/public/css/style.css'],
    'chartjs': [mcp.url + '/assets/public/js/Chart.min.js'],
    'datatable': [mcp.url + '/assets/public/css/jquery.dataTables.min.css', mcp.url + '/assets/public/js/jquery.dataTables.min.js', mcp.url + '/assets/public/js/dataTables.responsive.min.js'],
    'echarts': [mcp.url + '/assets/public/js/Charts.min.js'],
    'bounty': [mcp.url + '/assets/public/js/bounty.min.js'],
    'visibilitychanged': [mcp.url + '/assets/public/js/jquery.visibilitychanged.min.js'],
    'selectize': [mcp.url + '/assets/public/js/selectize.min.js']
});

if (window.jQuery) { depp.done('jquery'); }

depp.require(['jquery', 'css'], function() {

    realtimeUpdate();
    
    $.fn.imagesLoaded = function () {

        // get all the images (excluding those with no src attribute)
        var $imgs = this.find('img[src!=""]');
        // if there's no images, just return an already resolved promise
        if (!$imgs.length) {return $.Deferred().resolve().promise();}

        // for each image, add a deferred object to the array which resolves when the image is loaded (or if loading fails)
        var dfds = [];  
        $imgs.each(function(){

            var dfd = $.Deferred();
            dfds.push(dfd);
            var img = new Image();
            img.onload = function(){dfd.resolve();}
            img.onerror = function(){dfd.resolve();}
            img.src = this.src;

        });

        // return a master promise object which will resolve when all the deferred objects have resolved
        // IE - when all the images are loaded
        return $.when.apply($,dfds);
    }
    
    $.fn.extend({
        animateCss: function(animationName, callback) {
          var animationEnd = (function(el) {
            var animations = {
              animation: 'animationend',
              OAnimation: 'oAnimationEnd',
              MozAnimation: 'mozAnimationEnd',
              WebkitAnimation: 'webkitAnimationEnd',
            };
  
            for (var t in animations) {
              if (el.style[t] !== undefined) {
                return animations[t];
              }
            }
          })(document.createElement('div'));
  
          this.addClass('mcw-animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('mcw-animated ' + animationName);
  
            if (typeof callback === 'function') callback();
          });
  
          return this;
        },
    });

    $.fn.realTime = function(priceUsd) {
        var price = parseFloat($(this).data('rate') * priceUsd);
        var decimals = price >= 1 ? 2 : (price < 0.000001 ? 8 : 6);

        $(this).find('span').html(addCommas(price.toFixed(decimals)));

        if (priceUsd > parseFloat($(this).attr('data-price'))) {
            $(this).animateCss('liveup');
        }
        if (priceUsd < parseFloat($(this).attr('data-price'))) {
            $(this).animateCss('livedown');
        }

        $(this).attr('data-price', priceUsd);

    }

    $.fn.invertable = function() {
        isBrightness($(this));

		var invertList = ['ethereum','ripple','iota','eos','0x','bancor','dentacoin','bibox-token','medishares','santiment','quantstamp','raiden-network-token','pillar','republic-protocol','metal','eidoo','credo','blackmoon','covesting','shivom','suncontract','numeraire','daostack','bitdegree','matryx','faceter','internxt','cryptoping','invacio','chainium','creativecoin','trezarcoin','elcoin-el','jesus-coin','mojocoin','gapcoin','prime-xi','speedcash','veltor','loopring-neo','francs'];

		$(this).find('img').each(function(){
			if(invertList.join('-').toLowerCase().indexOf($(this).attr('alt').toLowerCase()) > -1) {
				$(this).addClass('invertable');
			}

		});
    }

    $('.mcw-dark-theme,.mcw-midnight-theme,.mcw-custom-theme,.mcw-table.dark').each(function() {
        $(this).invertable();
    });

    $.fn.inView = function() {
        var win = $(window);
        obj = $(this);
        var scrollPosition = win.scrollTop();
        var visibleArea = win.scrollTop() + win.height();
        var objEndPos = (obj.offset().top + obj.outerHeight());
        return (visibleArea >= objEndPos && scrollPosition <= objEndPos ? true : false);
    };

    $.fn.drawChart = function() {

        var self = $(this);

        depp.require('chartjs', function() {

            var rate = (self.data('rate')) ? self.data('rate') : 1;
            var symbol = (self.data('fiat')) ? self.data('fiat') : '$';
            var color = self.data('color');
            var gradient = parseInt(self.data('gradient'));
            var border = parseInt(self.data('border'));
            var opacity = parseFloat(self.data('opacity'));
            var values = self.data('points').split(',').slice(0, 24);

            values = values.map(function(value) {
                value = parseFloat(value) * rate;
                var decimals = value >= 1 ? 2 : (value < 0.000001 ? 8 : 6);
                return value.toFixed(decimals);
            });

            background = (background) ? background : color;

            if (gradient === 0) {
                var background = 'rgba(' + color + ',' + opacity + ')';
            } else {
                var background = self[0].getContext('2d').createLinearGradient(0, 0, 0, gradient);
                background.addColorStop(0, 'rgba(' + color + ',0.3)');
                background.addColorStop(1, 'rgba(' + color + ',0)');
            }
        
            var data = {
                labels: values,
                datasets: [{
                    data: values,
                    fill: true,
                    backgroundColor: background,
                    borderColor: 'rgb(' + color + ')',
                    pointBorderColor: 'rgb(' + color + ')',
                    lineTension: 0.25,
                    pointRadius: 0,
                    borderWidth: border
                }]
            };
            var options = {
                animation: { duration: 500 },
                legend: { display: false },
                scales: { xAxes: [{ display: false }], yAxes: [{ display: false }] },
                tooltips: { mode: 'index', intersect: false, displayColors: false, callbacks: {
                    label: function(tooltipItem, data) {
                        return symbol + ' ' + addCommas(parseFloat(tooltipItem['xLabel']));
                    },
                    title: function(tooltipItem, data) {
                        return false;
                    }
                } },
                hover: { mode: 'nearest', intersect: true },
                maintainAspectRatio: false,
            };
                
            var chart = new Chart(self[0].getContext("2d"), { type: "line", data: data, options: options });

        });

    }

    $.fn.mcwAccordion = function() {

        var self = this;

        self.find('.mcw-list-item:eq(0)').addClass('active').find('.mcw-list-body').slideDown();

        self.find('.mcw-list-header').click(function() {
            $(this).parents('.mcw-list').find('.mcw-list-item').not($(this).parent()).removeClass('active').find('.mcw-list-body').slideUp();
            $(this).parent().toggleClass('active');
            $(this).next('.mcw-list-body').slideToggle();
        });

    }

    $(document).on('mcw', '.mcw-table', function() {

        var self = $(this);
        var breakpoint = 480;
        var table = self.find('.mcw-datatable');

        depp.require('datatable', function() {

            $.fn.dataTableExt.oPagination.info_buttons = {fnInit:function(e,a,n){var t=e._iDisplayStart+1+" - "+e.fnDisplayEnd()+" of "+e.fnRecordsDisplay(),i=document.createElement("span"),s=document.createElement("span"),o=document.createElement("span");i.appendChild(document.createTextNode(e.oLanguage.oPaginate.sPrevious)),o.appendChild(document.createTextNode(e.oLanguage.oPaginate.sNext)),s.appendChild(document.createTextNode(t)),i.className="paginate_button previous",o.className="paginate_button next",s.className="paginate_button info",a.appendChild(i),a.appendChild(s),a.appendChild(o),$(i).click(function(){e.oApi._fnPageChange(e,"previous"),n(e)}),$(o).click(function(){e.oApi._fnPageChange(e,"next"),n(e)}),$(i).bind("selectstart",function(){return!1}),$(o).bind("selectstart",function(){return!1})},fnUpdate:function(e,a){if(e.aanFeatures.p)for(var n=e.aanFeatures.p,t=0,i=n.length;t<i;t++){var s=n[t].getElementsByTagName("span");s[1].innerText=e._iDisplayStart+1+" - "+e.fnDisplayEnd()+" of "+e.fnRecordsDisplay(),0===e._iDisplayStart?s[0].className="paginate_button previous disabled":s[0].className="paginate_button previous enabled",e.fnDisplayEnd()==e.fnRecordsDisplay()?s[2].className="paginate_button next disabled":s[2].className="paginate_button next enabled"}}};

            var coins = {}, columns = [], fields = [];

            table.find('thead th').each(function(index) {

                var column = $(this).data('col');

                fields.push(column);

                columns.push({
                    data: column,
                    name: column,
                    render: function(data, type, row, meta) {

                        if (meta.settings.json === undefined) { return data; }

                        switch (column) {
                            case 'rank':
                                return data;
                            case 'name':
                                var out = '<div class="coin"><div class="coin-image"><img src="' + row.img + '" style="max-height: 35px;" alt="' + row.slug + '"></div>';
                                if (row.link) {
                                    out += '<a href="' + row.link + '" class="coin-title"><div class="coin-name">' + data + '</div><div class="coin-symbol">' + row.symbol + '</div></a>';
                                } else {
                                    out += '<div class="coin-title"><div class="coin-name">' + data + '</div><div class="coin-symbol">' + row.symbol + '</div></div>';
                                }
                                out += '</div>';
                                return out;
                            case 'price_usd':
                                var price = parseFloat(row.currate*data);
                                var decimals = price >= 1 ? 2 : (price < 0.000001 ? 8 : 6);
                                var slug = row.name.split(' ').join('-');
                                slug = slug.toLowerCase();
                                return '<span data-live-price="' + slug +'" data-rate="' + row.currate + '" data-price="' + data + '">' + row.cryptofiat + ' ' + addCommas(price.toFixed(decimals)) + '</span>';
                            case 'price_btc':
                                return 'Ƀ ' + data;
                            case 'market_cap_usd':
                                var num = row.currate*data;
                                return row.cryptofiat+' '+commarize(num, row.priceformat);
                            case 'volume_usd_24h':
                                var num = row.currate*data;
                                var numeral = commarize(num, row.priceformat);
                                return row.cryptofiat+' '+numeral;
                            case 'available_supply':
                                return commarize(data, row.priceformat);
                            case 'percent_change_24h':
                                return '<span class="' + ((data >= 0) ? 'up' : 'down') + '">' + data + '%</span>';
                            case 'weekly':
                                return '<td><canvas width="135" height="40" data-rate="' + row.currate + '" data-fiat="' + row.cryptofiat + '" data-color="' + table.data('chartcolor') + '" data-gradient="50" data-border="2" data-points="' + data.join(',') + '"></canvas></td>';
                            default:
                                return data;
                        }
                    }
                });

            });

            var tabledt = table.DataTable({
                dom: 'r<"loader"><"datatable-scroll"t><"loader"><"dataTables-footer"lp><"clear">',
                order: [],
                scrollCollapse: true,
                pagingType: 'info_buttons',
                responsive: {
                    details: {
                        type: (self.width() < breakpoint) ? 'column' : 'inline',
                        target: 'tr'
                    }
                },
                pageLength: parseInt(table.data('length')),
                lengthMenu: [parseInt(table.data('length')),10,25,50,100].sort(function (a, b) {  return a - b;  }).filter(function(value, index, self) { return self.indexOf(value) === index; }),
                columns: columns,
                processing: true,
                serverSide: true,
                deferLoading: parseInt(table.data('total')),
                columnDefs: [
                    { targets: 'col-name', className: 'ctrl text-left all' },
                    { targets: 'col-rank', className: 'text-left min-tablet-p', width: '20px' },
                    { targets: 'col-price_usd', className: 'all' },
                    { targets: 'col-weekly', width: '190px', 'max-width': '190px', className: 'chart-wrapper' },
                ],
                drawCallback: function(data) {

                    table.find('canvas').each(function() {
                        $(this).drawChart();
                    });

                    var realtime = table.parents('.cryptoboxes').data('realtime');

                    if (typeof window.socket !== 'undefined' && realtime === 'on') {

                        window.socket.addEventListener('message', function(msg) {
                            var tradeMsg = JSON.parse(msg.data);

                            table.find('[data-live-price="' + tradeMsg.base + '"]').each(function(){
                                $(this).realTime(tradeMsg);
                            });
                        });

                    }

                    $('.mcw-table.dark').each(function() {
                        $(this).invertable();
                    });

                },
                ajax: {
                    url: mcp.ajax_url,
                    data: {
                        action : "mcw_table",
                        dynamic : self.attr('data-dynamic'),
                        mcw_id : self.attr('id').split('-')[1]
                    }
                },
                language: {
                    processing: '',
                    lengthMenu: "Coins per page: _MENU_",
                }
            });

            tabledt.on('responsive-resize', function ( e, datatable, columns ) {
                var index = columns[0] ? 0 : 1;
                var dtr = ['dtr-inline', 'dtr-column'];
                table.find('tr td').removeClass('ctrl');
                table.find('tbody tr').each(function() {
                    $(this).find('td').eq(index).addClass('ctrl');
                });
                table.removeClass('dtr-column dtr-inline');
                table.addClass(dtr[index]);
            });

            tabledt.on('processing.dt', function ( e, settings, processing ) {
                if (processing) {
                    var loaderpos = self.find('thead').inView() ? 0 : 1;
                    self.find('.loader').eq(loaderpos).show();
                } else {
                    self.find('.loader').hide();
                }
            });

            tabledt.on('responsive-display', function (e) {
                $(e.currentTarget).find('td.child canvas').parent().addClass('chart-wrapper');
                $(e.currentTarget).find('td.child canvas').each(function() {
                    $(this).drawChart();
                });
            });

        });

    });

    $(document).on('mcw', '.mcw-chart', function() {

        var self = $(this);

        depp.require(['echarts', 'visibilitychanged'], function() {

            var options = {
                type: self.attr('data-charttype'),
                coin: self.attr('data-chartcoin'),
                currency: self.attr('data-chartcurrency'),
                symbol: self.attr('data-chartsymbol'),
                period: self.attr('data-chartview'),
                theme: self.attr('data-charttheme'),
                smooth: (self.attr('data-chartsmooth') == 'true'),
                textColor: self.attr('data-chartareacolor'),
                areaColor: self.attr('data-chartbgcolor'),
                font: self.attr('data-font'),
                config: JSON.parse(self.attr('data-config'))
            };

            //session storage destroy every 30 minutes
            setInterval(function(){
                if(sessionStorage.length > 0){
                    for (var j = 0; j < sessionStorage.length; j++){
                        if (sessionStorage.key(j).indexOf('mcw-') > -1) {
                            sessionStorage.setItem(sessionStorage.key(j),'');
                        }
                    }
                }
            },1000*60*30);
            // Set default values
            var opts = $.extend({ type: 'chart', coin: 'BTC', currency: 'USD', symbol: '$', period: 'day', theme: 'dark', smooth:true, areaColor: 'rgba(112,147,254,0.8)', textColor: '#202328', font: self.css('font-family') }, options);

            var themes = {
                light: {
                    backgroundColor: '#fff',
                    color: (opts.type == 'chart') ? (opts.textColor) != '' ? [opts.textColor] : '#202328' : '#202328',
                    fontFamily: opts.font,
                    chartColors: (opts.type == 'chart') ? (opts.areaColor) != '' ? [opts.areaColor] : 'rgba(112,147,254,0.8)' : ['rgba(108,130,145,0.2)'],
                    titleColor: (opts.type == 'chart') ? (opts.areaColor) != '' ? [opts.areaColor] : 'rgba(112,147,254,0.8)' : '#656565',
                    xAxis: 'rgba(54,60,78,0.1)',
                    yAxis: 'rgba(54,60,78,0.1)',
                    border: '#eee'
                },
                dark: {
                    backgroundColor: '#202328',
                    color: (opts.type == 'chart') ? (opts.textColor) != '' ? [opts.textColor] : '#fff'  : '#fff',
                    fontFamily: opts.font,
                    chartColors: (opts.type == 'chart') ? (opts.areaColor) != '' ? [opts.areaColor] : 'rgba(112,147,254,0.8)' : ['rgba(108,130,145,0.2)'],
                    titleColor: (opts.type == 'chart') ? (opts.areaColor) != '' ? [opts.areaColor] : 'rgba(112,147,254,0.8)' : '#fff',
                    xAxis: '#363c4e',
                    yAxis: '#363c4e',
                    border: '#202328'
                }
            };

            var theme = themes[opts.theme];

            var periods = { day: 24, week: 168, month: 30, threemonths: 90, sixmonths: 180, year: 365 };
            var periodnames = { day: 'Day', week: 'Week', month: 'Month', threemonths: '3 Months', sixmonths: '6 Months', year: 'Year' }
            var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            var breakpoint = 320;
            var chart = echarts.init(self.get(0));

            var options = {
                animation: false,
                backgroundColor: theme.backgroundColor,
                color: theme.chartColors,
                textStyle: { color: theme.color, fontFamily: theme.fontFamily },
                title : {
                    text: opts.coin +'/'+ opts.currency,
                    subtext: periodnames[opts.period],
                    textStyle: { color: theme.titleColor }
                },
                grid: { x: (opts.type == 'chart') ? opts.config.line.l : opts.config.candlestick.l, x2: (opts.type == 'chart') ? opts.config.line.r : opts.config.candlestick.r, y: (self.width() > breakpoint) ? 80 : 110, y2: 40 },
                tooltip : {
                    trigger: 'axis',
                    formatter: function (params) {

                        var tooltip = params[0].name;

                        if (opts.type == 'chart') {
                            tooltip += '<br/>';
                            tooltip += params[0].marker + ' Price: <b style="color: #fff;">' + opts.symbol + addCommas(params[0].value);
                            tooltip += '</b>';
                        } else {
                            tooltip += '<br/>';
                            tooltip += params[0].marker + ' H: <b style="color: #fff;">' + opts.symbol + addCommas(params[0].value[4]) + '</b>';
                            tooltip += '  L: <b style="color: #fff;">' + opts.symbol + addCommas(params[0].value[3]) + '</b>';
                            tooltip += '<br/>';
                            tooltip += params[0].marker + ' O: <b style="color: #fff;">' + opts.symbol + addCommas(params[0].value[2]) + '</b>';
                            tooltip += '  C: <b style="color: #fff;">' + opts.symbol + addCommas(params[0].value[1]) + '</b>';
                            tooltip += '<br/>';
                            tooltip += params[1].marker + ' V: <b style="color: #fff;">' + addCommas(params[1].value) + "</b> " + opts.coin;
                        }

                        return tooltip;
                    }
                },
                dataZoom: { show : false, realtime: true, start : 0, end : 100 },
                toolbox: {
                    show : true,
                    itemSize: 22,
                    left: (self.width() > breakpoint) ? 'right' : 'left',
                    top: (self.width() > breakpoint) ? 'top' : 50,
                    feature : {
                        myTool1: {
                            show: true,
                            title: periodnames['day'],
                            icon: 'image://'+mcp.url+'/assets/public/charts/images/1d-dark-01.svg',
                            onclick: function () { changeData('day'); }
                        },
                        myTool2: {
                            show: true,
                            title: periodnames['week'],
                            icon: 'image://'+mcp.url+'/assets/public/charts/images/1w-dark-01.svg',
                            onclick: function () { changeData('week'); }
                        },
                        myTool3: {
                            show: true,
                            title: periodnames['month'],
                            icon: 'image://'+mcp.url+'/assets/public/charts/images/1m-dark-01.svg',
                            onclick: function () { changeData('month'); }
                        },
                        myTool4: {
                            show: true,
                            title: periodnames['threemonths'],
                            icon: 'image://'+mcp.url+'/assets/public/charts/images/3m-dark-01.svg',
                            onclick: function () { changeData('threemonths'); }
                        },
                        myTool5: {
                            show: true,
                            title: periodnames['sixmonths'],
                            icon: 'image://'+mcp.url+'/assets/public/charts/images/6m-dark-01.svg',
                            onclick: function () { changeData('sixmonths'); }
                        },
                        myTool6: {
                            show: true,
                            title: periodnames['year'],
                            icon: 'image://'+mcp.url+'/assets/public/charts/images/1y-dark-01.svg',
                            onclick: function () { changeData('year'); }
                        },
                        mark : { show: false },
                        dataView : { show: false },
                        magicType : { show: false },
                        restore : { show: false },
                        saveAsImage : { show: false }
                    }
                },
                xAxis : [],
                yAxis : [],
                series : []
            };

            if (opts.type == 'chart') {

                options.xAxis.push({
                    type : 'category',
                    boundaryGap : false
                });

                options.yAxis.push({
                    type : 'value',
                    scale: true,
                    axisLabel: {
                        formatter: function(value) {
                            return addCommas(value);
                        }
                    },
                    splitLine: {
                        show: true,
                        lineStyle: { color: theme.yAxis, width: 1, type: 'solid' }
                    },
                    boundaryGap: ['5%', '0%']
                });

                options.series.push({
                    name: 'Price',
                    type: 'line',
                    smooth: opts.smooth,
                    itemStyle: { normal: { areaStyle: { type: 'default' } } },
                });

            } else {

                options.xAxis.push({
                    type: 'category',
                    boundaryGap: true,
                    axisTick: { onGap:false },
                    splitLine: {
                        show: false
                    }
                });

                options.yAxis.push({
                    type : 'value',
                    scale: false,
                    axisLabel: {
                        formatter: function(value) {
                            return addCommas(value);
                        }
                    },
                    splitLine: {
                        show: false
                    },
                    boundaryGap: ['0%', '0%']
                }, {
                    type : 'value',
                    scale: true,
                    axisLabel: {
                        formatter: function(value) {
                            return addCommas(value);
                        }
                    },
                    splitLine: {
                        show: true,
                        lineStyle: { color: theme.yAxis, width: 1, type: 'solid' }
                    },
                    boundaryGap: ['0%', '0%']
                });

                options.series.push({
                    name:'OHLC',
                    type:'k',
                    itemStyle: {
                        normal: { color: '#dc3545', color0: '#23BF08' }
                    },
                    yAxisIndex: 1,
                });

                options.series.push({
                    name: 'Volume',
                    type: 'bar'
                });

            }

            self.css('background', theme.backgroundColor);
            self.css('border-color', theme.border);

            function changeData(period) {
                opts.period = period;
                options.title.subtext = periodnames[opts.period];
                drawChart();
            }

            function getData(callback) {

                var url = 'https://min-api.cryptocompare.com/data/';
                url += (opts.period === 'day' || opts.period === 'week') ? 'histohour' : 'histoday';
                url += '?fsym=' + opts.coin + '&tsym=' + opts.currency;
                url += '&limit=' + periods[opts.period] + '&aggregate=1&extraParams=massivecrypto';

                var stname = "mcw-" + opts.coin.toLowerCase() + "-" + opts.currency.toLowerCase() +  "-" + opts.period;

                if ((sessionStorage.getItem(stname) === null) || sessionStorage.getItem(stname) == '') {

                    $.get(url, function(data) {
                        sessionStorage.setItem(stname, JSON.stringify(data));
                        return callback(data);
                    }, "json");

                } else {

                    var json = JSON.parse(sessionStorage.getItem(stname));
                    return callback(json);

                }

            }

            function formatAMPM(date) {
                var hours = date.getHours();
                var minutes = date.getMinutes();
                var ampm = hours >= 12 ? 'PM' : 'AM';
                hours = hours % 12;
                hours = hours ? hours : 12; // the hour '0' should be '12'
                minutes = minutes < 10 ? '0'+minutes : minutes;
                var strTime = hours + ':' + minutes + ' ' + ampm;
                return strTime;
            }

            function drawChart() {

                chart.showLoading('default', { text: '', color: theme.titleColor, maskColor: theme.backgroundColor  });

                getData(function(data) {

                    var labels = [], values = [], volumes = [];

                    for (i = 0; i < data.Data.length; i++) {

                        var date = new Date(data.Data[i].time * 1000);
                        date = (opts.period == 'day') ? months[date.getMonth()] + " " + formatAMPM(date) : months[date.getMonth()] + " " + date.getDate();

                        var value = (opts.type == 'chart') ? data.Data[i].close : [data.Data[i].close, data.Data[i].open, data.Data[i].low, data.Data[i].high];

                        labels.push(date);
                        values.push(value);
                        volumes.push(data.Data[i].volumefrom);

                    }

                    options.xAxis[0].data = labels;
                    options.series[0].data = values;

                    if (opts.type == 'candlestick') {
                        var zoomstart = Math.round((periods[opts.period] / 60) * 10);
                        var zoomshow = (opts.type == 'candlestick' && zoomstart > 10) ? true : false;

                        options.dataZoom.show = zoomshow;
                        options.dataZoom.start = zoomstart;
                        options.grid.y2 = (zoomshow) ? 80 : 40;
                        options.series[1].data = volumes;
                    }

                    chart.setOption(options);
                    chart.hideLoading();
                });

            };

            drawChart();

            $(window).on('resize', function(){
                options.grid.y = (self.width() > breakpoint) ? 80 : 110;
                options.toolbox.left = (self.width() > breakpoint) ? 'right' : 'left';
                options.toolbox.top = (self.width() > breakpoint) ? 'top' : 50;
                chart.setOption(options);
                chart.resize();
            });

            self.visibilityChanged({
                callback: function(element, visible, initialLoad) {
                    if (visible) {
                        $(window).trigger('resize');
                    }
                },
                runOnLoad: true,
                frequency: 100
            });

        });

    });

    $(document).on('mcw', '.mcw-converter', function() {

        var self = $(this);

        depp.require('selectize', function() {

            self.find('select').selectize({
                onInitialize: function () {
                    var s = this;
                    this.revertSettings.$children.each(function () {
                        $.extend(s.options[this.value], $(this).data());
                    });
                    s.$dropdown.addClass('mcw-conv-style');
                },
                dropdownParent: "body"
            });
            self.find('.mcw-convert-swap').click(function() {
                self.find('.mcw-form-group').eq(0).toggleClass('mcw-form-group-swap');
            });
            var from = self.attr('data-from');
            var to = self.attr('data-to');
            var auto = (self.attr('data-auto') == 'true');
            var optionone = self.find('select').first();
            var optiontwo = self.find('select').last();
            var fieldone = self.find('input.mcw-field').first();
            var fieldtwo = self.find('input.mcw-field').last();
            var direction = 'down';
    
            var curfiat = self.closest('.cryptoboxes').data('fiat');
            var curcrypto = self.closest('.cryptoboxes').data('crypto');
    
            var fromdefault = (from == 'fiat') ? curfiat : '';
            var todefault = (from == 'crypto') ? ((to == 'fiat') ? curfiat : ((optionone[0].value == 'bitcoin') ? 'ethereum' : '')) : ((to == 'fiat') ? ((curfiat == 'USD') ? 'EUR' : 'USD') : ((curcrypto != '') ? curcrypto : ''));
    
            if(fromdefault != ''){ optionone[0].selectize.setValue(fromdefault); }
            if(todefault != '') { optiontwo[0].selectize.setValue(todefault); }
    
            // Calculate initial
            fieldone.val(1); calcdown();
    
            if (auto) {
    
                fieldone.on('input', function() {
                    calcdown();
                });
    
                fieldtwo.on('input', function() {
                    calcup();
                });
    
                optionone.change(function() {
                    calcup(); direction = 'up';
                });
    
                optiontwo.change(function() {
                    calcdown(); direction = 'down';
                });
    
            } else {
    
                fieldone.on('input', function() {
                    direction = 'down';
                });
    
                fieldtwo.on('input', function() {
                    direction = 'up';
                });
    
                var button = self.find('.mcw-button');
    
                button.click(function(e) {
                    e.preventDefault();
                    var calc = (direction == 'down') ? calcdown() : calcup();
                });
            }
    
            function calcdown() {
    
                var optiononeval = optionone[0].selectize.options[optionone.val()].val;
                var optiontwoval = optiontwo[0].selectize.options[optiontwo.val()].val;
    
                var out = '', val = (mcp.numformat === 'US') ? parseFloat(fieldone.val().replace(/,/g, '')) : parseFloat(fieldone.val().replace(/\./g, ''));
    
                if (from === 'crypto' && to === 'crypto') {
                    out = (val) ? val * (optiononeval / optiontwoval) : '';
                } else if (from === 'fiat' && to === 'fiat') {
                    out = (val) ? val * (optiontwoval / optiononeval) : '';
                } else if (from === 'fiat' && to === 'crypto') {
                    out = (val) ? val / (optiononeval*optiontwoval) : '';
                } else {
                    out = (val) ? val * optiononeval * optiontwoval : '';
                }
    
                var out = parseFloat(out);
                var decimals = out >= 1 ? 2 : (out < 0.000001 ? 8 : 6);
                fieldtwo.val(addCommas(out.toFixed(decimals)));
            }
    
            function calcup() {
    
                var optiononeval = optionone[0].selectize.options[optionone.val()].val;
                var optiontwoval = optiontwo[0].selectize.options[optiontwo.val()].val;
    
                var out = '', val = (mcp.numformat === 'US') ? parseFloat(fieldtwo.val().replace(/,/g, '')) : parseFloat(fieldtwo.val().replace(/\./g, ''));
    
                if (from === 'crypto' && to === 'crypto') {
                    out = (val) ? val * (optiontwoval / optiononeval) : '';
                } else if (from === 'fiat' && to === 'fiat') {
                    out = (val) ? val * (optiononeval / optiontwoval) : '';
                } else if (from === 'fiat' && to === 'crypto') {
                    out = (val) ? val * optiononeval * optiontwoval : '';
                } else {
                    out = (val) ? (val * (1 / optiontwoval)) / optiononeval : '';
                }
    
                var out = parseFloat(out);
                var decimals = out >= 1 ? 2 : (out < 0.000001 ? 8 : 6);
                fieldone.val(addCommas(out.toFixed(decimals)));
            }

        });

    });

    $(document).on('mcw', '.mcw-card-7', function() {

        var self = $(this);
        
        depp.require('bounty', function() {

            var el = self.find('.mcw-price');
            var rate = 1;
            var curprice = el.text();
            var decimals = parseFloat(el.attr('data-price')) >= 1 ? 2 : (parseFloat(el.attr('data-price')) < 0.000001 ? 8 : 6);
            bounty.default({ el: el[0], initialValue: curprice, value: curprice });

            window.socket.addEventListener('message', function(msg) {

                var tradeMsg = JSON.parse(msg.data);
                
                if (el.data('live') == tradeMsg.base) {
                    if (tradeMsg.priceUsd !== parseFloat(el.attr('data-price'))) {
                        var newprice = el.attr('data-symbol') + addCommas(parseFloat(tradeMsg.priceUsd * rate).toFixed(decimals));
                        bounty.default({ el: el[0], initialValue: curprice, value: newprice });
                        curprice = newprice;
                        el.attr('data-price', tradeMsg.priceUsd);
                    }
                }

            });

            var toggleswitch = self.find('.mcw-toggle-switch');

            toggleswitch.click(function() {
                rate = $(this).data('rate');
                self.find('.mcw-toggle-switch').removeClass('active');
                $(this).addClass('active');

                var newprice = $(this).data('symbol') + addCommas(parseFloat(el.attr('data-price') * rate).toFixed(decimals));

                bounty.default({ el: el[0], initialValue: curprice, value: newprice });
                curprice = newprice;
                el.attr('data-symbol', $(this).data('symbol'));
            });

        })

    });

    $(document).on('mcw', '.mcw-box', function() {
        var self = $(this);

        self.find('canvas').each(function() {
            $(this).drawChart();
        });

        self.find('.chart-offset').show();

        if (self.hasClass('mcw-box-2')) {
            var crypto = self.find('.mcw-crypto-convert');
            var fiat = self.find('.mcw-fiat-convert');

            self.find('select').change(function() {
                var total = parseFloat(crypto.val()) * parseFloat(fiat.val());
                var decimals = total >= 1 ? 2 : (total < 0.000001 ? 8 : 6);
                total = total.toFixed(decimals);
                self.find('.mcw-price').html(total);

                var prefix = fiat.find(':selected').data('prefix');
                self.find('.mcw-price-symbol').html(prefix);

                var percent = crypto.find(':selected').data('change');
                self.find('.mcw-list-change').html(Math.abs(percent) + '%');
                if (percent >= 0) { self.find('.mcw-list-change').toggleClass('down up'); } else { self.find('.mcw-list-change').toggleClass('up down'); }
            });
        }
    });

    $(document).on('mcw', '.mcw-list', function() {
        var self = $(this);
        self.find('canvas').each(function() { $(this).drawChart(); });
        if (self.hasClass('mcw-list-2')) { self.mcwAccordion(); }
    });

    $(document).on('mcw', '.mcw-multi-tabs', function() {
        var self = $(this);
        var tabs = self.find('.mcw-tab');
        var items = self.find('.mcw-tab-content');

        tabs.click(function() {
            var index = $(this).index();

            tabs.removeClass('active');
            $(this).addClass('active');

            items.not(':eq(' + index + ')').removeClass('active');
            items.eq(index).addClass('active');
        });
    });

    $.fn.multiply = function(numCopies) {
		var newElements = this.clone();
		for(var i = 1; i < numCopies; i++) {
			newElements = newElements.add(this.clone());
		}
		return newElements;
    };

    $.fn.coinmcResize = function() {
        var breakpoint = 'xs';
        var width = (this.find('.cmc-row').length > 0) ? this.find('.cmc-row').eq(0).width() : this.width();

        if (width >= 992) {
            breakpoint = 'lg';
        } else if (width >= 768) {
            breakpoint = 'md';
        } else if (width >= 576) {
            breakpoint = 'sm';
        }

        this.removeClass('cmcl-xs cmcl-sm cmcl-md cmcl-lg').addClass('cmcl-' + breakpoint);
        this.trigger('view');
    }

    $(document).on('mcw', '.mcw-ticker', function() {

        var listWidth = 0;
        var self = $(this);
        var elem = self.find('.cc-stats');

        self.imagesLoaded().then(function() {

            elem.find('.cc-coin').each(function() {
                listWidth += $(this).innerWidth();
            });

            var clonedElem = elem.find('.cc-coin');
            var mult = elem.innerWidth() / listWidth;

            elem.append('<div class="cc-dup"></div>');

            if(mult > 0.5){
                elem.find('.cc-dup').append(clonedElem.multiply(Math.ceil(mult)));
            } else {
                elem.find('.cc-dup').append(clonedElem.multiply(1));
            }

            elem.css('width', listWidth);

            elem.find('canvas').each(function() {
                $(this).drawChart();
            });

            var itemcount = elem.find('.cc-coin').length;
            var itemsize = listWidth / itemcount;

            var speed = self.data('speed');
            var duration = itemsize * 10;
            
            if (speed === 200) {
                duration = 10;
            } else if (speed == 0) {
                duration = 0;
            } else if (speed > 100) {
                speed = speed - 100;
                speed = (speed / 10) * itemsize;
                duration = duration - speed;
            } else if (speed < 100) {
                speed = 100 - speed;
                speed = (speed / 10) * (itemsize * 8);
                duration = duration + speed;
            }

            var speed = (itemcount * duration) / 1000;
            elem.css('animation-duration',  speed + 's');

            self.css('visibility', 'visible');
            
            if (self.hasClass('mcw-header')) {
                $('body, .navbar-vertical').css('padding-top', self.height() + 'px');
            }
        });

    });

    $('.mcw-tr').each(function() { $(this).trigger('mcw'); });

    Array.prototype.unique = function() {
        return this.filter(function (value, index, self) { 
          return self.indexOf(value) === index;
        });
    }

    var mcwdom = [];
    $('.massive-shortcode').each(function() {
        mcwdom.push($(this).data('id'));
    });

    if (mcwdom.length > 0) {
        $.get(mcp.url + '/widgets/?id=' + encodeURIComponent(mcwdom.unique()), function(data) {
            $('.massive-shortcode').each(function() {
                var id = $(this).data('id');
                $(this).html(data[id]);
                $(this).find('.mcw-tr').trigger('mcw');
            });

            $('.mcw-dark-theme,.mcw-midnight-theme,.mcw-custom-theme,.mcw-table.dark').each(function() {
                $(this).invertable();
            });

            realtimeUpdate();
        });
    }

});