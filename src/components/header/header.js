
/**
 *
 * @class
 *
 * @name Header
 *
 * @description Create a header.
 *
 * @see {@link setLogo()}
 * @see {@link setLogoTarget()}
 * @see {@link addLink()}
 * @see {@link removeLink()}
 * @see {@link addThemeButton()}
 * @see {@link setStyle()}
 *
 * @example
 *  const newHeader = new Header();
 *  newHeader.setLogo("./assests/logo_icon.svg", "Test Inc.");
 *  newHeader.setStyle("background-color", "aqua");
 *
 * @returns New Header to your page.
 *
 */
class Header {
    /**
     * 
     * @returns {object} this
     * 
     * @constructor
     *
     */
    constructor() {
        $('body').append('<div class="header"></div>');
        $('.header').append('<a id="logoLinkBox" href="./index.html"></a>');
        $('.header').append('<nav id="headerNavigation"></nav>');
        
        return this;
    }

    /**
     *  
     * @method
     *
     * @name setLogo()
     * @description Setup logo for header.
     *
     * @see {@link Header}
     *
     * @param {string} logoPath - Enter the path to icon image.
     * @param {string} logoText -  Enter the name of the company.
     *
     * @example 
     * newHeader.setLogo("./assests/logo_icon.svg", "Test Inc.");
     *
    */
    setLogo(logoPath, logoText) {
        const logoLinkBox = $('#logoLinkBox');    

        if(logoPath != "") {
            logoLinkBox.append('<img class="logoIcon" src="' + logoPath + '">');
        }

        if(logoText != "") {
            logoLinkBox.append('<span class="logoText">' + logoText + '</span>');
        }   
    }

    /**
     *
     * @method
     *
     * @name setLogoTarget()
     * @description Setup logos href link for onclick event.
     *
     * @see {@link Header}
     *
     * @param {string} logoTarget - Enter the href link for the logo.
     *
     * @example 
     * newHeader.setLogoTarget("./index.html");
     *
     */
    setLogoTarget(logoTarget) {
        $('#logoLinkBox').attr('href', logoTarget);
    }

    /**
     *
     * @method
     *
     * @name addLink()
     * @description Add link to header.
     *
     * @see {@link Header}
     *
     * @param {string} name - The title of the Link.
     * @param {string} target - The target file of the link (href).
     *
     * @example 
     * newHeader.addLink("Home", "./index.html");
     *
     */
    addLink(name, target){
        $('#headerNavigation').append('<a class="navLink" id="navLink-' + name + '" href="' + target + '">' + name + '</a>');
    }

    /**
     *
     * @method
     *
     * @name removeLink()
     * @description Remove link from header.
     *
     * @see {@link Header}
     *
     * @param {string} name - The title of the Link.
     *
     * @example 
     * newHeader.removeLink("Home");
     *
     */
    removeLink(name){
        $('#navLink-' + name).remove();
    }

    /**
     *
     * @method
     *
     * @name addThemeButton()
     * @description Add theme Button to header.
     *
     * @see {@link Header}
     *
     * @param {boolean} makeThemeButton - Set true for theme button.
     *
     * @example 
     * newHeader.addThemeButton(true);
     *
     */
    addThemeButton(makeThemeButton) {
        if(makeThemeButton === true) {
            const bodyTheme = $('body').attr('theme');

            $('#headerNavigation').append('<button class="theButton" id="themeButton"></button>');
        
            if(bodyTheme == "light") {
                $('#themeButton').append('<i class="bi bi-moon-fill"></i>');
            }

            if(bodyTheme == "dark") {
                $('#themeButton').append('<i class="bi bi-brightness-high-fill"></i>');
            }
        }
    }

    /**
     *
     * @method
     *
     * @name setStyle()
     * @description Customize CSS styling of the header.
     * 
     * @see {@link Header}
     * 
     * @param {STRING} targetAttribute Enter the name of the atrribute you want to customize. 
     * @param {STRING} targetValue Enter the new value of the attrinute.
     * 
     * @example 
     * newHeader.setStyle("background-color", "aqua");
     * 
    */
    setStyle(targetAttribute, targetValue) {
        $('.header').css(targetAttribute, targetValue);
    }


}

// Set current link to active
$('body').ready(function() {
    const acitveLink = "#navLink-" + $('body').attr("siteName");
    $(acitveLink).addClass("active");
});

