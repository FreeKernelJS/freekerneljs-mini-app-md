'use strict';

/**
 * Sign Up page
 */
angular.module('fkjs.views.signup', [])

.controller('SignupController', function($scope, $timeout, $q){
    $scope.survey = ['Social Network', 'Advertisement', 'Friend', 'Other'];
    

    // states object for the auto-complete
    // at this point (ver 0.10.0) stil not working properly due to some bugs.
//    $scope.states = {
//        simulateQuery: false,
//        selectedItem: null,
//        searchText: null,
//        list: [{"value":"alabama","display":"Alabama"},{"value":"alaska","display":"Alaska"},{"value":"arizona","display":"Arizona"},{"value":"arkansas","display":"Arkansas"},{"value":"california","display":"California"},{"value":"colorado","display":"Colorado"},{"value":"connecticut","display":"Connecticut"},{"value":"deleware","display":"Deleware"},{"value":"florida","display":"Florida"},{"value":"georgia","display":"Georgia"},{"value":"hawaii","display":"Hawaii"},{"value":"idaho","display":"Idaho"},{"value":"illanois","display":"Illanois"},{"value":"indiana","display":"Indiana"},{"value":"iowa","display":"Iowa"},{"value":"kansas","display":"Kansas"},{"value":"kentucky","display":"Kentucky"},{"value":"louisiana","display":"Louisiana"},{"value":"maine","display":"Maine"},{"value":"maryland","display":"Maryland"},{"value":"massachusetts","display":"Massachusetts"},{"value":"michigan","display":"Michigan"},{"value":"minnesota","display":"Minnesota"},{"value":"mississippi","display":"Mississippi"},{"value":"missouri","display":"Missouri"},{"value":"montana","display":"Montana"},{"value":"nebraska","display":"Nebraska"},{"value":"nevada","display":"Nevada"},{"value":"new hampshire","display":"New Hampshire"},{"value":"new jersey","display":"New Jersey"},{"value":"new mexico","display":"New Mexico"},{"value":"new york","display":"New York"},{"value":"north carolina","display":"North Carolina"},{"value":"north dakota","display":"North Dakota"},{"value":"ohio","display":"Ohio"},{"value":"oklahoma","display":"Oklahoma"},{"value":"oregon","display":"Oregon"},{"value":"pennsylvania","display":"Pennsylvania"},{"value":"rhode island","display":"Rhode Island"},{"value":"south carolina","display":"South Carolina"},{"value":"south dakota","display":"South Dakota"},{"value":"tennessee","display":"Tennessee"},{"value":"texas","display":"Texas"},{"value":"utah","display":"Utah"},{"value":"vermont","display":"Vermont"},{"value":"virginia","display":"Virginia"},{"value":"washington","display":"Washington"},{"value":"west virginia","display":"West Virginia"},{"value":"wisconsin","display":"Wisconsin"},{"value":"wyoming","display":"Wyoming"}],
//        
//        // Search for states, use $timeout to simulate
//        querySearch: function(query){
//            var self = this;
//            var results = query ? self.list.filter(self.createFilterFor(query)) : self.list;
//            var deferred;
//            if(self.simulateQuery){
//                deferred = $q.defer();
//                $timeout(function () { deferred.resolve(results); }, Math.random() * 1000, false);
//                return deferred.promise;
//            } 
//            else {
//                return results;
//            }
//        },
//        
//        // Create filter function for a query string
//        createFilterFor: function(query){
//            var lowercaseQuery = angular.lowercase(query);
//            
//            return function filterFn(state) {
//                return (state.value.indexOf(lowercaseQuery) === 0);
//            };
//        }
//    };
});