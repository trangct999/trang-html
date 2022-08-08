function setup() {
    var textInput;
    textInput = document.getElementById('message');
    textInput.focus();
}

window.addEventListener('DOMContentloaded', setup, false);

window.addEventListener('beforeunload', function(event) {


    var message = 'You have changes that have not been seved';
    (event || window.event).returnValue = message;
});