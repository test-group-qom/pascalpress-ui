angular.module("pascalpress").controller("atrical_list_edit",function($scope,$http,$stateParams,$state){
  const $user_edit  = this;
  const id          = $stateParams.id;
  const url         =  base_url + '/api/news/' + id;
  $http.get(url).then(function(res){
    $scope.labels = res.data.newsdetails;
  });
  $scope.submit = function(){
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
    const parametrs = {
      'image'    : test.words(),
      'lang'     : 'ar',
      'title'    : $scope.labels[0].title,
      'text'     : test.words(),
      'tags'     : test.words(),
      'summary'  : $scope.labels[0].summary,
      'lang2'    : 'fa',
      'title2'   : test.words(),
      'text2'    : test.words(),
      'tags2'    : test.words(),
      'summary2' : test.words(),
      'lang3'    : 'en',
      'title3'   : test.words(),
      'text3'    : test.words(),
      'tags3'    : test.words(),
      'summary3' : test.words()
    }
      $http.put(url,parametrs).then(function(res){
          $state.go("admaster.artical_list");
      });
  }








})
