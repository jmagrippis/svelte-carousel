<script lang="ts">
  import type {SvelteComponent} from 'svelte/internal'

  type Item = {props: Record<string, any>; component: SvelteComponent}
  export let items: Item[]
</script>

<ul
  class="flex overflow-x-auto gap-6 snap-x snap-mandatory mb-2 before:shrink-0 before:w-[30vw] after:shrink-0 after:w-[30vw]"
>
  {#each items as { props, component }, i}
    <li id={`carousel-item-${i}`} class="shrink-0 snap-center">
      <svelte:component this={component} {...props} />
    </li>
  {/each}
</ul>
