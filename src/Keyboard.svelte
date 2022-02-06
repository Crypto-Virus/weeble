
<div class="flex flex-col gap-2">
  <div class="flex justify-center gap-2">
    {#each firstRowLetters as letter}
      <div class="w-10 h-14 flex justify-center items-center bg-gray-500 rounded-md">{letter}</div>
    {/each}
  </div>
  <div class="flex justify-center gap-2">
    {#each secondRowLetters as letter}
      <div class="w-10 h-14 flex justify-center items-center bg-gray-500 rounded-md">{letter}</div>
    {/each}
  </div>
  <div class="flex justify-center gap-2">
    <div class="p-4 h-14 flex justify-center items-center bg-gray-500 rounded-md">Enter</div>
    {#each thirdRowLetters as letter}
      <div class="w-10 h-14 flex justify-center items-center bg-gray-500 rounded-md">{letter}</div>
    {/each}
    <div class="p-4 h-14 flex justify-center items-center bg-gray-500 rounded-md">Back</div>
  </div>
</div>

<script>
  const firstRowLetters = "Q W E R T Y U I O P".split(" ")
  const secondRowLetters = "A S D F G H J K L".split(" ")
  const thirdRowLetters = "Z X C V B N M".split(" ")
</script>