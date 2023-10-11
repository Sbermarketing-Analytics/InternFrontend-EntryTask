<script lang="ts">
  import Input from "./lib/Input.svelte";
  import { onMount } from "svelte";
  import Select from "./lib/Select.svelte";
  import currencies from "./currencies";
  import fetchRate from "./fetchers/fetchRate";

  onMount(async () => {
    Promise.all([fetchRate("RUB"), fetchRate("USD")]);
  });

  let isLoading = false;
  let exchange = {
    fromCur: "USD",
    toCur: "RUB",
    fromAmount: 0,
    toAmount: 0,
  };

  async function handleChange(ev: InputEvent) {
    if (ev.target instanceof HTMLInputElement) {
      let { name, value } = ev.target;
      let val = Number(value);
      if (isNaN(val) || !isFinite(val)) {
        exchange[name] = exchange[name];
      } else {
        exchange[name] = val;
      }
      if (name == "fromAmount") {
        let from = await fetchRate(exchange.fromCur);
        exchange.toAmount = exchange.fromAmount * from[exchange.toCur];
      }
      if (name == "toAmount") {
        let to = await fetchRate(exchange.toCur);
        exchange.fromAmount = exchange.toAmount * to[exchange.fromCur];
      }
    }
    if (ev.target instanceof HTMLSelectElement) {
      isLoading = true;
      let { name, value } = ev.target;
      exchange[name] = value;
      const x = await fetchRate(value);
      isLoading = false;
    }
  }
</script>

<main class="flex flex-col items-center justify-center gap-8">
  <header
    class="w-full sticky top-0 z-50 backdrop-blur-md text-center border-b border-neutral-600"
  >
    <h1 class="text-4xl m-auto p-4">Currency Converter</h1>
  </header>

  <form class="flex gap-8 relative" action="#">
    {#if isLoading}
      <div
        class={`absolute left-1/2 w-24 rounded-full border-blue-600 border-[11px] spin border-dotted aspect-square`}
      />
    {/if}
    <div>
      <Select
        value={exchange.fromCur}
        title="From"
        changeHandler={handleChange}
        name="fromCur"
        options={currencies.filter((x) => x.id != exchange.toCur)}
      />
      <Input
        title=""
        changeHandler={handleChange}
        value={exchange.fromAmount}
        name="fromAmount"
      />
    </div>
    <div>
      <Select
        value={exchange.toCur}
        title="To"
        changeHandler={handleChange}
        name="toCur"
        options={currencies.filter((x) => x.id != exchange.fromCur)}
      />
      <Input
        title=""
        changeHandler={handleChange}
        value={exchange.toAmount}
        name="toAmount"
      />
    </div>
  </form>
  <h3>
    {exchange.fromAmount}
    {exchange.fromCur} will be {exchange.toAmount}
    {exchange.toCur}
  </h3>

  <a
    class="fixed bottom-4 right-4 text-cyan-700 hover:text-blue-500"
    href="https://www.exchangerate-api.com"
    referrerpolicy="no-referrer"
    target="_blank">Rates By Exchange Rate API</a
  >
</main>
