angular.module("pascalpress").controller("Entry_NewsCtrl",($scope,$http)=>{
  const url     = base_url + '/api/news';
  const token   = localStorage.getItem('token')
  $http.defaults.headers.common['token'] =  token;
  
  ///> initialaze collections recommended in http://stackoverflow.com/questions/12618342/ng-model-does-not-update-controller-value.
//  $scope.persian={};
//  $scope.English={};
//  $scope.Arabic={};
  
  
  $scope.create = ()=>{
    let randString = function(){
      this.char=function(){
        var s = "qwertyuiopasdghfjklzxcvbnm";
        return s[Math.round(Math.random()*s.length)-1];
      };
      this.word = function(){
        var c    = Math.round(Math.random()*5)+2;
        var word = "";
        for(var i=1;i<=c;i++)word+=this.char();
        return word;
      };
      this.words= function(){
        var c     = Math.round(Math.random()*5)+2;
        var words = "";
        for(var i=1;i<=c;i++)words+=this.word()+" ";
        return words;
      };
    };
    let test = new randString();
    console.log($scope);
    const parametrs = {
      'image'    : $scope.picture,
      'lang'     : 'fa',
      'title'    : $scope.persian.title,
      'text'     : $scope.persian.text,
      'tags'     : $scope.persian.tags,
      'summary'  : $scope.persian.summary,
      'lang2'    : 'en',
      'title2'   : $scope.English.title2,
      'text2'    : $scope.English.text2,
      'tags2'    : $scope.English.tags2,
      'summary2' : $scope.English.summary2,
      'lang3'    : 'ar',
      'title3'   : $scope.Arabic.title3,
      'text3'    : $scope.Arabic.text3,
      'tags3'    : $scope.Arabic.tags3,
      'summary3' : $scope.Arabic.summary3
    };
      $http.post(url,parametrs).then((res)=>{
            $scope.persian  = res.data;
            $scope.English  = res.data;
            $scope.Arabic   = res.data;
    }).catch(function(c) {
      if (c.status == 422) {
          console.log(c);
        alert("لطفا تمامی فیلد ها را کامل کنید");
      }
    });

  };
  
  $scope.upload=()=>{
      $http({
              method:'POST',
              url:base_url+'api/uploadfile',
              ///http://stackoverflow.com/questions/16483873/angularjs-http-post-file-and-form-data
          }).then().catch();
  };
  
  
});
