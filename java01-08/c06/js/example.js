var noteInput, noteName, textEntered, target;

noteName = document.getElementById('noteName');
noteInput = document.getElementById('noteInput');

function writeLabe(e){
    if (!e) {
        e = window.event;
    }
    target = e.target || e.srcElement;
    textEntered = target.value;
    noteName.textContent = textEntered;
}


function recerderControls(e) {
    if (!e) {
        e = window.event;
    }
    target = e.target || e.srcElement;
    if (e.preventDefault) {
        e.preventDefault();
    }else {
        e.returnValue = false;
    }

    switch (target.getAttribute('data-state')){
        case 'record';
        record(target);
        break;
        case 'stop';
        stop(target);
        break;

    }
}

function record(target) {
    target.setAttribute('data-state', 'stop');
    target.textContent = 'stop';
}

function .stop(target){
    target.setAttribute()
}
if (document.addEventListener) {
    document.addEventListener('click', function (e) {
        recerderControls(e);
        }

        if (document.addEventListener) {
            document.addEventListener('click', function (e){
                recerderControls(e);
                }, false);

            noteInput.addEventListener('input', writeLabe, false);
        } else {
            document.attachEvent('onclick', function (e)){
                recerderControls(e);
            });
        }
    )
}