let details = navigator.userAgent;
let currentSite = window.location.href;

var pathname = new URL(currentSite).pathname;

let regexp = /android|iphone|kindle|ipad/i;

let isMobileDevice = regexp.test(details);

if(isMobileDevice) {

    // deepcode ignore OR: <please specify a reason of ignoring this>
    document.location.href = 'https://m.furchat.de' + pathname;
} else {
    console.log('Mobile detect ran successfully.')
}