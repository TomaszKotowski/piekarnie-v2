<script lang="ts">
  export let href: string;
  export let src: string;
  export let alt: string;
</script>

{#if href}
  <a target="_blank" rel="noopener noreferrer" {href}>
    {#if src} <img {src} {alt} class="img" /> {/if}
    <slot />
  </a>
{/if}

<style>
  .img {
    background-color: white;
    border-radius: 25%;
    width: 32px;
    height: 32px;
  }
</style>
