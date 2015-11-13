'use strict';



angular.module('atlasPresentationApp', ['ngMessages'])
.controller('atlasGlossary',function($scope,$http){
    $scope.content = null;
    $http({method: 'GET', url: '/glossary/glossary.json'}).
        success(function(data, status, headers, config) {
            $scope.contents=data;
        }).error(function(data, status, headers, config) {
    });
});
