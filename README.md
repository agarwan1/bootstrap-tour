# bootstrap-tour

Doesn't work with bootstrap version 4:
V3:
https://stackoverflow.com/questions/49699531/popovers-for-bootstrap-tour-not-working

Uncaught TypeError: $element.data(...).tip is not a function
https://github.com/sorich87/bootstrap-tour/issues/619

You can use bootstrap-tour-standalone

The order is important

window.$ = window.jQuery = require('jquery')
require('bootstrap') // Bootstrap 4 
window.Tour = require("../node_modules/bootstrap-tour/build/js/bootstrap-tour-standalone");
if you import bootstrap after bootstrap-tour-standalone you will get Uncaught TypeError: $element.data(...).tip is not a function


https://codepen.io/nagasai/pen/rdQOjo