async function updatePhrase() {
    try {
        const response = await fetch('/api');
        console.log(response);
        const data = await response.json();
        console.log(data);

        const phraseElement = document.getElementById('phrase');
        phraseElement.textContent = data;

    } catch (error) {
        console.error('Error fetching the phrase', error);
    }
}

window.onload = updatePhrase;

// setInterval(updatePhrase, 3000);