const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const quoteAuthor = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

async function getQuote() {
    const apiURL = 'https://api.kanye.rest/';
    try {
        const response = await fetch(apiURL);
        const quoteData = await response.json();

        if (quoteData.quote.length > 50) {
            quoteText.classList.add('long-quote');
        } else {
            quoteText.classList.remove('long-quote');
        }

        quoteText.innerText = quoteData.quote;
        console.log(quoteData);
    } catch (error) {
        throw new Error(error);
    }
}

function tweetQuote() {
    const quote = quoteText.innerText;
    const twitterURL = `https://twitter.com/intent/tweet?text=${quote} - Kanye West`;
    window.open(twitterURL, '_blank');
}

// Event listeners
newQuoteBtn.addEventListener('click', getQuote);
twitterBtn.addEventListener('click', tweetQuote);

// Call function on load
getQuote();