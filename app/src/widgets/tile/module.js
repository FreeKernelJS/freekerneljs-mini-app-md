'use strict';

angular.module('fkjs.widgets.tile', [])


/**
 * @ngdoc directive
 * @name fkjs.widgets.tile:fkjsTile
 *
 * @description
 * Displays a static tile with icon and text.
 * 
 * @usage
 * <fkjs-tile tile="tile"></fkjs-tile>
 */
.directive('fkjsTile', function(){
    return {
        restrict: 'E',
        templateUrl: 'src/widgets/tile/template.html',
        replace: true,
        
        scope: {
            tile: '='
        },

        link: function(scope){
            /*
             * get tile icon according to its type
             */
            function getIconByType(type){
        var cls = type +' ';
        
        if(type === 'visitors'){
            return cls +'mdi-visibility';
        }
        else if(type === 'users'){
            return cls +'mdi-person';
        }
        else if(type === 'tickets'){
            return cls +'mdi-label';
        }
        else if(type === 'topics'){
            return cls +'mdi-description';
        }
            }
            
            scope.tileCss = getIconByType(scope.tile.type);
        }
    };
});