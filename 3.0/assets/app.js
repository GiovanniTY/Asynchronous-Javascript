async function fetchRandomQuote() {
    try {
      const response = await fetch('https://thatsthespir.it/api');
      if (!response.ok) {
        throw new Error('Failed to fetch quote');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching quote:', error.message);
      return null;
    }
  }
  
  async function displayRandomQuote() {
    const quoteContainer = document.getElementById('quote-container');
    quoteContainer.textContent = 'Loading...';
  
    const quoteData = await fetchRandomQuote();
    if (quoteData) {
      const quoteText = quoteData.quote;
      const quoteAuthor = quoteData.author;
      quoteContainer.innerHTML = `<blockquote>"${quoteText}"</blockquote><p>- ${quoteAuthor}</p>`;
    } else {
      quoteContainer.textContent = 'Failed to fetch quote. Please try again later.';
    }
  }
  
  const generateButton = document.getElementById('generate-button');
  generateButton.addEventListener('click', displayRandomQuote);
  
  // Display initial quote when the page loads
  displayRandomQuote();
  