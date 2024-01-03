<script setup lang="ts">
import Flow from '../../components/Flow.vue'
import { REGISTER_STEP } from '../../enum'
import { usePublicAct } from './hooks'
import { isIdCardCode } from '@/utils'

defineOptions({ name: 'RegisterOpenAct' })
const { actInfo, handleAddressChange, subBankNames, subBankNumbers, loading, addressList } = usePublicAct()
function confirm() { }
const formRef = ref<Uv.Inst['Form']>()
const form = ref({
  name: '',
  password: '',
  idcard: '',
  ispassword: '',
})
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
      validator: (rule, value, callback) => {
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
      validator: (rule, value, callback) => {
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
  router.push('/pages/register/company/upload')
  // formRef.value?.validate((valid) => {
  //   console.log('valid', valid)
  // })
}
</script>

<template>
  <view>
    <Flow :is-person="false" :active="REGISTER_STEP.O" />
    <uv-form ref="formRef" label-position="left" :model="form" :rules="rules" class="own-form" label-width="130">
      <view class="mt-16rpx bg-white px-30rpx">
        <CellTitle label="法定代表人信息" border :padding="0" />
        <uv-form-item label="法人姓名" prop="name" border-bottom>
          <uv-input v-model="form.name" border="none" placeholder="请输入法人姓名" />
        </uv-form-item>
        <uv-form-item label="法人身份证号码" prop="idcard" border-bottom>
          <uv-input v-model="form.idcard" border="none" placeholder="请输入法人身份证号码" />
        </uv-form-item>
        <uv-form-item label="法人手机号码" prop="idcard" border-bottom>
          <uv-input v-model="form.idcard" border="none" placeholder="请输入法人手机号码" />
        </uv-form-item>
      </view>
      <view class="mt-16rpx bg-white px-30rpx">
        <CellTitle label="对公账户信息" border :padding="0" />
        <uv-form-item label="开户行" prop="bankname" border-bottom label-width="100">
          <uv-input v-model="actInfo.bankName" disabled disabled-color="#ffffff" placeholder="请选择开户行" border="none" />
        </uv-form-item>
        <uv-form-item prop="bankPlace" border-bottom>
          <template #label>
            <view class="uv-form-item__body__left text-32rpx">
              <view class="uv-form-item__body__left__content w-100px">
                <view class="uv-form-item__body__left__content__label">
                  <text>开户行</text><br>
                  <text>所在地</text>
                </view>
              </view>
            </view>
          </template>
          <uv-input v-model="actInfo.bankPlace" disabled disabled-color="#ffffff" placeholder="请选择开户行所在地" border="none" />
        </uv-form-item>
        <uv-form-item prop="subBranch" border-bottom>
          <template #label>
            <view class="uv-form-item__body__left text-32rpx">
              <view class="uv-form-item__body__left__content w-100px">
                <view class="uv-form-item__body__left__content__label">
                  <text>开户行</text><br>
                  <text>支行名称</text>
                </view>
              </view>
            </view>
          </template>
          <uv-input v-model="actInfo.subBranch" disabled disabled-color="#ffffff" placeholder="请选择支行名称" border="none" />
        </uv-form-item>
        <uv-form-item label="开户行号" prop="bankId" border-bottom label-width="100">
          <uv-input v-model="actInfo.bankId" placeholder="请输入内容开户行号" type="number" border="none" />
        </uv-form-item>
        <uv-form-item label="企业行号" prop="companyId" border-bottom label-width="100">
          <uv-input v-model="actInfo.companyId" placeholder="请输入企业行号" border="none" />
        </uv-form-item>
      </view>
      <view class="flex-center-justify bg-white pb-88rpx pt-72rpx">
        <uv-button type="primary" text="下一步（2/4）" custom-style="width: 630rpx" shape="circle" @click="handleNext" />
      </view>
    </uv-form>
    <uv-picker ref="picker" :columns="addressList" :loading="loading" key-name="name" @change="handleAddressChange" @confirm="confirm" />
  </view>
</template>

<route lang="yaml">
  style:
    navigationBarTitleText: '创建企业'
</route>
