let eaufield = document.getElementById('mail');
let passfield = document.getElementById('passw');
let remfield = document.getElementById('passwd');
let errormessage = document.getElementById('errmsg');
let phpLogin = document.getElementById('verifyer');

//Inputs
var eauInput = eaufield.value;
var passInput = passfield.value;
var remInput = remfield.value;

errormessage.style.display = 'none';

function loginFunction(){
    if(! eauInput){
        errormessage.style.display = 'flex';
        errormessage.innerHTML = '<p>An Email or Username is required!</p>';
        eaufield.focus;
        return;
    }
    if(! passInput){
        errormessage.style.display = 'flex';
        errormessage.innerHTML = '<p>An Password is required to login!</p>'
        passfield.focus;
        return;
    }


    phpLogin.src = '/assets/php/login.php?uname=' + eauInput + ';pass=' + passInput + ';rem=' + remInput;
    return;

}