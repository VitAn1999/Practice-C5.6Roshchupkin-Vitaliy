let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://picsum.photos/v2/list/?limit=5', true);

xhr.onload = function() {
    if (xhr.status === 200) {
        console.log(xhr.response);
    } else {
        console.log('XHR status: ', xhr.status);
    }
};

xhr.onerror = function() {
    console.log('Ошибка!', xhr.status);
};

xhr.send();