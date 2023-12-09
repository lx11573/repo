<script setup lang="ts">
const name = $ref('')
</script>

<template>
  <div>
    <TheLogo />
    <div py-4 />
    <TheInput
      ::value="name"
      placeholder="What's your name?"
    />
    <div>
      name: {{ name }}
    </div>
    <div>
      <button
        m-3 text-sm btn
        :disabled="!name"
        @click="router.push(`/pages/hi?name=${name}`)"
      >
        Go
      </button>
    </div>
  </div>
</template>

<route lang="yaml">
  style:
    navigationBarTitleText: '1123'
  </route>
