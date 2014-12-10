/*----------------------
Auto Timer Coocki based
 -----------------------*/
var CountdownEndAfterDays =leadpages_input_data["countdowndays"];

var today_date = new Date();
var end_date = new Date();
end_date.setDate(parseInt(today_date.getDate())+parseInt(CountdownEndAfterDays));

var cookieexpiry = new Date(today_date.getTime() + (parseInt(CountdownEndAfterDays)+1) * 24 * 3600 * 1000); // plus 30 days

function setCookie(name, value)
{
document.cookie=name + "=" + escape(value) + "; path=/; expires=" + cookieexpiry.toGMTString();
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) != -1) return c.substring(name.length,c.length);
    }
    return "";
}

if(field1 = getCookie("CDEXPIREDATE")) 
{
    end_date = new Date(decodeURIComponent(field1));
}
else
{
 setCookie("CDEXPIREDATE", end_date);
}  

/*---------------------------
 LeadPages Custom Functions
 ----------------------------*/
var leadpages_input_data = {
    'toDate': "2014/12/15 18:00:00 GMT-0400" //Countdown Timer End - (Format: YYYY/MM/DD HH:MM:SS GMT-0400). 24 hour time format. GMT time format required. See greenwichmeantime.com to convert for your timezone.
};

/*---------------------------
 Countdown Timer
 ----------------------------*/
(function(h){h.fn.countdown=function(a,l){function m(a,d){return function(){return d.call(a)}}var k="seconds minutes hours days weeks daysLeft".split(" ");return this.each(function(){function j(){if(0===e.closest("html").length)clearInterval(f),d("removed");else{c--;0>c&&(c=0);g={seconds:c%60,minutes:Math.floor(c/60)%60,hours:Math.floor(c/60/60)%24,days:Math.floor(c/60/60/24),weeks:Math.floor(c/60/60/24/7),daysLeft:Math.floor(c/60/60/24)%7};for(var a=0;a<k.length;a++){var b=k[a];i[b]!=g[b]&&(i[b]=g[b],d(b))}0==c&&(clearInterval(f),d("finished"))}}function d(d){var b=h.Event(d);b.date=new Date((new Date).valueOf()+c);b.value=i[d]||"0";b.toDate=a;b.lasting=g;switch(d){case "seconds":case "minutes":case "hours":b.value=10>b.value?"0"+b.value.toString():b.value.toString();break;default:b.value&&(b.value=b.value.toString())}l.call(e,b)}if(!(a instanceof Date))if(String(a).match(/^[0-9]*$/))a=new Date(a);else if(a.match(/([0-9]{1,2})\/([0-9]{1,2})\/([0-9]{2,4})\s([0-9]{1,2})\:([0-9]{2})\:([0-9]{2})/)||a.match(/([0-9]{2,4})\/([0-9]{1,2})\/([0-9]{1,2})\s([0-9]{1,2})\:([0-9]{2})\:([0-9]{2})/))a=new Date(a);else if(a.match(/([0-9]{1,2})\/([0-9]{1,2})\/([0-9]{2,4})/)||a.match(/([0-9]{2,4})\/([0-9]{1,2})\/([0-9]{1,2})/))a=new Date(a);else throw Error("Doesn't seen to be a valid date object or string");var e=h(this),i={},g={},f=e.data("countdownInterval"),c=Math.floor((a.valueOf()-(new Date).valueOf())/1E3);j();f&&clearInterval(f);e.data("countdownInterval",setInterval(m(e,j),1E3));f=e.data("countdownInterval")})}})(jQuery);

$(function() {
    $('ul#countdown').countdown(leadpages_input_data['toDate'], function(event) {
    var $this = $(this);
    switch(event.type) {
      case "seconds":
      case "minutes":
      case "hours":
      case "days":
      case "weeks":
      case "daysLeft":
        $this.find('span#'+event.type).html(event.value);
        break;
      case "finished":
        
        break;
    }
  });
});


$(function() {
    $('ul#countdowncookie').countdown(end_date, function(event) {
    var $this = $(this);
    switch(event.type) {
      case "seconds":
      case "minutes":
      case "hours":
      case "days":
      case "weeks":
      case "daysLeft":
        $this.find('span#'+event.type).html(event.value);
        break;
      case "finished":
        
        break;
    }
  });
});

$(function () {
    //variables are defined in the template.json file
    for (var key in leadpages_input_data) {
        var url_variables = ['facebookurl'];
        if (url_variables.indexOf(key) !== -1) {
            if (leadpages_input_data[key] === '') {
                leadpages_input_data[key] = window.location.href;
            }
        }
    }
    ;

    //leadpages_input_data variables come from the template.json "variables" section
    $('.pop-facebook').attr('href', "https://www.facebook.com/sharer/sharer.php?u=" + leadpages_input_data["facebookurl"]);
});

/*---------------------------
 Social popup windows
 ----------------------------*/
$(document).ready(function () {

    $('#countdowncookie').attr('data-timestamp', Number(end_date));

    $('.pop-facebook').click(function (event) {
        var width = 575,
            height = 400,
            left = ($(window).width() - width) / 2,
            top = ($(window).height() - height) / 2,
            url = this.href,
            opts = 'status=1' +
                ',width=' + width +
                ',height=' + height +
                ',top=' + top +
                ',left=' + left;

        window.open(url, 'facebook', opts);

        return false;
    });
});



// Must load 3rd party API after data-attributes have been updated.

/* Facebook */
!(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = "//connect.facebook.net/en_US/all.js#xfbml=1";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));




