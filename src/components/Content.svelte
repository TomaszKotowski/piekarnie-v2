<script lang="ts">
  import type { Fields } from "../../types/airtable";
  import CardsList from "./CardsList.svelte";

  export let data: Fields[];
  let value = "";

  $: searchData = data.filter(({ name }) =>
    name.toLowerCase().includes(value.toLowerCase())
  );
</script>

<label for="search">
  <input
    type="search"
    name="search"
    id="search"
    placeholder="Szukaj..."
    bind:value
  />
</label>
<CardsList data={searchData} />
