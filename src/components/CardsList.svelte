<script lang="ts">
  import type { Fields } from "../data/airtable";
  import Card from "./Card.svelte";

  export let data: Fields[];
</script>

<div class="cards-list">
  {#each data as { facebook, instagram, name, website }}
    <Card title={name} {facebook} {instagram} {website} />
  {/each}
</div>

<style>
  .cards-list {
    gap: 1.5rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    margin-bottom: 2.5rem;
  }

  @media screen and (max-width: 375px) {
    .cards-list {
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }
  }
</style>
