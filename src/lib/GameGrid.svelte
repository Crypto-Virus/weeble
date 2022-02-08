<script>
  import GameRow from "./GameRow.svelte";

  export let word = ''
  export let input = ''
  export let rowState = 0
  export let answers = []
</script>


<div class="grid gap-[5px] m-auto">
  {#each Array(6) as _, idx}
    <GameRow id={idx} {input} {rowState} answer={answers[idx]}></GameRow>
  {/each}
</div>