<script>
  let amount = 1;
  let fromCurrency = 'USD';
  let toCurrency = 'EUR';
  let exchangeRate = null;

  async function fetchExchangeRate() {
    const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
    const data = await response.json();
    exchangeRate = data.rates[toCurrency];
  }

  function convertAmount() {
    if (exchangeRate !== null) {
      return (amount * exchangeRate).toFixed(2);
    }
    return '';
  }

  $: convertedAmount = convertAmount();
</script>

<div>
  <h1>Currency Converter</h1>
  <div>
    <label>Amount:</label>
    <input type="number" bind:value={amount} />
  </div>
  <div>
    <label>From Currency:</label>
    <select bind:value={fromCurrency}>
      <option value="USD">USD</option>
      <option value="EUR">EUR</option>
      <option value="GBP">GBP</option>
    </select>
  </div>
  <div>
    <label>To Currency:</label>
    <select bind:value={toCurrency}>
      <option value="USD">USD</option>
      <option value="EUR">EUR</option>
      <option value="GBP">GBP</option>
    </select>
  </div>
  <button on:click={fetchExchangeRate}>Get Exchange Rate</button>
  <div>
    <p>Converted Amount: {convertedAmount}</p>
  </div>
</div>
