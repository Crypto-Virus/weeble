<script>
  import { createEventDispatcher } from 'svelte';
  import { gameState } from '$lib/stores'

  export let keyLetter

  const dispatch = createEventDispatcher()

  function onButtonClick() {
    dispatch('letterButtonClick', {
      value: keyLetter
    })
  }
</script>

<button
  on:click={onButtonClick}
  class="w-10 h-14 flex justify-center items-center bg-gray-500 rounded-md"
  class:no-match={$gameState.keyboardState[keyLetter] ? $gameState.keyboardState[keyLetter] === 3 : false}
  class:partial-match={$gameState.keyboardState[keyLetter] ? $gameState.keyboardState[keyLetter] === 2 : false}
  class:exact-match={$gameState.keyboardState[keyLetter] ? $gameState.keyboardState[keyLetter] === 1 : false}
>
  {keyLetter}
</button>
