<script setup lang="ts">
import { useEventBus } from '@vueuse/core'
import type { BindPhoneProps } from '../types'
import { AGREE_KEY } from '../constant'
import { theme } from '@/theme.json'

const props = defineProps<BindPhoneProps>()
const eventBus = useEventBus(AGREE_KEY)
eventBus.on((event) => {
  if (event === 'agree') {
  // eslint-disable-next-line vue/no-mutating-props
    props.form.agree = ['agree']
  }
})

const codeRef = ref()
const tips = ref('获取验证码')
const isLoading = computed(() => /^\d/.test(tips.value))
const color = computed(() => isLoading.value ? theme.disabled : theme.primary)
function getCode() {
  if (codeRef.value.canGetCode && !isLoading.value)
    codeRef.value.start()
}
function handleChange(txt: string) {
  tips.value = txt
}
function handleAgree() {
  eventBus.emit('show')
}
</script>

<template>
  <view class="mt-16rpx bg-white px-30rpx">
    <CellTitle label="绑定手机" border :padding="0" />
    <uv-form-item label="绑定手机号" prop="phone" border-bottom>
      <uv-input v-model="form.phone" border="none" :readonly="!isPerson" placeholder="请输入手机号码" />
    </uv-form-item>
    <uv-form-item label="短信验证码" prop="authcode" border-bottom>
      <uv-input v-model="form.authcode" border="none" placeholder="请输入短信验证码">
        <template #suffix>
          <uv-code ref="codeRef" seconds="20" change-text="X秒重新获取" @change="handleChange" />
          <uv-text :text="tips" size="32rpx" :color="color" @click="getCode" />
        </template>
      </uv-input>
    </uv-form-item>
    <uv-form-item label="" prop="agree">
      <uv-checkbox-group v-model="form.agree" class="own-checkbox-group">
        <uv-checkbox name="agree">
          <text class="text-28rpx text-[#999999]">
            同意
          </text>
        </uv-checkbox>
      </uv-checkbox-group>
      <uv-text text="《用户注册协议》" class="w-200rpx" type="primary" @click="handleAgree" />
    </uv-form-item>
  </view>
</template>
