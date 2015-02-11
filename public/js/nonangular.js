/* Script file for nonangular CRUD operations on contacts */

document.addEventListener('DOMContentLoaded', function () {

    // register an event handler for the form submit
    document.forms.frm_create.addEventListener('submit', function (event) {
        event.preventDefault();

        var jsonData = {
            name: this.name.value,
            location: this.location.value
        };

        var xhr = new XMLHttpRequest();
        xhr.open('POST', '/contacts');
        xhr.setRequestHeader('accept', 'application/json');
        xhr.setRequestHeader('content-type', 'application/json');
        xhr.addEventListener('readystatechange', function () {
            if( xhr.readyState === 4 && xhr.status === 200 ) {
                var obj = JSON.parse(xhr.responseText);
                console.log(obj);
            }
        });
        xhr.send(JSON.stringify(jsonData));
    });

});