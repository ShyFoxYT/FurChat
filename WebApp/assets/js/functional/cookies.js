window.addEventListener('load', function () {
    function getCookieValue(name) {
        var cookies = document.cookie.split(';');

        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            var cookieParts = cookie.split('=');

            if (cookieParts[0] === name) {
                return cookieParts[1];
            }
        }

        return null;
    }

    let cookieAllow = getCookieValue('CookieAllowed');
    
    alert('Loaded sucessfuly! ' + cookieAllow)
    check(cookieAllow)
});

    var pop = document.getElementById('cookieBanner');

function check(vari) {
    var cookieAllow = vari;
        if (cookieAllow != 'true') {

            var pop = document.getElementById('cookieBanner');

            pop.style.opacity = 1;

        } else {
            pop.style.opacity = 0;
        }
    }

function consent() {
    setCookie('CookieAllowed', 'true', 365, 'furchat.de', true);
    check();
}

function noconsent() {
    setCookie('CookieAllowed', 'false', 365, 'furchat.de', true);
    check();
}


function setCookie(name, value, days, domain, secure) {
    var expires = "";
    var dmain = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
        dmain = "; domain=" + domain + "; secure=" + secure + "; SameSite=none";
    }

    document.cookie = name + "=" + (value || "") + expires + dmain

}