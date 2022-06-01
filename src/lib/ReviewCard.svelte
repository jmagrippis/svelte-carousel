<script lang="ts">
  export let id: string
  export let title: string
  export let src: string
</script>

<li {id} class="relative shrink-0 snap-center shadow-lg">
  <img {title} {src} alt={title} class="rounded" />
  <button
    class="semibold absolute inset-x-2 bottom-2 rounded bg-primary px-4 py-2 text-white shadow shadow-primary"
    >Read the review of {title}</button
  >
</li>
