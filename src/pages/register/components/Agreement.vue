<script setup lang="ts">
import { useEventBus } from '@vueuse/core'
import { AGREE_KEY } from '../constant'

const modalRef = ref<Uv.Inst['Modal']>()
const eventBus = useEventBus(AGREE_KEY)
eventBus.on((event) => {
  if (event === 'show')
    modalRef.value?.open()
})
function handleConfirm() {
  modalRef.value?.close()
  eventBus.emit('agree')
}
onMounted(() => {
  nextTick(() => {
    if (modalRef.value)
      modalRef.value.open()
  })
})
</script>

<template>
  <uv-modal ref="modalRef" title="用户注册协议">
    <view class="text-26rpx">
      <view>
        <view class="text-[#333] font-700">
          【特别提示】
        </view>
        <text> 如果您不同意相关协议或其中规定的任何条款您应立即停止系统注册程序当您按照注册页面完成全部注册后，即表示您已充分阅读、理解并接受协议的全部内容。</text>
      </view>
      <view class="mt-50rpx">
        <view class="text-[#333] font-700">
          【审慎阅读】
        </view>
        <view>
          <text> 您在申请注册流程中点击同意前请您务必审慎阅读、充分理解协议中相关条款内容，其中包括： </text>
          <view>1、与您约定或限制责任的条款 </view>
          <view>2、与您约定的法律适用和管辖的条款 如果您对协议有任何疑问，可向系统客服咨询</view>
        </view>
      </view>
      <view class="mt-16rpx">
        <uv-text type="primary" text="《用户注册协议》" @click="() => router.push('/pages/register/agreement')" />
      </view>
    </view>
    <template #confirmButton>
      <view class="px-25px pb-25px">
        <uv-button type="primary" shape="circle" @click="handleConfirm">
          已阅读并同意此协议
        </uv-button>
      </view>
    </template>
  </uv-modal>
</template>
