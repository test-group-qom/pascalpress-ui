base_module.controller("LoginCtrl",($scope,$http,$state)=>{
  $scope.Email    = "joker";
  $scope.password = "secret";
  const url = base_url + '/api/login';
    $scope.login = ()=>{
        const params = {         // api that was Come //
          "email"    : $scope.Email,
          "password" : $scope.password
        }

        $http.post(url,params).then((res,status)=>{
          const token = res.data.token;
          if (token) {
            alert("کاربر " + $scope.Email + " خوش آمدید");
            localStorage.setItem('token', token);
            $state.go("admaster.dashboard");
          }
        }).catch(function(c) {
          if (c.status == 400) {
            alert("Worng Passwod");
          }
        });
      }

});
