base_module.controller("signupCtrl",($scope,$http,$state)=>{
  const url   =  base_url + '/api/news/';
  $scope.Email    = 'mr.mobham@outlook.com';
  $scope.password = '09198672314';
    $scope.singup = ()=>{
      const authentication = {           // parameters //
        'Email'     : $scope.Email,
        'password'  : $scope.password
      }
      $http.post(url,authentication).then((res)=>{
        console.log(res);
        $state.go("admaster.login");
      });
    }

});
