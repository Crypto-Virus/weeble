<script>
  import { onMount } from 'svelte';
  import Header from "$lib/Header.svelte";
  import GameGrid from "$lib/GameGrid.svelte";
  import Keyboard from "$lib/Keyboard.svelte";

  let word = 'naruto'
  let input = ''

  let firstWord = ''
  let secondWord = ''
  let thirdWord = ''
  let fourthWord = ''
  let fifthWord = ''
  let sixthWord = ''
  let rowState = 0

	onMount(async () => {
    getDailyWord()
	})

  async function getDailyWord() {
    word = 'NARUTO'
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
  <GameGrid
    {word}
    {input}
    {firstWord}
    {secondWord}
    {thirdWord}
    {fourthWord}
    {fifthWord}
    {sixthWord}
  />

  <Keyboard bind:input on:enterButtonClick={handleEnterButtonClick} />
</main>