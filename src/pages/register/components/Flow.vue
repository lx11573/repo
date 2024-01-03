<script setup lang="ts">
import type { FlowProps } from '../types'
import { REGISTER_STEP } from '../enum'

const props = defineProps<FlowProps>()
const steps = computed(() => {
  const list = [
    {
      title: '注册',
      step: REGISTER_STEP.S,
      icon: 'i-register:register-1',
    },
    {
      title: '开户',
      step: REGISTER_STEP.O,
      icon: 'i-register:register-c',
    },
    {
      title: '上传证件照片',
      step: REGISTER_STEP.U,
      icon: 'i-register:register-2',
    },
    {
      title: '完成',
      step: REGISTER_STEP.F,
      icon: 'i-register:register-3',
    },
  ]
  return props.isPerson ? list.filter(item => item.step !== REGISTER_STEP.O) : list
})
function isActive(step: number) {
  if (props.isPerson)
    return props.active > step - 1

  return props.active >= step
}
</script>

<template>
  <view class="h-104rpx flex-center-justify bg-white text-28rpx">
    <template v-for="(step, index) of steps" :key="step.step">
      <view class="register-wrap">
        <div :class="[step.icon, isActive(step.step) ? 'text-primary' : 'text-[#9f9f9f]']" />
        <text :class="[isActive(step.step) ? 'text-primary' : 'text-[#9f9f9f]']">
          {{ step.title }}
        </text>
      </view>
      <div v-if="steps.length - 1 !== index" i-local:register_arrow mx-7rpx
           :class="[isActive(index) ? 'text-primary' : 'text-[#9f9f9f]']"
      />
    </template>
  </view>
</template>

<style lang="scss" scoped>
.register-wrap {
  --uno: flex-center;

  & text {
    --uno: ml-12rpx;
  }
}
</style>
