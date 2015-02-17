(function () {
  
  'use strict';
  
  
  angular
    .module('RadioForm', ['AppModel'])
    .controller('RadioFormController', RadioFormController)
    .directive('radioForm', RadioForm);


  function RadioForm() {
    return {
      restrict: 'E',
      controller: 'RadioFormController',
      controllerAs: 'vm',
      bindToController: true,
      scope: true,
      templateUrl: './templates/radio-form-tmpl.html'
    };
  }


  /* @ngInject */
  function RadioFormController(appModel) {
    var vm = this;
    vm.appModel = appModel;
    vm.submitForm = appModel.submitForm;
  }

  
})();