<script setup lang="ts">
import type { CellTitleProps } from './types'
import { PREFIX } from './constant'

withDefaults(defineProps<CellTitleProps>(), {
  padding: 30,
})
const slots = useSlots()
</script>

<template>
  <view class="cell-title" :style="{ padding: `30rpx ${padding}rpx 0` }">
    <view class="flex-center pb-30rpx">
      <view v-if="slots.icon" class="mr-16rpx">
        <slot name="icon" />
      </view>
      <view class="w-[95%] ellipsis">
        <slot>
          <text v-if="label" class="ellipsis" :class="[`${PREFIX}__label`]">
            {{ label }}
          </text>
        </slot>
        <br>
        <slot name="sub-label">
          <text v-if="subLabel" :class="[`${PREFIX}__sub-label`]">
            {{ subLabel }}
          </text>
        </slot>
      </view>
    </view>
    <uv-line v-if="border" />
  </view>
</template>

<style lang="scss" scoped>
.cell-title {
  --uno: w-full box-border;

  &__label {
    --uno: text-34rpx text-[#202020] font-500;
  }

  &__sub-label {
    --uno: text-[#9F9F9F] text-24rpx mr-16rpx;
  }
}
</style>
