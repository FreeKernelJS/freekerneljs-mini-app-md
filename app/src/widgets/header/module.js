'use strict';

angular.module('fkjs.widgets.header', [])


/**
 * @ngdoc directive
 * @name fkjs.widgets.header:fkjsHeader
 *
 * @requires $mdSidenav
 *
 * @description
 * Displays a header on top of each page.
 * 
 * @usage
 * <fkjs-header sidnav-id="id"></fkjs-header>
 */
.directive('fkjsHeader', function($mdSidenav){
    return {
        restrict: 'E',
        templateUrl: 'src/widgets/header/template.html',
        replace: true,
        
        scope: {
            sidnavId: '@'
        },
        
        controller: function($scope){
            $scope.$on('navbarStateChange', function(event, stateText){
                $scope.pageTitle = stateText;
            });
            
            $scope.toggleSidenav = function(){
                $mdSidenav($scope.sidnavId).toggle(); 
            };
        }
    };
});