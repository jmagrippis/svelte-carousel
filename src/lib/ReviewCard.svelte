<script lang="ts">
  export let id: string
  export let title: string
  export let src: string
</script>

<li {id} class="shrink-0 snap-center shadow-lg relative">
  <img {title} {src} alt={title} class="rounded" />
  <button
    class="bg-primary text-white px-4 py-2 semibold rounded absolute inset-x-2 bottom-2 shadow shadow-primary"
    >Read the review of {title}</button
  >
</li>
