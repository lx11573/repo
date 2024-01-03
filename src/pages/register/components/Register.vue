<script setup lang="ts">
import { REGISTER_STEP } from '../enum'
import type { BaseProps } from '../types'
import Flow from './Flow.vue'
import Agreement from './Agreement.vue'
import BindPhone from './BindPhone.vue'
import { isIdCardCode } from '@/utils'

const props = defineProps<BaseProps>()
const nextText = computed(() => props.isPerson ? '下一步（1/3）' : '下一步（1/4）')
const formRef = ref<Uv.Inst['Form']>()
// TODO 区分 isPerson
const form = ref({
  name: '',
  password: '',
  idcard: '',
  ispassword: '',
})
// TODO 区分 isPerson
const rules: Form.Rules = {
  // 姓名
  name: [
    {
      required: true,
      message: '请输入姓名',
      trigger: 'blur',
    },
    {
      min: 2,
      message: '姓名长度必须位于2-20位之间',
      trigger: 'blur',
    },
    {
      max: 20,
      message: '姓名长度必须位于2-20位之间',
      trigger: 'blur',
    },
  ],
  // 身份证号
  idcard: [
    {
      required: true,
      message: '请输入身份证号',
      trigger: 'blur',
    },
    {
      validator: (rule, value) => {
        return isIdCardCode(value)
      },
      message: '请输入正确的证件号码',
      trigger: 'blur',
    },
  ],
  // 密码
  password: [
    {
      required: true,
      message: '请输入密码',
      trigger: ['change', 'blur'],
    },
    {
      pattern: /^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$).{6,20}$/,
      message: '密码为6-20位, 数字、字母、符号任意两种组合',
      trigger: 'blur',
    },
  ],
  ispassword: [
    {
      required: true,
      message: '请确认密码',
      trigger: 'blur',
    },
    {
      validator: (rule, value) => {
        return form.value.password === value
      },
      message: '两次密码输入不一致',
      trigger: ['blur', 'change'],
    },
  ],
  // 手机号
  phone: [
    {
      required: true,
      message: '请输入您的手机号码',
      trigger: ['change', 'blur'],
    },
    {
      pattern: /^(((13[0-9]{1})|(14[0-9]{1})|(15[0-9]{1})|(16[0-9]{1})|(17[0-9]{1})|(19[0-9]{1})|(18[0-9]{1}))+\d{8})$/,
      message: '请输入正确的手机号码',
      trigger: 'blur',
    },
  ],
  // 验证码
  authcode: [
    {
      required: true,
      message: '请输入短信验证码',
      trigger: ['change', 'blur'],
    },
    {
      max: 6,
      message: '请输入正确的短信验证码',
      trigger: 'blur',
    },
  ],
}

function handleNext() {
  const path: RoutePath = props.isPerson ? '/pages/register/person/upload' : '/pages/register/company/open-act/index'
  router.push(path)
  formRef.value?.validate((valid) => {
    console.log('valid', valid)
  })
}
</script>

<template>
  <view class="bg-[#f7f7f7]">
    <Flow :active="REGISTER_STEP.S" :is-person="isPerson" />
    <uv-form ref="formRef" label-position="left" :model="form" :rules="rules" class="own-form" label-width="120">
      <template v-if="isPerson">
        <view class="mt-16rpx bg-white px-30rpx">
          <CellTitle label="个人信息" sub-label="请注意姓名及身份证号要与身份证上保持一致" border :padding="0" />
          <uv-form-item label="姓名" prop="name" border-bottom>
            <uv-input v-model="form.name" border="none" placeholder="请输入身份证姓名" />
          </uv-form-item>
          <uv-form-item label="身份证号码" prop="idcard" border-bottom>
            <uv-input v-model="form.idcard" border="none" placeholder="请输入身份证号码" />
          </uv-form-item>
        </view>
        <view class="mt-16rpx bg-white px-30rpx">
          <CellTitle label="登录密码" border :padding="0" />
          <uv-form-item label="登录密码" prop="password" border-bottom>
            <uv-input v-model="form.password" type="password" border="none" placeholder="请输入登录密码" />
          </uv-form-item>
          <uv-form-item label="确认密码" prop="ispassword" border-bottom>
            <uv-input v-model="form.ispassword" type="password" border="none" placeholder="请再次输入登录密码" />
          </uv-form-item>
          <uv-form-item label="">
            <text class="text-24rpx text-[#888888]">
              密码必须是6-20位英文字母、数字或符号（除空格）且字母数字和标点符号至少包含2种
            </text>
          </uv-form-item>
        </view>
      </template>
      <template v-else>
        <view class="mt-16rpx bg-white px-30rpx">
          <CellTitle label="企业信息" sub-label="请注意企业名称及统一社会信用代码与营业样本上保持一致" border :padding="0" />
          <uv-form-item label="企业名称" prop="name" border-bottom>
            <uv-input v-model="form.name" border="none" placeholder="请输入企业名称" />
          </uv-form-item>
          <uv-form-item label="身份证号码" prop="idcard" border-bottom>
            <template #label>
              <FormItemLabel own-class="w-120px">
                <text>统一社会</text><br>
                <text>信用代码</text>
              </FormItemLabel>
            </template>
            <uv-input v-model="form.name" border="none" placeholder="请输入企业名称" />
          </uv-form-item>
        </view>
      </template>
      <BindPhone :form="form" is-person />
      <view class="flex-center-justify bg-white pb-88rpx pt-72rpx">
        <uv-button type="primary" :text="nextText" custom-style="width: 630rpx" shape="circle" @click="handleNext" />
      </view>
    </uv-form>

    <Agreement />
  </view>
</template>

<style lang="scss" scoped>
.own-form {
  & :deep(.own-checkbox-group) {
    flex: unset;
  }
}
</style>
