
<div class="flex flex-col gap-2">
  <div class="flex justify-center gap-2">
    {#each firstRowLetters as letter}
      <KeyboardButton on:letterButtonClick={handleLetterButtonClick} keyLetter={letter} />
    {/each}
  </div>
  <div class="flex justify-center gap-2">
    {#each secondRowLetters as letter}
      <KeyboardButton on:letterButtonClick={handleLetterButtonClick} keyLetter={letter} />
    {/each}
  </div>
  <div class="flex justify-center gap-2">
    <button on:click={onEnterButtonClick} class="p-4 h-14 flex justify-center items-center bg-gray-500 rounded-md">Enter</button>
    {#each thirdRowLetters as letter}
      <KeyboardButton on:letterButtonClick={handleLetterButtonClick} keyLetter={letter} />
    {/each}
    <button on:click={onBackButtonClick} class="p-4 h-14 flex justify-center items-center bg-gray-500 rounded-md">Back</button>
  </div>
</div>

<script>
  import { createEventDispatcher } from 'svelte';
  import KeyboardButton from "./KeyboardButton.svelte";

  export let input
  export let maxWordLength

  const firstRowLetters = "Q W E R T Y U I O P".split(" ")
  const secondRowLetters = "A S D F G H J K L".split(" ")
  const thirdRowLetters = "Z X C V B N M".split(" ")

  const dispatch = createEventDispatcher()

  function handleLetterButtonClick(event) {
    if ( input.length < maxWordLength) {
      const letter = event.detail.value
      input += letter
    }
  }

  function onBackButtonClick() {
    if (input.length > 0) {
      input = input.slice(0, -1)
    }
  }

  function onEnterButtonClick() {
    dispatch('enterButtonClick')
  }
</script>