angular.module("pascalpress").controller("itemCtrl",function($scope,$http,$stateParams){
  const single_this = this;
  const id          = $stateParams.id;
  const url         = base_url + '/api/news/' + id;
  $http.get(url).then((res)=>{
      single_this.product = res.data.newsdetails[0];
      single_this.items   = res.data.newsdetails[0].tags.split(',');
  });

});
