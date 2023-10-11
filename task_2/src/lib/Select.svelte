<script lang="ts">
  export let options: { id: string; name: string }[];
  export let changeHandler: (ev: Event) => void;
  export let value: string;
  export let name: string;
  export let title: string;
</script>

<label for="cars">
  <p>{title}</p>
  <select class="p-2 rounded-xl" {name} bind:value on:change={changeHandler}>
    {#each options as option}
      <option value={option.id}>{option.id} - {option.name}</option>
    {/each}
  </select>
</label>
