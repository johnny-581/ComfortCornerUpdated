async function updateQuote() {
    try {
        const response = await fetch('/api');
        console.log(response);
        const data = await response.json();
        console.log(data);

        const phraseElement = document.querySelector('.quote-text');
        phraseElement.textContent = data;

    } catch (error) {
        console.error('Error fetching the phrase', error);
    }
}

window.onload = updateQuote;

// setInterval(updatePhrase, 3000);