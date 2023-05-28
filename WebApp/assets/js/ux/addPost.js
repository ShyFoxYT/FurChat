const fs = require("fs")

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
})


var postID = generatePostID();


function generatePostID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c){
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

//var pfpURL = getCookieValue('pfpURL');

//var uuid = getCookieValue('uuid');
let tempuuid = "1";
let textContent = "Test i testtest"
let pfpURL = "https://pbs.twimg.com/profile_images/1489597046814388225/VX1YcUTz_400x400.jpg";


//async function postFunction() {
    
    var filePath = "users/profiles/" + tempuuid + "/posts.json";

    //var postTextContent = document.getElementById('postInput');
    //var pTCV = postTextContent.value;

    let pTCV = "TestPost";

    let post_data;
    let json_post_data;

    fs.open(filePath, 'r+', (err, fd) =>{
        if (err) {
            console.error(err.code);
        }else{
            json_post_data = fs.readFileSync(filePath, 'utf-8');
            post_data = JSON.parse(json_post_data);

            post_data = postID || {};
            //post_data.postID = postID || {};
            post_data. postID .pTCV = textContent;
            post_data.postID.pfpurl = pfpURL;
            post_data.postID.uuid = tempuuid

            json_post_data = JSON.stringify(post_data);
            fs.writeFileSync(filePath, json_post_data);
            console.log('Saved!')
        }
    })
//}