<script lang="ts">
    export let options: {val: string, title: string}[];
    export let changeHandler: (ev: Event) => void;
    export let value: string;
    export let name: string;
    export let title: string;
</script>

<label for="cars">
    <p>{title}</p> 
    <select class="p-2 rounded-xl" name={name} bind:value={value} on:change={changeHandler}>
    {#each options as option}
      <option value={option.val} >{option.val} - {option.title}</option>
    {/each}
</select> 
</label>

