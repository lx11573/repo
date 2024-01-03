<script setup lang="ts">
const formRef = ref()
const form = reactive({
  phone: '',
  password: '',
})
const rules = {}
const showPwd = ref(false)
function toggleShowPwd() {
  showPwd.value = !showPwd.value
}
</script>

<template>
  <view class="px-60rpx pt-310rpx text-[#202020]">
    <view class="text-40rpx font-800">
      青岛有容信息科技有限公司
    </view>
    <view class="text-38rpx font-400">
      产业链财金管理系统
    </view>
    <uv-form ref="formRef" class="mt-102rpx" label-position="left" :model="form" :rules="rules">
      <uv-form-item label="" prop="phone" border-bottom>
        <uv-input v-model="form.phone" type="number" border="none" placeholder="请输入手机号码">
          <template #prefix>
            <div i-bx:bxs-mobile class="text-[#4d4e4f]" />
          </template>
        </uv-input>
      </uv-form-item>
      <uv-form-item label="" prop="password" border-bottom>
        <uv-input v-model="form.password" :type="showPwd ? 'text' : 'password'" placeholder="请输入密码（注意字母大小写）" border="none">
          <template #prefix>
            <div i-ic:baseline-lock class="text-[#4d4e4f]" />
          </template>
        </uv-input>
        <template #right>
          <view class="text-[#4d4e4f]">
            <div v-show="!showPwd" i-pepicons-pencil:eye-closed @click="toggleShowPwd" />
            <div v-show="showPwd" i-pepicons-pencil:eye-closed-off @click="toggleShowPwd" />
          </view>
        </template>
      </uv-form-item>
    </uv-form>
    <view class="mt-20rpx flex-center justify-between text-30rpx text-[#4D4E4F]">
      <u-text>忘记密码？</u-text>
      <u-text @click="() => router.push('/pages/register/person/index')">
        注册
      </u-text>
    </view>
    <uv-button shape="circle" type="primary" class="mt-90rpx">
      登录
    </uv-button>
  </view>
</template>

<route lang="yaml" type="home">
  style:
    navigationBarTitleText: ''
</route>
