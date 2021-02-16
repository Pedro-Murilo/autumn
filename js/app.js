let counter = 1;

setInterval(() => {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 6) {
        counter = 1;
    }
}, 5000);