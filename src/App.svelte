<script>
  import Header from "./Header.svelte";
  import GameRow from "./GameRow.svelte";
  import Keyboard from "./Keyboard.svelte";
</script>

<main class="flex flex-col justify-between gap-4 max-w-lg m-auto h-full">

  <Header />

  <div class="grid gap-[5px] m-auto">
    <GameRow></GameRow>
    <GameRow></GameRow>
    <GameRow></GameRow>
    <GameRow></GameRow>
    <GameRow></GameRow>
    <GameRow></GameRow>
  </div>


  <Keyboard />
</main>

<style lang="postcss" global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
