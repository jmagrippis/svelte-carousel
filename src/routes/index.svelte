<script context="module" lang="ts">
  import Carousel, {getItemId, Item} from '$lib/Carousel.svelte'
  import ReviewCard from '$lib/ReviewCard.svelte'
  import {scrollIntoView} from '$lib/scrollIntoView'
  import UpcomingCard from '$lib/UpcomingCard.svelte'

  export const prerender = true

  const images = [
    {title: 'London', src: '/images/london.jpg'},
    {title: 'Paros', src: '/images/paros.jpg'},
    {title: 'Tinos', src: '/images/tinos.jpg'},
    {title: 'Buenos Aires', src: '/images/buenos-aires.jpg'},
    {title: 'Tower Bridge', src: '/images/bridge.jpg'},
    {title: 'Lisbon', src: '/images/lisbon.jpg'},
    {title: 'Christmas!', src: '/images/christmas.jpg'},
  ]

  const items: Item[] = [
    {
      props: {
        title: 'Barcelona',
        src: '/images/barcelona-peter-mode-unsplash.jpg',
      },
      component: UpcomingCard,
    },
    ...images.map((props) => ({props, component: ReviewCard})),
  ]
</script>

<svelte:head>
  <title>Svelte Carousel</title>
</svelte:head>

<section class="flex flex-col items-center">
  <Carousel {items} />

  <nav>
    <ul>
      {#each items as { props: { title } }, index}
        <li>
          <a
            href={`#${getItemId(index)}`}
            on:click|preventDefault={scrollIntoView}>{title}</a
          >
        </li>
      {/each}
    </ul>
  </nav>

  <slot />
</section>
