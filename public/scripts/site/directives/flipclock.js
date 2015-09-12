'use strict';

/**
 * @ngdoc directive
 * @name anyandgoApp.directive:flipclock
 * @description
 * # flipclock
 */
angular.module('anyandgoApp')
  .directive('flipclock', function ($parse) {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
          if(typeof attrs.time === "undefined"){
            attrs.time = moment("23/10/2015 9:00", "D/M/YYYY H:mm").diff(moment(), 'seconds'); 
          }
        
          element.FlipClock(attrs.time, {
            clockFace: 'DailyCounter',
            language:'es-es',
            countdown: true,
            callbacks: {
                start: function(){
                    $('.flip-clock-divider.seconds .flip-clock-label').text('Segundos');
                }
            }
          });
      }
    };
  });
