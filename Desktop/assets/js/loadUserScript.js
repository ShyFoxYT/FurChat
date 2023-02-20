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

    var profileUrl = getCookieValue('profileURL');

    if (profileUrl !== null) {
        document.getElementById("userURLscript").innerHTML = "<a href=\"" + profileUrl + "\"> <div class=\"nav-item\"><svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon icon-tabler icon-tabler-user\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"></path><circle cx=\"12\" cy=\"7\" r=\"4\"></circle><path d=\"M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2\"></path></svg></div> </a>";
    } else {
        console.error('Keine URL gefunden!')
    }
});