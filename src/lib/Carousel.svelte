<script lang="ts">
  type ImageType = {title: string; src: string}
  export let images: ImageType[]

  const scrollIntoView = ({target}) => {
    const el = document.querySelector(target.getAttribute('href'))
    if (!el) return
    el.scrollIntoView({
      behavior: 'smooth',
    })
  }
</script>

<ul
  class="relative w-full flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory"
>
  {#each images as { title, src }, i}
    <li id={`carousel-item-${i}`} class="snap-center shrink-0">
      <img {title} {src} alt={title} />
    </li>
  {/each}
</ul>

<nav>
  <ul>
    {#each images as { title }, i}
      <li class="snap-center shrink-0">
        <a href={`#carousel-item-${i}`} on:click|preventDefault={scrollIntoView}
          >{title}</a
        >
      </li>
    {/each}
  </ul>
</nav>

<style lang="postcss">
  ul:before,
  ul:after {
    content: '';
    @apply snap-center shrink-0 w-[30px];
  }
</style>
