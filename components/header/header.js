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
        
        const menuButton = $('.openMenuButton');
        menuButton.css("padding", ".9rem 1.2rem");
        menuButton.css("border", "none");
        menuButton.css("borderRadius", "8px");
        menuButton.css("fontSize", "1.5rem");
        menuButton.css("backgroundColor", "transparent");
        menuButton.css("color", "var(--primary-text)");
        menuButton.css("position", "absolute");
        menuButton.css("top", ".2rem");
        menuButton.css("right", "3rem");

        menuButton.on("focus", function() {
            menuButton.css("backgroundColor", "var(--bg-color-dark)");
            menuButton.css("cursor", "pointer");
            menuButton.css("transition", ".4s ease");
        });
    }



    mobile() {
        const navigation = $("#headerNavigation");
        const openMenuButton = $('.openMenuButton');

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
        const openMenuButton = $('.openMenuButton');

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

    mobileSidebar.css("position", "absolute");
    mobileSidebar.css("top", "0");
    mobileSidebar.css("right", "0");
    mobileSidebar.css("width", "20rem");
    mobileSidebar.css("height", "100vh");
    mobileSidebar.css("max-height", "100vh");
    mobileSidebar.css("backgroundColor", "var(--bg-color)");
    mobileSidebar.css("boxShadow", "-3px -3px 10px rgba(0, 0, 0, .15)");
    mobileSidebar.css("display", "flex");
    mobileSidebar.css("flexDirection", "column");
    mobileSidebar.css("alignItems", "center");
    mobileSidebar.css("justifyContent", "start");
    mobileSidebar.css("zIndex", "1200000");

    mobileSidebar.append("<div class='sidebarHeader' id='sidebarHeader'></div>");
    const sidebarHeader = $("#sidebarHeader");

    sidebarHeader.css("position", "relative");
    sidebarHeader.css("width", "100%");
    sidebarHeader.css("height", "4rem");
    sidebarHeader.css("height", "4rem");
    sidebarHeader.css("display", "flex");
    sidebarHeader.css("alignItems", "center");
    sidebarHeader.css("justifyContent", "space-between");

    sidebarHeader.append("<h3 class='sidebarHeadline' id='sidebarHeadline'>Menu</h3>");
    const sidebarHeadline = $("#sidebarHeadline");

    sidebarHeadline.css("position", "relative");
    sidebarHeadline.css("margin-left", "1rem");
    sidebarHeadline.css("fontSize", "1.2rem");

    sidebarHeader.append("<button class='closeMenuButton' id='closeMenuButton' onclick='closeSidebar()'><i class='bi bi-chevron-bar-right'></i></button>");
    const closeMenuButton = $("#closeMenuButton");

    closeMenuButton.css("position", "relative");
    closeMenuButton.css("margin-right", "1rem");
    closeMenuButton.css("padding", ".6rem");
    closeMenuButton.css("border", "none");
    closeMenuButton.css("borderRadius", "10px");
    closeMenuButton.css("fontSize", "1.3rem");
    closeMenuButton.css("backgroundColor", "transparent");
    closeMenuButton.css("color", "var(--primary-text)");

    mobileSidebar.append("<div clas='sideNav' id='sideNav'></div>");
    const sideNav = $("#sideNav");

    sideNav.css("position", "relative");
    sideNav.css("marginTop", "1rem");
    sideNav.css("width", "100%");
    sideNav.css("height", "auto");
    sideNav.css("display", "flex");
    sideNav.css("flexDirection", "column");
    sideNav.css("alignItems", "start");
    sideNav.css("justifyContent", "start");
    sideNav.css("gap", ".3rem");

    const navLinks = $("#headerNavigation").children();
    navLinks.each(function() {
        let link = $(this).attr("id");
        linkName = jQuery.trim(link).substring(8);
        let linkTarget = $(this).attr("href");

        sideNav.append("<a class='sideNavLink' id='sideNavLink-" + linkName + "' href='" + linkTarget + "'>" + linkName + "</a>");
    });

    const sideNavLink = $(".sideNavLink");
    sideNavLink.css("position", "relative");
    sideNavLink.css("left", "1rem");
    sideNavLink.css("padding", ".5rem 0");
    sideNavLink.css("borderRadius", "8px");
    sideNavLink.css("fontSize", "1.2rem");
    sideNavLink.css("color", "var(--secondary-text)");
    
    sideNavLink.on("focus", function() {
        $(this).css("padding", ".5rem 1.3rem");
        $(this).css("backgroundColor", "var(--primary)");
        $(this).css("color", "var(--button-text)");
        $(this).css("cursor", "pointer");
        $(this).css("transition", ".4s ease");
    });
}

async function closeSidebar() {
    animateCSS(".mobileSidebar", "flipOutY");
    await delay(600);
    $("#mobileSidebar").remove();
}
