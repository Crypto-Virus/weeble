
<script>
  import { getContext } from 'svelte';
  const { close } = getContext('simple-modal');

  export let word
  export let _playAgain

  function playAgain() {
    close()
    _playAgain()
  }
</script>

<div class="flex flex-col items-center gap-4">
  <h1 class="text-3xl font-bold">You lost!</h1>
  <p>Character name was: {word}</p>
  <button on:click={playAgain} class="p-4 border rounded-full hover:bg-gray-200">Play again</button>
</div>