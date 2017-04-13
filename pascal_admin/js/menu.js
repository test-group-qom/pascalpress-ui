angular.module('pascalpress').controller('ad_menu_Ctrl', function() {


  $('._menu--ul > li > ._link').click(function(event) {
    var index = $(event.target).parent().index();
    $('._menu--ul > li ._link').removeClass('_menuActive');
    $('._menu--ul--subul > li > ._sublink').removeClass('_submenuActive');
    $('._menu--ul--subul').slideUp();
    $('._menu--ul > li ').eq(index).find('._menu--ul--subul').slideToggle();
    $(event.target).addClass('_menuActive');

  });


  $('._menu--ul--subul > li > ._sublink').click(function(event) {
    $('._menu--ul--subul > li > ._sublink').removeClass('_submenuActive');
    $(event.target).addClass('_submenuActive');
  });

  
});
