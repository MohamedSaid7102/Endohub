document.addEventListener('DOMContentLoaded', function () {
  "use strict";

  // Sidebar menu
  function sidebarMenu(menu) {
    var animationSpeed = 300;
    var subMenuSelector = '.sidebar-submenu';

    menu.addEventListener('click', function (e) {
      var target = e.target;
      var checkElement = target.nextElementSibling;

      if (checkElement && checkElement.matches(subMenuSelector) && checkElement.style.display === 'block') {
        checkElement.style.display = 'none';
        checkElement.classList.remove('menu-open');
        target.parentElement.classList.remove('active');
      } else if (checkElement && checkElement.matches(subMenuSelector) && checkElement.style.display === 'none') {
        var parent = target.closest('ul');
        var openMenus = parent.querySelectorAll('ul:visible');

        openMenus.forEach(function (menu) {
          menu.style.display = 'none';
          menu.classList.remove('menu-open');
        });

        var parentLi = target.parentElement;

        checkElement.style.display = 'block';
        checkElement.classList.add('menu-open');

        parent.querySelectorAll('li.active').forEach(function (li) {
          li.classList.remove('active');
        });

        parentLi.classList.add('active');
      }

      if (checkElement && checkElement.matches(subMenuSelector)) {
        e.preventDefault();
      }
    });
  }

  var sidebarMenuElement = document.querySelector('.sidebar-menu');
  if (sidebarMenuElement) {
    sidebarMenu(sidebarMenuElement);
  }

  // Toggle menu
  var toggleMenu = document.querySelector('.toggle-menu');
  var wrapper = document.getElementById('wrapper');
  if (toggleMenu && wrapper) {
    toggleMenu.addEventListener('click', function (e) {
      e.preventDefault();
      wrapper.classList.toggle('toggled');
    });
  }

  // Sidebar menu activation
  var sidebarLinks = document.querySelectorAll('.sidebar-menu a');
  sidebarLinks.forEach(function (link) {
    if (link.href === window.location.href) {
      link.classList.add('active');
      link.parentElement.classList.add('active');
    }
  });

  // Top Header
  window.addEventListener('scroll', function () {
    var navbar = document.querySelector('.topbar-nav .navbar');
    if (window.scrollY > 60) {
      navbar.classList.add('bg-dark');
    } else {
      navbar.classList.remove('bg-dark');
    }
  });

  // Back To Top
  window.addEventListener('scroll', function () {
    var backToTop = document.querySelector('.back-to-top');
    if (window.scrollY > 300) {
      backToTop.style.display = 'block';
    } else {
      backToTop.style.display = 'none';
    }
  });

  var backToTopButton = document.querySelector('.back-to-top');
  if (backToTopButton) {
    backToTopButton.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Popover
  var popovers = document.querySelectorAll('[data-toggle="popover"]');
  popovers.forEach(function (popover) {
    new bootstrap.Popover(popover);
  });

  // Tooltip
  var tooltips = document.querySelectorAll('[data-toggle="tooltip"]');
  tooltips.forEach(function (tooltip) {
    new bootstrap.Tooltip(tooltip);
  });

  // Theme setting
  var switcherIcon = document.querySelector('.switcher-icon');
  if (switcherIcon) {
    switcherIcon.addEventListener('click', function (e) {
      e.preventDefault();
      var rightSidebar = document.querySelector('.right-sidebar');
      rightSidebar.classList.toggle('right-toggled');
    });
  }

  // Theme functions
  function setTheme(themeClass) {
    document.body.className = 'bg-theme ' + themeClass;
  }

  var themeButtons = document.querySelectorAll('[id^="theme"]');
  themeButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      var themeClass = button.className.split(' ')[1];
      setTheme(themeClass);
    });
  });
});
