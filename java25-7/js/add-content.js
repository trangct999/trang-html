var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow >18){
    greeting = 'Goog evening!';
} else if (hourNow >12){
    greeting = 'Goog afternoon!';
}else if (hourNow > 0){
    greeting = 'Goog morning!';
}else {
    greeting = 'Welcome!';
}

document.write('<h3>' + greeting + '</h3>');
console.log(greeting)