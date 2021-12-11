<script context="module" lang="ts">
  import Carousel from '$lib/Carousel.svelte'

  export const prerender = true

  let images = [
    {title: 'Working from London', src: '/images/london.jpg'},
    {title: 'Working from Paros', src: '/images/paros.jpg'},
    {title: 'Working from Tinos', src: '/images/tinos.jpg'},
    {title: 'Working from Buenos Aires', src: '/images/buenos-aires.jpg'},
    {title: 'Working from Tower Bridge', src: '/images/bridge.jpg'},
    {title: 'Working from Lisbon', src: '/images/lisbon.jpg'},
    {title: 'Christmas!', src: '/images/christmas.jpg'},
  ]
</script>

<svelte:head>
  <title>Svelte Hamburger</title>
</svelte:head>

<section class="flex flex-col items-center">
  <Carousel {images} />
  <slot />
</section>
