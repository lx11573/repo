<script setup lang="ts">
import type { UploadProps } from '../types'
import cerCodeSvg from '@/static/icons/register/register_cer.svg'
import avatar from '@/static/icons/register/id-card--avatar.svg'
import backAvatar from '@/static/icons/register/id-card--back.svg'

withDefaults(defineProps<UploadProps>(), {
  title: '身份证上传',
})
// next-ad-ignore
const maxSize = 5 * 1024 * 1024
const fileList = ref([])
const { idcardAvatar, idcardBackSide } = defineModels<{
  idcardAvatar: string | void
  idcardBackSide: string | void
}>()
const cerCodeImg = ref(cerCodeSvg)
function afterRead(event: Uv.ChooseFileEvent, isAvatar: boolean) {
  if (isAvatar)
    idcardAvatar.value = ''
  else
    idcardBackSide.value = ''

  // TODO 赋值
  // event
  // console.log('file', file);
  // event.file
  // idCardAvatar.value = event.file.url
  // console.log(event.file.url)
}
</script>

<template>
  <view v-if="!isPerson" class="mt-16rpx bg-white pb-40rpx">
    <CellTitle label="营业执照上传" />
    <uv-upload :file-list="fileList" :max-count="1" class="mx-auto w-690rpx" :max-size="maxSize" @after-read="(e: any) => afterRead(e, true)">
      <view class="mx-auto h-305rpx w-690rpx flex-center-justify rounded-16rpx bg-[#F7F8FA]">
        <view class="w-160rpx">
          <view class="mt-24rpx text-24rpx">
            <text class="text-[#202020]">
              点击上传您的
            </text><br>
            <text class="text-primary">
              营业执照
            </text>
          </view>
        </view>
        <view class="ml-72rpx">
          <uv-image :src="cerCodeImg" width="368rpx" height="240rpx" />
        </view>
      </view>
    </uv-upload>
    <view class="mt-24rpx px-30rpx text-24rpx text-[#888888]">
      <view class="font-800">
        上传图片格式限制：
      </view>
      <view>1、图片大小不超过5M。</view>
      <view>2、图片格式只支持png、jpg、jpeg。</view>
    </view>
  </view>
  <view class="mt-16rpx bg-white">
    <CellTitle :label="title" />
    <uv-upload :file-list="fileList" :max-count="1" class="mx-auto w-690rpx" :max-size="maxSize" @after-read="(e: any) => afterRead(e, true)">
      <view class="mx-auto h-305rpx w-690rpx flex-center-justify rounded-16rpx bg-[#F7F8FA]">
        <view class="w-160rpx">
          <view class="text-32rpx text-[#202020]">
            <text class="text-32rpx text-danger">
              *
            </text>正面上传
          </view>
          <view class="mt-24rpx text-24rpx">
            <text class="text-[#202020]">
              点击上传您的
            </text><br>
            身份证<text class="text-primary">
              头像面
            </text>
          </view>
        </view>
        <view class="ml-72rpx">
          <uv-image :src="idcardAvatar ?? avatar" width="368rpx" height="240rpx" />
        </view>
      </view>
    </uv-upload>
    <uv-upload :file-list="fileList" :max-count="1" class="mx-auto w-690rpx" :max-size="maxSize" @after-read="(e: any) => afterRead(e, false)">
      <view class="mx-auto mt-16rpx h-305rpx w-690rpx flex-center-justify rounded-16rpx bg-[#F7F8FA]">
        <view class="w-160rpx">
          <view class="text-32rpx text-[#202020]">
            <text class="text-32rpx text-danger">
              *
            </text>背面上传
          </view>
          <view class="mt-24rpx text-24rpx">
            <text class="text-[#202020]">
              点击上传您的
            </text><br>
            身份证<text class="text-primary">
              国徽面
            </text>
          </view>
        </view>
        <view class="ml-72rpx">
          <uv-image :src="idcardBackSide ?? backAvatar" width="368rpx" height="240rpx" />
        </view>
      </view>
    </uv-upload>
    <view class="mt-24rpx px-30rpx text-24rpx text-[#888888]">
      <view class="font-800">
        上传图片格式限制：
      </view>
      <view>1、图片大小不超过5M。</view>
      <view>2、图片格式只支持png、jpg、jpeg。</view>
    </view>
  </view>
</template>
