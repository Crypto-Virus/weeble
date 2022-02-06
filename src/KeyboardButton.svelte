<button on:click={onButtonClick} class="w-10 h-14 flex justify-center items-center bg-gray-500 rounded-md">{keyLetter}</button>

<script>
  import { createEventDispatcher } from 'svelte';

  export let keyLetter

  const dispatch = createEventDispatcher()

  function onButtonClick() {
    dispatch('letterButtonClick', {
      value: keyLetter
    })
  }
</script>