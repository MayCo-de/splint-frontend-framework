export default function openSidebar() {
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

export async function closeSidebar() {
    animateCSS(".mobileSidebar", "flipOutY");
    await delay(600);
    $("#mobileSidebar").remove();
}