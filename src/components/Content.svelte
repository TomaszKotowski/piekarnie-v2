<script lang="ts">
  import Fuse from "fuse.js";

  import type { Fields } from "../../types/airtable";
  import CardsList from "./CardsList.svelte";

  export let data: Fields[];
  let value = "";

  const fuse = new Fuse(data, { keys: ["name"] });

  $: searchData = fuse.search(value).map(({ item }) => item);
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

<CardsList data={searchData.length > 0 ? searchData : data} />
