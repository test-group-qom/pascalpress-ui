angular.module("pascalpress").controller("itemsCtrl",function($scope,$http,$stateParams){
  const url     =  base_url + '/api/news';
  const parent  = this;
  $http.get(url).then(function(res){
    parent.items = res.data.data;
  });
})
