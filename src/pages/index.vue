<script setup lang="ts">
const name = $ref('')
const count = 0.1 + 0.2
const copy = ref(0.1 + 0.2)
</script>

<template>
  <div>
    <div>
      current name: {{ name }} {{ count }} === {{ copy }}
    </div>
  </div>
</template>

<route lang="yaml">
  style:
    navigationBarTitleText: '22222'
</route>
