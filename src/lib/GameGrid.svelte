<script>
  import GameRow from "./GameRow.svelte";

  export let input = ''
</script>


<div class="grid gap-[5px] m-auto">
  {#each Array(6) as _, idx}
    <GameRow id={idx} {input}></GameRow>
  {/each}
</div>