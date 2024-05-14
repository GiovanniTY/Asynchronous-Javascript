// Creazione della div in cui verranno visualizzati i prezzi
const pricesDiv = document.createElement("div");
document.body.appendChild(pricesDiv);

async function updateCryptoPrices() {
  try {
    // Esegui la richiesta per ottenere il prezzo della criptovaluta specifica (BTCUSDT) da Binance
    const response = await fetch('https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT');
    const data = await response.json();

    // Estrai il prezzo della criptovaluta dalla risposta
    const btcUsdPrice = data.price;

    // Aggiorna il contenuto della tua div con il prezzo della criptovaluta
    pricesDiv.innerHTML = `
      <div class="crypto">
        <p>Prezzo di BTCUSDT: ${btcUsdPrice}</p>
      </div>
    `;
  } catch (error) {
    // Gestione degli errori in caso di problemi durante la richiesta
    console.error('Si è verificato un errore durante la richiesta:', error);
    pricesDiv.textContent = 'Impossibile ottenere i prezzi al momento. Riprova più tardi.';
  }
}

// Chiamare la funzione per aggiornare i prezzi delle criptovalute subito all'avvio dello script
updateCryptoPrices();

// Chiamare la funzione per aggiornare i prezzi delle criptovalute ogni 30 secondi
setInterval(updateCryptoPrices, 1000); // 30000 millisecondi corrispondono a 30 secondi
