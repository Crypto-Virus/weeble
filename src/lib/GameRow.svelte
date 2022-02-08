<script>

  export let id
  export let input
  export let answer
</script>

<div class={`width-6 grid gap-[5px]`}>
  {#each Array(6) as _, i}
    <div class="w-[62px] h-[62px] border border-gray-400 flex justify-center items-center text-2xl font-bold">{input[i] ? input[i] : ''}</div>
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