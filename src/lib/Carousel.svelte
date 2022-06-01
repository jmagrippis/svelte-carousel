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
</script>

<ul
  class="flex w-full snap-x snap-mandatory gap-6 overflow-x-auto pb-6 before:w-[30vw] before:shrink-0 after:w-[30vw] after:shrink-0"
>
  {#each items as { props, component }, index}
    <svelte:component this={component} id={getItemId(index)} {...props} />
  {/each}
</ul>
