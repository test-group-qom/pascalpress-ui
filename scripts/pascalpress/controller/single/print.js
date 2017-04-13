angular.module("pascalpress").controller("printCtrl",function($scope){
  function init(){
    bindEvent();
  }
  function bindEvent(){
    let print = $("#print");
    print.on("click",E_Print);
  }
  function E_Print(){
        window.print();
  }


  $(document).ready(init);

})
