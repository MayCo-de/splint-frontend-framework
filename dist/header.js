
/**
 * 
 * @function
 * @name animateCSS()
 * Get "animate.style"-animations for your elements
 * 
 * @param {string} element 
 * @param {string} animation 
 * @param {} prefix 
 * 
 * @example
 * animateCSS(".header", "flipInX");
 *  
 */
const animateCSS = (element, animation, prefix = 'animate__') =>
  // We create a Promise and return it
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    const node = document.querySelector(element);

    node.classList.add(`${prefix}animated`, animationName);

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd(event) {
      event.stopPropagation();
      node.classList.remove(`${prefix}animated`, animationName);
      resolve('Animation ended');
    }

    node.addEventListener('animationend', handleAnimationEnd, {once: true});
});

/**
 * 
 * @function
 * @name delay()
 * Generate a delay
 * 
 * @param {int} time - ms 
 * 
 * @example
 * // Wait for 3 seconds
 * async function test() {
 *     console.log("Hello");
 *     await delay(3000);
 *     console.log("World!");
 * }
 * 
 */
function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}



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

    appendMenuButton() {
        $('.header').append('<button class="openMenuButton" id="openMenuButton" onclick="openSidebar()"><i class="bi bi-list"></i></button>');
    }



    mobile() {
        $("#headerNavigation").css("display", "none");

        this.appendMenuButton();      

        let items = $(".openMenuButton");
        if(items.length > 1) {
            for (let i = 0; i < items.length; i++) {
                $(".openMenuButton")[i+1].remove();
            }
        } 
    }

    desktop() {
        const navigation = $("#headerNavigation");

        navigation.css("display", "flex");

        let items = $(".openMenuButton");
        if(items.length > 0) {
            $(".openMenuButton").remove();
        } 

        $(".mobileSidebar").remove();
    }
}

// Set current link to active
$('body').ready(function() {
    const acitveLink = "#navLink-" + $('body').attr("siteName");
    $(acitveLink).addClass("active");
});


function openSidebar() {
    $("body").append("<div class='mobileSidebar' id='mobileSidebar'></div>");
    const mobileSidebar = $("#mobileSidebar");

    animateCSS(".mobileSidebar", "flipInY");

    mobileSidebar.append("<div class='sidebarHeader' id='sidebarHeader'></div>");
    const sidebarHeader = $("#sidebarHeader");

    sidebarHeader.append("<h3 class='sidebarHeadline' id='sidebarHeadline'>Menu</h3>");
    sidebarHeader.append("<button class='closeMenuButton' id='closeMenuButton' onclick='closeSidebar()'><i class='bi bi-chevron-bar-right'></i></button>");
    mobileSidebar.append("<div clas='sideNav' id='sideNav'></div>");
    const sideNav = $("#sideNav");

    const navLinks = $("#headerNavigation").children();
    navLinks.each(function() {
        let link = $(this).attr("id");
        linkName = jQuery.trim(link).substring(8);
        let linkTarget = $(this).attr("href");

        sideNav.append("<a class='sideNavLink' id='sideNavLink-" + linkName + "' href='" + linkTarget + "'>" + linkName + "</a>");
    });
}

async function closeSidebar() {
    animateCSS(".mobileSidebar", "flipOutY");
    await delay(600);
    $("#mobileSidebar").remove();
}
