<script lang="ts" contet="module">
  import ExternalLink from "./ExtarnalLink.svelte";

  export let title: string;
  export let facebook: string;
  export let instagram: string;
  export let website: string;
</script>

<article class="card" data-theme="light">
  <h3>{title}</h3>

  <div class="card-links">
    <ExternalLink
      href={facebook}
      alt="facebook icon"
      src="/icons/icons8-facebook.svg"
    />
    <ExternalLink
      href={instagram}
      alt="instagram icon"
      src="/icons/icons8-instagram.svg"
    />
    <ExternalLink href={website} alt="website icon" src="/icons/website.svg" />
  </div>
</article>

<style>
  .card {
    flex: 1;
    margin: 0;
  }

  .card-links {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }
</style>
