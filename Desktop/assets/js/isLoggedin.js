window.addEventListener('load', function(){
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
  
  var isLoggedIn = getCookieValue('isLoggedIn');
  
  if (isLoggedIn === null) {
    this.window.location.replace = './'
  } else {
    return;
  }
});

