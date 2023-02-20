let details = navigator.userAgent;
let currentSite = window.location.href;
//let splitedURL = currentSite.split('https://beta.furchat.de/');

var pathname = new URL(currentSite).pathname;

let regexp = /android|iphone|kindle|ipad/i;

let isMobileDevice = regexp.test(details);

if(isMobileDevice) {

    document.location.href = 'https://m.furchat.de' + pathname;
} else {
    console.log('Is not a Mobile Device.')
    console.log(pathname)
}