function gen() {
    const apiUrl = 'https://api.quotable.io/random';
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        const quoteContainer = document.querySelector('.quote');
        quoteContainer.innerHTML = `<p>"${data.content}"</p><p>- ${data.author}</p>`;
      })
      .catch((error) => {
        console.error('There was a problem fetching the random quote:', error);
      });
  }
  const newQuoteButton = document.getElementById('new-quote-btn');
  newQuoteButton.addEventListener('click', fetchRandomQuote);
  gen();