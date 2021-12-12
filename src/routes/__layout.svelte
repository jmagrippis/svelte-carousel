<script lang="ts">
  import '../app.css'

  import Header from '$lib/header/Header.svelte'
</script>

<Header />

<main>
  <slot />
</main>

<footer class="text-center text-lg">
  <a class="decoration-2" href="https://magrippis.com/tube"
    >magrippis.com/tube</a
  >
  <p>🧑‍💻 ^ More tutorials from Johnny ^ 👩‍💻</p>
</footer>
