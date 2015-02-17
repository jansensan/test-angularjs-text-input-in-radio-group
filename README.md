# Text input in radio group

This project tests how a form can include radio buttons and have the last item be an input field.  


## Current issue

Binding `vm.appModel.amount` to the input field and the different radio button selections will work: the data used upon clicking on the submit button will be valid.

However, if the user clicks in the text input and starts typing, the radio button loses it's `checked` value, even if many checks are in place on the text input to keep the checked value set to `true`:

      ng-focus="isManualInputSelected = true;"
      ng-change="isManualInputSelected = true;"
      ng-click="isManualInputSelected = true;"
      
On the radio input, this should keep it as activated, however doesn't:

      ng-checked="isManualInputSelected"