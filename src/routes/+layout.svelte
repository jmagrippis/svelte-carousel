<script lang="ts">
  import '../app.css'

  import Header from '$lib/header/Header.svelte'
</script>

<Header />

<main class="flex flex-grow flex-col items-center justify-center">
  <slot />
</main>

<footer class="text-center text-lg">
  <a class="decoration-2" href="https://magrippis.com/tube"
    >magrippis.com/tube</a
  >
  <p>🧑‍💻 ^ More tutorials from Johnny ^ 👩‍💻</p>
</footer>
