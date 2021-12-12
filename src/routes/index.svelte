<script context="module" lang="ts">
  export const prerender = true

  let images = [
    {title: 'London', src: '/images/london.jpg'},
    {title: 'Paros', src: '/images/paros.jpg'},
    {title: 'Tinos', src: '/images/tinos.jpg'},
    {title: 'Buenos Aires', src: '/images/buenos-aires.jpg'},
    {title: 'Tower Bridge', src: '/images/bridge.jpg'},
    {title: 'Lisbon', src: '/images/lisbon.jpg'},
    {title: 'Christmas!', src: '/images/christmas.jpg'},
  ]
</script>

<svelte:head>
  <title>Svelte Carousel</title>
</svelte:head>

<section class="flex flex-col items-center">
  <slot />
</section>
