angular.module("pascalpress").controller("listNewsCtrl",function($scope,$http,$rootScope){
  let url     =  base_url + '/api/news/'; // ?page=1&&size=10 //;
  const My_Arry = [];
  const token   = localStorage.getItem('token')
  $http.defaults.headers.common['token'] =  token;
  $http.get(url).then(function(res){
      $scope.tables  = res.data.data;
      //   $("._pagination").pagination({
      //     items: 100,
      //     itemsOnPage: 10,
      //     cssStyle: 'light-theme',
      //     hrefTextPrefix:'#news_list#page-',
      //     onPageClick: function(pageNumber, event){
      //       //  url     =  base_url + '/api/news?page='+pageNumber+'&&size=10';
      //       // $http.get(url).then(function(res){
      //       //     $scope.tables  = res.data.data;
      //       // });
      //     }
      // });
  });
  $scope.delete = (id,index)=>{
    $http.delete(url + id).then(()=>{
        $scope.tables.splice($scope.tables[index],1);
    });

  }

})
