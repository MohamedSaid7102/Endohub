document.addEventListener('DOMContentLoaded', function() {
  "use strict";

  function sidebarMenu(menu) {
    var animationSpeed = 300,
      subMenuSelector = '.sidebar-submenu';

    menu.addEventListener('click', function(e) {
      var target = e.target;
      var checkElement = target.nextElementSibling;

      if (checkElement && checkElement.matches(subMenuSelector) && checkElement.style.display === 'block') {
        checkElement.style.display = 'none';
        checkElement.classList.remove('menu-open');
        target.parentElement.classList.remove('active');
      } else if (checkElement && checkElement.matches(subMenuSelector) && checkElement.style.display === 'none') {
        var parent = target.closest('ul');
        var openMenus = parent.querySelectorAll('ul:visible');

        openMenus.forEach(function(menu) {
          menu.style.display = 'none';
          menu.classList.remove('menu-open');
        });

        var parentLi = target.parentElement;

        checkElement.style.display = 'block';
        checkElement.classList.add('menu-open');

        parent.querySelectorAll('li.active').forEach(function(li) {
          li.classList.remove('active');
        });

        parentLi.classList.add('active');
      }

      if (checkElement && checkElement.matches(subMenuSelector)) {
        e.preventDefault();
      }
    });
  }

  var menu = document.querySelector('your-menu-selector');
  if (menu) {
    sidebarMenu(menu);
  }
});
