<script>
  import { onMount, getContext } from 'svelte';
  import Header from "$lib/Header.svelte";
  import GameGrid from "$lib/GameGrid.svelte";
  import Keyboard from "$lib/Keyboard.svelte";
  import { gameState } from '$lib/stores';
  import names from '$lib/data/names.json'
  import { getNotificationsContext } from 'svelte-notifications';
  import GameWon from '$lib/GameWon.svelte';
  import GameOver from '$lib/GameOver.svelte';


  const { open } = getContext('simple-modal');
  const { addNotification } = getNotificationsContext();

  const namesSet = new Set(names)

  let word = ''
  let input = ''

  onMount(async () => {
    getDailyWord()
  })

  async function getDailyWord() {
    word = names[Math.floor(Math.random() * names.length)];
    console.log(`Selected character is: ${word}`)
  }

  function validateInputWord(word) {
    if (namesSet.has(input)) {
      return true
    } else {
      return false
    }
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
      addNotification({
        text: 'Input word must be 6 characters long',
        position: 'top-center',
        removeAfter: 4000,
        type: 'danger'
      })
      return
    }

    if (!validateInputWord()) {
      addNotification({
        text: 'Not a valid word',
        position: 'top-center',
        removeAfter: 4000,
        type: 'danger'
      })
      return
    }

    $gameState.rowState += 1
    let result = checkMatch()
    $gameState.results = [...$gameState.results, result]
    $gameState.answers = [...$gameState.answers, input]

    if (input === word) {
      console.log('you won!')
      open(GameWon, {_playAgain: playAgain})
    }

    if ($gameState.rowState === 6) {
      open(GameOver, {word: word, _playAgain: playAgain})
    }

    input = ''

  }

  function resetGameState() {
    $gameState = {
      rowState: 0,
      answers: [],
      results: [],
      keyboardState: {},
    }
  }

  function playAgain() {
    resetGameState()
    getDailyWord()
  }

</script>

<main class="flex flex-col max-w-lg mx-auto h-screen">

  <Header />

  <div class="flex flex-col gap-4 pt-8 pb-4 h-full box-border">
    <GameGrid {input} />

    <Keyboard bind:input on:enterButtonClick={handleEnterButtonClick} />
  </div>

</main>