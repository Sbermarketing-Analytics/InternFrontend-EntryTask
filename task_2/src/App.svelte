<script lang="ts">
  import Input from "./lib/Input.svelte";
  let exchange = {
    from: 0,
    to: 0,
  }

  function handleChange(ev: InputEvent ) {
    if (ev.target instanceof HTMLInputElement) {
      let {name, value} = ev.target;
      let val = Number(value) || 0;
      exchange[name] = isFinite(val) ? val : 0;
    }
  }
</script>

<main class="flex flex-col items-center justify-center gap-8" >
  <header class="p-4 w-full sticky top-0 z-50 backdrop-blur-md text-center" >
    <h1 class="text-4xl m-auto">Currency Converter</h1>
  </header>

  <form class="flex gap-8" action="#">
    <Input title="From" changeHandler={handleChange} value={exchange.from} name="from" />
    <Input title="To" changeHandler={handleChange} value={exchange.to} name="to"  />
  </form>

  <h3>{exchange.from} in some currency will be {exchange.to} in other currency</h3>
  
  <a class="fixed bottom-4 right-4 text-cyan-700" href="https://www.exchangerate-api.com" referrerpolicy="no-referrer" target="_blank">Rates By Exchange Rate API</a>
</main>
