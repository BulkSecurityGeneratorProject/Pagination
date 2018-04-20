(function() {
    'use strict';

    angular
        .module('testPaginationApp')
        .controller('EmployeeDetailController', EmployeeDetailController);

    EmployeeDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'Employee', 'Department', 'Job'];

    function EmployeeDetailController($scope, $rootScope, $stateParams, previousState, entity, Employee, Department, Job) {
        var vm = this;

        vm.employee = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('testPaginationApp:employeeUpdate', function(event, result) {
            vm.employee = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
