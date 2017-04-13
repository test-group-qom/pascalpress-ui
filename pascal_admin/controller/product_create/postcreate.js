angular.module("pascalpress").controller("create_productCtrl",function($scope,$http){
  let product = this;
  const url     = base_url + '/api/news';
  $http.post(url).then(function(res){
      console.log(res.data);
  })
})
