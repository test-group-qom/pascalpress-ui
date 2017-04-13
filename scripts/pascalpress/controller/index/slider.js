angular.module("pascalpress").controller("sliderCtrl",function($scope){
    class slider {
      constructor(slider) {
        this.slider_name = slider;
        this.global();
      }

      global(){
        let $event_2      = $(this.slider_name);
        let $carousel_2   = $($event_2).flickity({
          cellAlign: 'left',
          contain: true,
          pageDots: false,
          prevNextButtons: true,
          wrapAround: false,
          //  autoPlay:true,
          draggable:true,
          rightToLeft: false,
          freeScroll: false,
          imagesLoaded: true,
          groupCells: true
        });

  
      }
    }
    $(document).ready(function(){
      new slider(".flex--flickity .main-carousel");
    })
    return $scope;

});
