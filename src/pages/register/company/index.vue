<script setup lang="ts">
import Register from '../components/Register.vue'
</script>

<template>
  <Register :is-person="false" />
</template>

<route lang="yaml">
  style:
    navigationBarTitleText: '企业注册'
</route>
