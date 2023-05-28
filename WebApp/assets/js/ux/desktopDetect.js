let details = navigator.userAgent;
let currentSite = window.location.href;

var pathname = new URL(currentSite).pathname;

let regexp = /android|iphone|kindle|ipad/i;

let isMobileDevice = regexp.test(details);

if(!isMobileDevice) {

    document.location.href = 'https://beta.furchat.de' + pathname;
} else {
    console.log('Is a Mobile Device.')
    console.log(pathname)
}