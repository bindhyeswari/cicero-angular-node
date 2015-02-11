console.log('Making Ajax call now ... ');

var xhr = new XMLHttpRequest();
xhr.open('GET', '/jahara/friends');
xhr.setRequestHeader('accept', 'application/json');
xhr.addEventListener('readystatechange', function () {
    if( xhr.readyState === 4 && xhr.status === 200 ) {
        var obj = JSON.parse(xhr.responseText);
        console.log(obj);
    }
});
xhr.send();