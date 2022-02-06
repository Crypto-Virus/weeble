<script>
  import { onMount } from 'svelte';
  import Header from "./Header.svelte";
  import GameRow from "./GameRow.svelte";
  import Keyboard from "./Keyboard.svelte";

  let word = 'naruto'
  let maxWordLength = 6
  let input = ''

	onMount(async () => {
    getDailyWord()
	})

  async function getDailyWord() {
    word = 'NARUTO'
    maxWordLength = word.length
  }

  function validateInput(word) {
    if (input.length < word) {
      return false
    }
    //todo: make server request
    return true
  }

  function checkMatch() {
    // return array of 0, 1, 2
    // 0 no match
    // 1 exact match
    // 2 matched somewhere else
    result = []
    indicesUsed = []

    mainLoop:
    for (let i = 0; i < word.length; i++) {

      if (input[i] === word[i]) {
        result.push(1)
        indicesUsed.push(i)
        continue
      }

      for (let j = 0; j < word.length; j++) {
        if (indicesUsed.includes(j)) {
          continue
        }
        if (input[i] === word[j]) {
          result.push(2)
          indicesUsed.push(j)
          continue mainLoop
        }
      }

      result.push(0)
    }

    return result

  }

  function handleEnterButtonClick() {
    alert('enter')
  }

</script>

<main class="flex flex-col justify-between gap-4 max-w-lg m-auto h-full">

  <Header />

  <div>daily word is: {word} </div>
  <div>the input is: {input}</div>
  <div class="grid gap-[5px] m-auto">
    <GameRow></GameRow>
    <GameRow></GameRow>
    <GameRow></GameRow>
    <GameRow></GameRow>
    <GameRow></GameRow>
    <GameRow></GameRow>
  </div>


  <Keyboard bind:input {maxWordLength} on:enterButtonClick={handleEnterButtonClick} />
</main>

<style lang="postcss" global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
