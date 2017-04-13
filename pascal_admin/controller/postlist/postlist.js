angular.module("pascalpress").controller("postlistCtrl",function($scope,$http){
  const $list    = this;
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
    'title'    : test.words(),
    'text'     : test.words(),
    'tags'     : test.words(),
    'summary'  : test.words(),
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
  const url    =  base_url + '/api/news/';

  $http.post(url,parametrs).then(function(res){
    $list.lists = res.data;
  });

})
