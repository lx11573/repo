<script setup lang="ts">
import { REGISTER_STEP } from '../enum'
import type { UploadProps } from '../types'
import Flow from './Flow.vue'
import IdcardUpload from './IdcardUpload.vue'

defineOptions({ name: 'RegisterUpload' })
const props = defineProps<UploadProps>()
const idCardAvatar = ref()
const idCardBack = ref()
const step = computed(() => !props.isPerson ? '（3/4）' : '（2/3）')
function handleNext() {
  router.push({
    path: '/pages/register/finished',
    query: {
      isPerson: props.isPerson?.toString(),
    },
  })
}
</script>

<template>
  <view class="bg-[#f7f7f7]">
    <Flow :active="REGISTER_STEP.U" :is-person="isPerson" />
    <IdcardUpload
      v-model:idcard-avatar="idCardAvatar" v-model:idcard-back-side="idCardBack" :is-person="isPerson"
      :title="title"
    />
    <view class="bg-white pb-80rpx pt-180rpx">
      <view class="flex-center-justify">
        <uv-button type="primary" shape="circle" class="w-340rpx" @click="handleNext">
          下一步 {{ step }}
        </uv-button>
        <uv-button
          v-if="isPerson" shape="circle" class="own-button ml-26rpx w-264rpx"
          @click="() => router.push('/pages/register/finished')"
        >
          跳过
        </uv-button>
        <uv-button v-else shape="circle" class="own-button ml-26rpx w-264rpx" @click="() => router.push('/pages/index')">
          返回
        </uv-button>
      </view>
    </view>
  </view>
</template>
