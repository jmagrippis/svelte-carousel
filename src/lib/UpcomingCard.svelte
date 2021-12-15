<script lang="ts">
  export let id: string
  export let title: string
  export let src: string
</script>

<li {id} class="shrink-0 snap-center shadow-lg relative">
  <img {title} {src} alt={title} class="rounded" />
  <button
    class="bg-secondary text-white px-4 py-2 semibold rounded absolute inset-x-2 bottom-2 shadow shadow-secondary"
    >Upcoming... {title}!</button
  >
</li>
