<script context="module" lang="ts">
  import Card from '$lib/Card.svelte'
  import Carousel from '$lib/Carousel.svelte'
  import {scrollIntoView} from '$lib/scrollIntoView'

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
  let items = images.map((props) => ({props, component: Card}))
</script>

<svelte:head>
  <title>Svelte Hamburger</title>
</svelte:head>

<section class="flex flex-col items-center">
  <Carousel {items} />

  <nav>
    <ul>
      {#each images as { title }, i}
        <li class="snap-center shrink-0">
          <a
            href={`#carousel-item-${i}`}
            on:click|preventDefault={scrollIntoView}>{title}</a
          >
        </li>
      {/each}
    </ul>
  </nav>
  <slot />
</section>
