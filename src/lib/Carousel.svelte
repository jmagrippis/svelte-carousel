<script context="module" lang="ts">
  import type {SvelteComponent} from 'svelte'

  export const getItemId = (index: number, carouselName = 'carousel') =>
    `${carouselName}-item-${index}`
  export type Item = {
    props: Record<string, any>
    component: typeof SvelteComponent
  }
</script>

<script lang="ts">
  export let items: Item[]
  export let name = 'carousel'
</script>

<ul
  class="flex overflow-x-auto gap-6 snap-x snap-mandatory before:shrink-0 before:w-[30vw] after:shrink-0 after:w-[30vw] pb-6"
>
  {#each items as { props, component }, index}
    <svelte:component this={component} id={getItemId(index)} {...props} />
  {/each}
</ul>
