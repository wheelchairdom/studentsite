document.addEventListener('DOMContentLoaded', function () {

    //TOGGLE NAV MOBILE MENU FOR SMALL SCREENS
    const menubutton = document.querySelector('.menu-button');
    const menunav = document.querySelector('.toggle-nav');
    menubutton.addEventListener('click', function () {
        if (menunav.getAttribute('data-navstate') === 'open') {
            // if true do this
            menunav.setAttribute('data-navstate', 'closed');
        } else {
            // else (if false) do this
            menunav.setAttribute('data-navstate', 'open');
        };
    });

    //TOGGLE ACCORDIAN VIA ADDING/REMOVING A CLASS
    var stickynavlinks = document.querySelectorAll('.sticky nav a');
    var i;
    for (i = 0; i < stickynavlinks.length; i++) {
        stickynavlinks[i].getElementsByTagName('h4')[0].onclick = function () {
            var stickymenu = document.querySelectorAll('.sticky .menu-button');
            var j;
            for (j = 0; j < stickymenu.length; j++) {
                stickymenu[j].remove("open");
            };
        }
    };
});