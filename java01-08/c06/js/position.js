var sx = document.getElementById('sx');
var sy = document.getElementById('sy');
var px = document.getElementById('px');
var py = document.getElementById('py');
var cx = document.getElementById('cx');
var cy = document.getElementById('cy');
function showPosition(event){
    sx.value = event.screenX;
    sy.value = event.screeny;
    px.value = event.pageX;
    px.value = event.pageY;
    cx.value = event.clientsX;
    cy.value = event.clientsy;
}

var el = document.getElementById('body');
el.addEventListener('mousemove', showPosition, false);