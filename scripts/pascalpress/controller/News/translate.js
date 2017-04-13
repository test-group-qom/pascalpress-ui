let app = angular.module("pascalpress");
'use strict';

app.config(['$translateProvider', function($translateProvider) {
  $translateProvider
  // .useStaticFilesLoader({
  //   prefix: '/transdsadaslation/',
  //   suffix: '.jdsason'
  // })
  .preferredLanguage('fa')
  .useLocalStorage()
  // .useMissingTranslationHandlerLog()
  .useSanitizeValueStrategy(null);
}]);

app.run(['$rootScope', function($rootScope) {
  $rootScope.lang = 'fa';
  $rootScope.default_float = 'right';
  $rootScope.opposite_float = 'left';

  $rootScope.default_direction = 'rtl';  // change other time in (rtl); //
  $rootScope.opposite_direction = 'ltr';
}]);


app.config(['$translateProvider', function($translateProvider) {

  $translateProvider
  .translations('fa', {
    'Home'                          : 'خانه',
    'about'                         : 'درباره ما',
    'product'                       : 'محصولات',
    'news'                          : 'اخبار',
    'article'                       : 'مقالات',
    'contact'                       : 'تماس با ما',
    'Repertory'                     : 'کاتالوگ',
    'search'                        : 'جستوجو',
    'More'                          : 'بیشتر',
    'Answer'                        : 'پرسش و پاسخ',
    'Continu'                       : 'ادامه',
    'pascalpress'                   : 'پاسکال',
    'Phone:'                        : 'تلفن:',
    '048-2541'                      : '۰۲۱۳۴۶۲۱',     //  Phone_Number //
    'Fax:'                          : 'فکس:',
    '012-5435'                      : '۰۲۱۳۴۶۲۱',    //  FAX Number  //
    'Email:'                        : 'ایمیل',
    'tehran,sahrvarde,shomale:'     : 'تهران، سهروردی شمالی، خیابان عرب علی، کوچه هفتم، پلاک7 طبقه2 ',
    'codePoste:'                    : 'کدپستی',
    'Correlate'                     : 'مرتبط ها',
  })
  // .translations('en', {
  //   'HELLO': 'Hello'
  // })
  .preferredLanguage('fa');

}]);


app.controller('LanguageSwitchController', ['$scope', '$rootScope', '$translate',
  function($scope, $rootScope, $translate) {
    $scope.changeLanguage = function(langKey) {
      $translate.use(langKey);
    };
    $rootScope.$on('$translateChangeSuccess', function(event, data) {

      var language = data.language;
      $rootScope.lang = language;

      $rootScope.default_direction = language === 'fa' ? 'rtl' : 'ltr';
      $rootScope.opposite_direction = language === 'fa' ? 'ltr' : 'rtl';

      $rootScope.default_float = language === 'fa' ? 'right' : 'left';
      $rootScope.opposite_float = language === 'fa' ? 'left' : 'right';

    });
  }





  ]);
