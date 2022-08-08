function checkUsername(){
    var elMsg = document.getElementById('feedback');
    if (elUsername.value.length < 5) {
        elMsg.textContent = 'Username must be 5 characters or more';
    }else {
        elMsg.textContent = '';
    }
}

var elUsername = document.getElementById('username');
elUsername.onblur = checkUsername;