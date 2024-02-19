document.addEventListener('DOMContentLoaded', function () {
    var navToggle = document.getElementById('nav-toggle');
    var sideMenu = document.getElementById('side-menu-id');

    // Function to check if the target element is inside the side menu
    function isInsideMenu(element) {
        return sideMenu.contains(element) || element === sideMenu;
    }

    // Toggle the side menu when the nav toggle is clicked
    navToggle.addEventListener('click', function () {
        sideMenu.classList.toggle('open');
    });

    // Close the side menu when clicking outside of it
    document.addEventListener('click', function (event) {
        if (!isInsideMenu(event.target) && event.target !== navToggle) {
            sideMenu.classList.remove('open');
        }
    });

   /* // For Navigation Header
    // Get all menu items
    const menuItems = document.querySelectorAll('.header-menu-item');

    // Loop through each menu item
    menuItems.forEach(item => {
        // Add click event listener to each menu item
        item.addEventListener('click', () => {
            // Remove the "active" class from all menu items
            menuItems.forEach(item => {
                item.querySelector('a').classList.remove('active');
            });

            // Add the "active" class to the clicked menu item
            item.querySelector('a').classList.add('active');
        });
    });*/

  /*  //For side navigation view
    // Get all menu items
    const menuItemsNav = document.querySelectorAll('#side-menu-id li');

    // Loop through each menu item
    menuItemsNav.forEach(item => {
        // Add click event listener to each menu item
        item.addEventListener('click', () => {
            // Remove the "active" class from all menu items
            menuItemsNav.forEach(item => {
                item.querySelector('a').classList.remove('active');
            });

            // Add the "active" class to the clicked menu item
            item.querySelector('a').classList.add('active');
        });
    });*/
});

window.addEventListener('scroll', function() {
    var headerHeight = document.getElementById('header').offsetHeight;
    var homeSection = document.getElementById('home');
    var aboutSection = document.getElementById('about');
    var skillsSection = document.getElementById('skills');
    var projectsSection = document.getElementById('projects');
    var contactSection = document.getElementById('contact');
    var scrollPosition = window.scrollY;

    if (scrollPosition < homeSection.offsetTop + homeSection.offsetHeight - headerHeight) {
        setActiveLink('item0');
        setActiveLinkSideMenu('li-home');
    } else if (scrollPosition < aboutSection.offsetTop + aboutSection.offsetHeight - headerHeight) {
        setActiveLink('item1');
        setActiveLinkSideMenu('li-about');
    } else if (scrollPosition < skillsSection.offsetTop + skillsSection.offsetHeight - headerHeight) {
        setActiveLink('item2');
        setActiveLinkSideMenu('li-skills');
    } else if (scrollPosition < projectsSection.offsetTop + projectsSection.offsetHeight - headerHeight) {
        setActiveLink('item3');
        setActiveLinkSideMenu('li-project');
    } else {
        setActiveLink('item4');
        setActiveLinkSideMenu('li-contact');
    }
});

function setActiveLink(itemId) {
    var navbarLinks = document.querySelectorAll('.header-menu-item a');
    navbarLinks.forEach(function(link) {
        link.classList.remove('active');
    });
    document.getElementById(itemId).querySelector('a').classList.add('active');
}

function setActiveLinkSideMenu(itemId){
    const sideMenu = document.getElementById('side-menu-id');
    const links = sideMenu.querySelectorAll('a');

    links.forEach(link => {
        link.classList.remove('active');
    });

    document.getElementById(itemId).querySelector('a').classList.add('active');
}


