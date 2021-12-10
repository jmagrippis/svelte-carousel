<script context="module" lang="ts">
  import AnimatedHamburger from '$lib/AnimatedHamburger.svelte'

  export const prerender = true
</script>

<svelte:head>
  <title>Svelte Hamburger</title>
</svelte:head>

<section class="flex flex-col items-center">
  <AnimatedHamburger width="90vw" />
  <slot />
</section>
