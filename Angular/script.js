angular.module('angular_filter', [])
.controller('filter_controller', ['$scope', function($scope) {
  var members = [
    {id:'104',name:'Udit Gupta',gender:'Male',age:40,mobile:7891492201},
        {id:'105',name:'Sopan Sharma',gender:'Male',age:48,mobile:785412664},
        {id:'101',name:'Kavish Meena',gender:'Male',age:15,mobile:781588996},
        {id:'102',name:'Aparna gaba',gender:'Female',age:55,mobile:781166999},
        {id:'103',name:'Priyanka gaba',gender:'Female',age:18,mobile:7597741235}
  ];

  $scope.propertyName = 'age';
  $scope.reverse = true;
  $scope.members = members;
  $scope.rowlimit=5;

  $scope.sortBy = function(propertyName) {
    $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
    $scope.propertyName = propertyName;
     };
}]);