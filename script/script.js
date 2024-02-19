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

    // For Navigation Header
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
    });

    //For side navigation view
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
    });
});

