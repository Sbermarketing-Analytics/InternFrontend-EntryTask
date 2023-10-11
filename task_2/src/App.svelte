<script lang="ts">
  import Input from "./lib/Input.svelte";
  import Select from "./lib/Select.svelte";
  import ALL from "./comp.json";
  import full from "./currencies.json";

  let res = [];
  for (let [key, _] of Object.entries(ALL)) {
    console.log(key);
    res.push({[key]: {id: key, name: full[key]['name']}})
  }

  console.log(res)

  let currencies = [
    {
      val: "USD",
      title: "United states dollar"
    },
    {
      val: "UZS",
      title: "Uzbekistan so'm"
    },
    {
      val: "RUB",
      title: "Russian ruble"
    },
    {
      val: "TNG",
      title: "Kirgiz tenge"
    },
    {
      val: "EUR",
      title: "Euro"
    },
  ]

  let exchange = {
    fromCur: "USD", 
    toCur: 'RUB',
    fromAmount: 0,
    toAmount: 0,
  }

  function handleChange(ev: InputEvent ) {
    if (ev.target instanceof HTMLInputElement) {
      console.log('x')
      let {name, value} = ev.target;
      let val = Number(value);
      if (isNaN(val) || !isFinite(val)) {
        exchange[name] = exchange[name];
      } else {
        exchange[name] = val;
      }
      if (name == 'fromAmount') {
        exchange.toAmount = exchange.fromAmount / 10;
      }
      if (name == 'toAmount') {
        exchange.fromAmount = exchange.toAmount / 10;
      }
    }
    if (ev.target instanceof HTMLSelectElement) {
      console.log('y')
      let {name, value} = ev.target;
      exchange[name] = value;
    }
  }
</script>

<main class="flex flex-col items-center justify-center gap-8" >
  <header class="p-4 w-full sticky top-0 z-50 backdrop-blur-md text-center" >
    <h1 class="text-4xl m-auto">Currency Converter</h1>
  </header>

  <form class="flex gap-8" action="#">
    <div>
      <Select value={exchange.fromCur} title="From" changeHandler={handleChange} name='fromCur' options={currencies.filter(x => x.val != exchange.toCur)} />
      <Input title="" changeHandler={handleChange} value={exchange.fromAmount} name="fromAmount" />
    </div>
    <div>
      <Select value={exchange.toCur} title="To" changeHandler={handleChange} name='toCur' options={currencies.filter(x => x.val != exchange.fromCur)} />
      <Input title="" changeHandler={handleChange} value={exchange.toAmount} name="toAmount"  />
    </div>
  </form>
  <h3>{exchange.fromAmount} {exchange.fromCur} will be {exchange.toAmount} {exchange.toCur}</h3>
  
  <a class="fixed bottom-4 right-4 text-cyan-700" href="https://www.exchangerate-api.com" referrerpolicy="no-referrer" target="_blank">Rates By Exchange Rate API</a>
</main>
