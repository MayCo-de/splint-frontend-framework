
/**
 *
 * @class
 * @name Header
 *
 * @description Create a header.
 *
 * @see {@link setLogo()}
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
        
        return this;
    }

    /**
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
        $('.header').append('<a id="logoLinkBox" href="./index.html"></a>');
        const logoLinkBox = $('#logoLinkBox');    

        if(logoPath != "") {
            logoLinkBox.append('<img class="logoIcon" src="'+logoPath+'">');
        }

        if(logoText != "") {
            logoLinkBox.append('<span class="logoText">'+logoText+'</span>');
        }   
    }

    /**
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

export default Header;