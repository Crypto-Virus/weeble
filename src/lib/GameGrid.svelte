<script>
  import GameRow from "./GameRow.svelte";

  let height
  let width

  $: {
    width = height
  }

  export let input = ''
</script>

<div class="flex-1 flex flex-col justify-center items-center">
  <div bind:clientHeight={height}
    class="grid grid-rows-6 gap-[5px] max-h-[420px] min-h-[100px] h-full"
    style="width: {width}px"
  >
    {#each Array(6) as _, idx}
      <GameRow id={idx} {input}></GameRow>
    {/each}
  </div>
</div>