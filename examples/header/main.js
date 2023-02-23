
const newHeader = new Header();                             // Create a new header

newHeader.setLogo("../../assets/favicon.svg", "Test GmbH"); // Setup the icon
newHeader.addLink('Home', './index.html');                  // Add a link to nav
newHeader.addLink('Contact', './index2.html');              // Add another link to nav
newHeader.addLink('Contact', './index2.html');              // Add another link to nav

const openMenuButton        = $("#openMenuButton");
const header                = $(".header");
const logo                  = $("#logoLinkBox");
const nav                   = $("#headerNavigation");
const headerWidth           = $(".header").width();
const logoWidth             = $("#logoLinkBox").width();
const navWidth              = $("#headerNavigation").width();
const openButtonWidth       = $("#openMenuButton").width();
const minWidth              = navWidth+logoWidth+12*16;
const mobileMinWidth        = openButtonWidth+logoWidth+12*16;

if(headerWidth < minWidth) {
    newHeader.mobile();
} else {
    closeSidebar();
    newHeader.desktop();
}

$( window ).resize(function() {
    const headerWidth   = $(".header").width();
    const logoWidth     = $("#logoLinkBox").width();
    const navWidth      = $("#headerNavigation").width();
    const minWidth      = navWidth+logoWidth+12*16;

    if(headerWidth < minWidth) {
        newHeader.mobile();
    } else {
        closeSidebar();
        newHeader.desktop();
    }
});