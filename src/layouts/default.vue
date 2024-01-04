<script setup lang="ts">
</script>

<template>
  <div class="app" :class="{ dark: isDark }">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.test-txt {
  color: $uni-color-primary;
}
</style>
