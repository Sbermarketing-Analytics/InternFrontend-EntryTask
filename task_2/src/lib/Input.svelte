<script lang="ts">
  export let value: number;
  export let changeHandler: (ev: Event) => void;
  export let title: string;
  export let name: string;
</script>

<label class="flex flex-col gap-1">
  <p>{title}</p>
  <input class="p-4 rounded-lg" on:input={changeHandler} bind:value {name} />
</label>
