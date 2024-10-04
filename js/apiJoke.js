window.addEventListener('load', () => {
    const url = 'https://v2.jokeapi.dev/joke/Programming?lang=es';

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error de xarxa');
            }
            return response.json();
        })
        .then(data => {
            const jokeElement = document.getElementById('joke');
            if (data.type === 'single') {
                jokeElement.innerText = data.joke;
            } else {
                jokeElement.innerText = `${data.setup} - ${data.delivery}`;
            }
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('joke').innerText = 'No es posible obtenir el Joke';
        });
});