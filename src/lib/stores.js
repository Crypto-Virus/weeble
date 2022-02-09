import { writable } from "svelte/store"

export const gameState = writable({
  rowState: 0,
  answers: [],
  results: [],
  keyboardState: {},
})