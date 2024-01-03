<script setup lang="ts">
import Flow from './components/Flow.vue'
import { REGISTER_STEP } from './enum'

defineOptions({ name: 'RegisterFinished' })
const isPerson = ref(true)
onLoad((query) => {
  if (query?.isPerson !== 'false')
    isPerson.value = true

  else
    isPerson.value = false
})
</script>

<template>
  <view>
    <Flow :active="REGISTER_STEP.F" :is-person="isPerson" />
    <view class="mt-136rpx flex-center-justify flex-col bg-white">
      <div i-register-register-finished class="h-330rpx w-467rpx" />
      <text class="mt-40rpx text-32rpx text-[#000]">
        恭喜，您已成功提交注册及开户申请
      </text>
      <view class="mt-30rpx text-center text-[#888]">
        <view>预计一个工作日内开户成功，</view>
        <view>平台将审核结果发送到您的注册手机上，</view>
        <view>请注意查收短信提醒。</view>
      </view>
      <view class="mt-72rpx flex-center-justify">
        <uv-button class="own-button w-274rpx" shape="circle" @click="() => router.push('/pages/workbench')">
          进入首页
        </uv-button>
        <uv-button v-if="isPerson" type="primary" class="ml-48rpx w-274rpx" shape="circle" @click="router.push('/pages/register/company/index')">
          创建企业
        </uv-button>
      </view>
    </view>
  </view>
</template>
