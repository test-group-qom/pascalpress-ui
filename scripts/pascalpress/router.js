angular.module("pascalpress").config(function($stateProvider,$urlRouterProvider, $locationProvider){
  $stateProvider
  .state('master',{
    abstract: true,
    views:{
      "header": {templateUrl:"views/pascalpress/parts/header.html"},
      "menu_top": {templateUrl:"views/pascalpress/parts/menu_top.html"},
      "footer": {templateUrl:"views/pascalpress/parts/footer.html"},
    }
  })
  .state('master.index',{
    url: "",
    views:{
      "container@": {templateUrl:"views/pascalpress/parts/container.html"},
      "flickity@master.index": {templateUrl:"views/pascalpress/parts/flickity.html"},
      "logo_min@master.index": {templateUrl:"views/pascalpress/parts/logo_min.html"},
    }
  })
  .state('master.news',{
    url: "/news",
    views:{
      "container@": {templateUrl:"views/pascalpress/parts/news.html"},
      "logo_min@master.news": {templateUrl:"views/pascalpress/parts/logo_min.html"},
      "menu_down@master.news": {templateUrl:"views/pascalpress/parts/menu_down.html"},
    }
  })
  .state('master.single_news',{
    url: "/single_news/:id",
    views:{
      "container@": {templateUrl:"views/pascalpress/parts/single_news.html"},
      "logo_min@master.single_news": {templateUrl:"views/pascalpress/parts/logo_min.html"},
      "menu_down@master.single_news": {templateUrl:"views/pascalpress/parts/menu_down.html"},
    }
  })
  .state('master.articals',{
    url: "/articals",
    views:{
      "container@": {templateUrl:"views/pascalpress/parts/articals.html"},
      "logo_min@master.articals": {templateUrl:"views/pascalpress/parts/logo_min.html"},
      "menu_down@master.articals": {templateUrl:"views/pascalpress/parts/menu_down.html"},
    }
  })
  .state('master.single_artical',{
    url: "/single_artical/:id",
    views:{
      "container@": {templateUrl:"views/pascalpress/parts/single_artical.html"},
      "logo_min@master.single_artical": {templateUrl:"views/pascalpress/parts/logo_min.html"},
      "menu_down@master.single_artical": {templateUrl:"views/pascalpress/parts/menu_down.html"},
    }
  })
  .state('master.product',{
    url: "/product",
    views:{
      "container@": {templateUrl:"views/pascalpress/parts/products.html"},
      "logo_min@master.product": {templateUrl:"views/pascalpress/parts/logo_min.html"},
      "menu_down@master.product": {templateUrl:"views/pascalpress/parts/menu_down.html"},
    }
  })
  .state('master.contact',{
    url: "/contact",
    views:{
      "container@": {templateUrl:"views/pascalpress/parts/contact.html"},
      "logo_min@master.contact": {templateUrl:"views/pascalpress/parts/logo_min.html"},
      "menu_down@master.contact": {templateUrl:"views/pascalpress/parts/menu_down.html"},
    }
  })
  .state('master.Repertory',{
    url: "/Repertory",
    views:{
      "container@": {templateUrl:"views/pascalpress/parts/Repertory.html"},
      "logo_min@master.Repertory": {templateUrl:"views/pascalpress/parts/logo_min.html"},
      "menu_down@master.Repertory": {templateUrl:"views/pascalpress/parts/menu_down.html"},
    }
  })
  .state('master.about',{
    url: "/about",
    views:{
      "container@": {templateUrl:"views/pascalpress/parts/about.html"},
      "logo_min@master.about": {templateUrl:"views/pascalpress/parts/logo_min.html"},
      "menu_down@master.about": {templateUrl:"views/pascalpress/parts/menu_down.html"},
    }
  })
  // $locationProvider.html5Mode(true);
  // $urlRouterProvider.otherwise('/');



//admin routers
.state('admaster',{
    abstract:true,
    views:{
      "adheader":{templateUrl:"pascal_admin/Admin/layouts/header.html"},
      "adsidebar":{templateUrl:"pascal_admin/Admin/layouts/sidebar.html"}
    },
    data: {
      css: [
        'pascal_admin/styles/css/panel.css',
      ]
    }
  })


  .state('admaster.dashboard',{
    url: "/dashboard",
    views:{
      "adcontent@":{templateUrl:"pascal_admin/Admin/dashboard.html"},
    },
    login: true
  })


.state('admaster.artical_list',{
  url: "/artical_list",
  views:{
    "adcontent@":{templateUrl:"pascal_admin/Admin/artical_list.html"},
  },
  login: true
})


.state('admaster.postedit',{
  url: "/postedit/:id",
  views:{
    "adcontent@":{templateUrl:"pascal_admin/Admin/postedit.html"},
  },
  login:true
})


.state('admaster.postcreate',{
  url: "/postcreate",
  views:{
    "adcontent@":{templateUrl:"pascal_admin/Admin/postcreate.html"},
  },
  login:true
})


.state('admaster.Entry_News',{
  url: "/Entry_News",
  views:{
    "adcontent@":{templateUrl:"pascal_admin/Admin/Entry_News.html"},
  },
  login:true
})


.state('admaster.news_list',{
  url: "/news_list",
  views:{
    "adcontent@":{templateUrl:"pascal_admin/Admin/news_list.html"},
  },
  

})


.state('admaster.list_product',{
  url: "/list_product",
  views:{
    "adcontent@":{templateUrl:"pascal_admin/Admin/list_product.html"},
  },
  login:true
})

.state('admaster.product_create',{
  url: "/product_create",
  views:{
    "adcontent@":{templateUrl:"pascal_admin/Admin/product_create.html"},
  },
  login:true
})

.state('admaster.news_list_edit',{
  url: "/news_list_edit/:id",
  views:{
    "adcontent@":{templateUrl:"pascal_admin/Admin/news_list_edit.html"},
  },
  login:true
})

.state('admaster.artical_list_edit',{
  url: "/artical_list_edit/:id",
  views:{
    "adcontent@":{templateUrl:"pascal_admin/Admin/artical_list_edit.html"},
  },
  login:true
})

.state('login',{
  url: "/login",
  views:{
    "adcontent@":{templateUrl:"pascal_admin/Admin/login.html"},
  }
})

.state('signup',{
  url: "/signup",
  views:{
    "adcontent@":{templateUrl:"pascal_admin/Admin/signup.html"},
  }
})

});

base_module.run(($rootScope, $state) =>{
  $rootScope.$on('$stateChangeStart', (e, toState)=> {
    if(toState.login === true && !localStorage.getItem('token')) {
      $state.go('login');
      e.preventDefault();
    }
  })
});
