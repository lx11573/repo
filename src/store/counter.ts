import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const visible = ref(false)
  function inc() {
    count.value++
  }

  function dec() {
    count.value--
  }
  function setVisible() {
    visible.value = !visible.value
  }

  return {
    count,
    inc,
    dec,
    visible,
    setVisible,
  }
})
