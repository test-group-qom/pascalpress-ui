base_module.controller("atricalsCtrl",function($scope,$http){
  const url        = base_url + '/api/article';
  const parnet     = this;

  $http.get(url).then((res)=>{
    parnet.items = res.data;
  });

});
