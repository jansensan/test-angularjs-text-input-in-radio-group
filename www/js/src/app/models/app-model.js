(function () {
  
  'use strict';
  
  
  angular
    .module('AppModel', [])
    .factory('appModel', AppModel);


  function AppModel() {
    // public api
    var _model = {};
        // properties
        _model.amountDue = 100;
        _model.amountPastDue = 35;
        _model.amount = 0;
        // methods
        _model.submitForm = submitForm;


    // private methods
    function submitForm() {
      console.log('%c--- submitForm ---', 'color: #0000CC');
      console.log('_model.amount: ' + (_model.amount));
    }


    return _model
  }

  
})();