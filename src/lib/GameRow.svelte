<script>
  import { gameState } from '$lib/stores'

  export let id
  export let input

  $: displayWord = updateDisplayWord(input, $gameState)

  function updateDisplayWord(input, gameState) {
    if (gameState.rowState === id) return input
    if (gameState.rowState > id) {
      return gameState.answers[id]
    }
    return ''

  }

</script>

<div class={`width-6 grid gap-[5px]`}>
  {#each Array(6) as _, i}
    <div
      class="border border-gray-400 flex justify-center items-center text-2xl font-bold"
      class:no-match={$gameState.results[id] ? $gameState.results[id][i] === 0 : false}
      class:partial-match={$gameState.results[id] ? $gameState.results[id][i] === 2 : false}
      class:exact-match={$gameState.results[id] ? $gameState.results[id][i] === 1 : false}
    >
      {displayWord[i] ? displayWord[i] : ''}
    </div>
  {/each}
</div>

<style>
  .width-4 {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
  .width-5 {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
  .width-6 {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }
  .width-7 {
    grid-template-columns: repeat(7, minmax(0, 1fr));
  }
  .width-8 {
    grid-template-columns: repeat(8, minmax(0, 1fr));
  }
</style>