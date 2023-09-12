const quoteText = document.querySelector('.quote p');
const newQuoteBtn = document.querySelector('#new-quote-btn');
async function getRandomQuote() {
  try {
    const response = await fetch('https://type.fit/api/quotes');
    const data = await response.json();
    const randomIndex = Math.floor(Math.random() * data.length);
    const randomQuote = data[randomIndex];
    return randomQuote;
  } catch (error) {
    console.error('Error fetching quote:', error);
  }
}
async function updateQuote() {
  quoteText.textContent = 'Loading...'; 
  const randomQuote = await getRandomQuote();
  quoteText.textContent = randomQuote.text;
}
newQuoteBtn.addEventListener('click', updateQuote);
updateQuote();