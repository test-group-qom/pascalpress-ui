angular.module("pascalpress").controller("atrical_listCtrl",function($scope,$http,$rootScope){
  const url     =  base_url + '/api/news/';
  const My_Arry = [];
  $http.get(url).then((res)=>{
      $scope.tables  = res.data;
      $scope.My_Arry = res.data;
  });
  $scope.delete = (id,index)=>{
    $http.delete(url + id).then(()=>{
        $scope.tables.splice($scope.tables[index],1);
    });

  }

})
