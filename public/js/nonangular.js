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
            if( xhr.readyState === 4 && xhr.status === 201 ) {
                console.log('malformed json');
                var obj = JSON.parse(xhr.responseText);
                console.log(obj);

                var contacts_container = document.querySelector('#allcontacts');
                addContactToView(contacts_container, jsonData);
            }
        });
        xhr.send(JSON.stringify(jsonData));
    });

    // display all the contacts on the page
    updateAllContactsView();

});

function updateAllContactsView() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/contacts');
    xhr.setRequestHeader('accept', 'application/json');
    xhr.addEventListener('readystatechange', function () {
        if( xhr.readyState === 4 && xhr.status === 200 ) {
            var contacts = JSON.parse(xhr.responseText);
            console.log(contacts);

            var contacts_container = document.querySelector('#allcontacts');
            contacts.forEach(function (contact) {
                addContactToView(contacts_container, contact);
            });

        }
    });
    xhr.send();
}

function addContactToView(contacts_container, contact) {
    var contact_div = createElement('div', contacts_container, '', 'contact-container');
    contact_div.dataset.id = contact._id;
    createElement('span', contact_div, contact.name, 'contact-name');
    createElement('span', contact_div, contact.location, 'contact-name');
    createElement('span', contact_div, 'X', 'contact-delete').addEventListener('click', function () {
        var id = this.parentNode.dataset.id;
        var contact_div = this.parentNode;

        var xhr = new XMLHttpRequest();
        xhr.open('DELETE', '/contacts/' + id);
        xhr.setRequestHeader('accept', 'application/json');
        xhr.addEventListener('readystatechange', function () {
            if( xhr.readyState === 4 && xhr.status === 200 ) {
                var obj = JSON.parse(xhr.responseText);
                console.log(obj);

                // delete contact div from view
                contact_div.parentNode.removeChild(contact_div);
            }
        });
        xhr.send();
    });
}

function createElement(type, parent, innerHTML, className) {
    var element = document.createElement(type);
    if (innerHTML) element.innerHTML = innerHTML;
    if (className) element.className = className;
    if (parent) parent.appendChild(element);
    return element;
}