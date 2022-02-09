<script>
  import { onMount } from 'svelte';
  import Header from "$lib/Header.svelte";
  import GameGrid from "$lib/GameGrid.svelte";
  import Keyboard from "$lib/Keyboard.svelte";
import { gameState } from '$lib/stores';

  let word = ''
  let input = ''

  onMount(async () => {
    getDailyWord()
  })

  async function getDailyWord() {
    word = 'SAKURA'
  }

  function validateInputWord(word) {
    //todo: make server request
    return true
  }

  function checkMatch() {
    // return array of 0, 1, 2
    // 0 no match
    // 1 exact match
    // 2 matched somewhere else
    const result = []
    const indicesUsed = []

    for (let i = 0; i < word.length; i++) {
      if (input[i] === word[i]) {
        result[i] = 1
        indicesUsed.push(i)
        $gameState.keyboardState[word[i]] = 1
      }
    }

    outerLoop:
    for (let i = 0; i < word.length; i++) {
      if (result[i]) continue
      for (let j = 0; j < word.length; j++) {
        if (indicesUsed.includes(j)) continue
        if (input[i] === word[j]) {
          result[i] = 2
          indicesUsed.push(j)
          if ($gameState.keyboardState[input[i]] !== 1) {
            $gameState.keyboardState[input[i]] = 2
          }
          continue outerLoop
        }
      }
    }

    for (let i = 0; i < input.length; i++) {
      if (result[i] === undefined) {
        result[i] = 0
      }
      if ($gameState.keyboardState[input[i]] === undefined) {
        $gameState.keyboardState[input[i]] = 3 // I don't know why 0 does not update dynamic class
      }
    }

    return result
  }

  function handleEnterButtonClick() {
    if (input.length < 6) {
      alert("Input word must be 6 characters long")
      return
    }

    if (!validateInputWord()) {
      alert("Not a valid word")
      return
    }

    $gameState.rowState += 1
    let result = checkMatch()
    $gameState.results = [...$gameState.results, result]
    $gameState.answers = [...$gameState.answers, input]

    if (input === word) {
      console.log('you won!')
      alert("you won!")
    }

    if ($gameState.rowState === 6) {
      alert("Game Over")
    }

    input = ''

  }

</script>

<main class="flex flex-col justify-between gap-4 max-w-lg m-auto h-full">

  <Header />

  <GameGrid {input} />

  <Keyboard bind:input on:enterButtonClick={handleEnterButtonClick} />
</main>