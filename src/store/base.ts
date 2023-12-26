import { defineStore } from 'pinia'

export const useBaseStore = defineStore('base', () => {
  const showEmpty = ref(false)
  const emptyOptions = ref()
  const showUpgrade = ref(false)
  function setShowEmpty(isShow: boolean, options = {}) {
    showEmpty.value = isShow
    Object.assign(emptyOptions.value, options)
  }
  function setShowUpgrade(isShow: boolean) {
    showUpgrade.value = isShow
  }

  return {
    showEmpty,
    setShowEmpty,
    showUpgrade,
    setShowUpgrade,
  }
})
