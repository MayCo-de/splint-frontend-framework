function checkThemeCookie() {
    let name = 'savedColorTheme=';
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }

        if (c.indexOf(name) == 0) {
            return true;
        }
    }
    return false;
}

function getThemeCookie() {
    let name = 'savedColorTheme=';
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }

        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }

    return '';
}

function setThemeCookie(theme) {
    var date = new Date();
    let expires = 'expires='+ date.setDate(date.getDate() + 1);
    document.cookie = 'savedColorTheme=' + theme + ';' + expires + ';path=/';
}

function getPrefersColorSheme() {
    if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
    } else {
        return 'light';
    }
}

/**
 * 
 * @param {string} theme value of the theme
 * @param {boolean} setupCookie have to set the theme cookie? 
 */
function changeTheme(theme, setupCookie) {
    $(document.body).attr('data-theme', theme);

    if(setupCookie === true) {
        var dateNew = new Date();
        let expiresNew = 'expires='+ dateNew.setDate(dateNew.getDate() + 1);
        document.cookie = 'savedColorTheme= '+theme+'; '+expiresNew+'; path=/;';
    }
}

function changeButton(theme) {
    var themeIcon   = $('#themeIcon');
    var moonIcon    = '<i class=" themeIcon bi bi-moon-fill"></i>';
    var sunIcon     = '<i class=" themeIcon bi bi-brightness-high-fill"></i>';

    if(theme == 'light') {
        themeIcon.attr('src', moonIcon);
    } else {
        themeIcon.attr('src', sunIcon);
    }
}

$(function() {
    if(checkThemeCookie() === true) {
        var cookieTheme = getThemeCookie();
        changeTheme(cookieTheme, false);
        changeButton(cookieTheme);
    } else {
        var systemTheme = getPrefersColorSheme();
        changeTheme(systemTheme, true);
        changeButton(systemTheme);
    }
});


$('#themeButton').on('click', function(){
    var currentTheme = getThemeCookie();

    if(currentTheme == 'dark') {
        changeTheme('light', true);
        changeButton('light');
    } 
    
    if(currentTheme == 'light') {
        changeTheme('dark', true);
        changeButton('dark');
    }
});