<script setup lang="ts">
import type { Props } from './types.ts'

defineProps<Props>()
</script>

<template>
  <view class="uv-form-item__body__left">
    <view class="uv-form-item__body__left__content" :class="ownClass">
      <view class="uv-form-item__body__left__content__label">
        <slot />
      </view>
    </view>
  </view>
</template>
