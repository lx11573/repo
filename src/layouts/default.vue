<script setup lang="ts">
const baseStore = useBaseStore()
</script>

<template>
  <div class="app" :class="{ dark: isDark }">
    <uv-empty v-if="baseStore.showEmpty" mode="car" icon="https://cdn.uviewui.com/uview/empty/car.png" />
    <slot v-else />
    <UpgradeCenter />
  </div>
</template>

<style lang="scss" scoped>
.test-txt {
  color: $uni-color-primary;
}
</style>
