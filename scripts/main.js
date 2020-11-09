const btnRequest = document.querySelector('#btn-request');
const resultNode = document.querySelector('.result');

const options = {
    method: 'GET',
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
};

const useRequest = url => {
    return fetch(url, options)
        .then(response => {
            return response.json();
        })
        .then(data => {
            return data;
        })
        .catch(error => {
            console.log('error', error);
        });
};

btnRequest.addEventListener('click', function () {
    let inputValWidth = document.querySelector('#input-val-1').value;
    let inputValHeight = document.querySelector('#input-val-2').value;
    if ((Number(inputValWidth) >= 100 && Number(inputValWidth) <= 300) &&
    (Number(inputValHeight) >= 100 && Number(inputValHeight) <= 300)) {
        let fetchURL = 
        `https://picsum.photos/${inputValWidth}/${inputValHeight}`;
        let imgURL = useRequest(fetchURL);
    } else {
        console.log('Error');
    }
});