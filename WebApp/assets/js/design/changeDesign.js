var designStylesheet = document.getElementById('designSheet')
var light = '/assets/css/designs/light.css'
var dark = '/assets/css/designs/dark.css'
var oled = '/assets/css/designs/oled.css'

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

  let jsonLocation = getCookieValue('SettingjsonFileUrl');
  let settingData = JSON.stringify(jsonLocation);
  let designSetting = settingData.design;

  if(!designSetting) {
    console.error('ES WURDE KEIN DESIGN GEFUNDEN!');
    designStylesheet.setAttribute('href', light);
  } else {
    console.log('Design found. Applying' + designSetting);
    designStylesheet.setAttribute('href', designSetting);
  }
});

function onDesignChange(){

    

}