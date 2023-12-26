<script setup>
import { useBaseStore } from '~/store'

defineOptions({ name: 'UpgradeCenter' })

const baseStore = useBaseStore()
</script>

<template>
	<view v-if="baseStore.showUpgrade" class="mask flex-center">
		<view class="content botton-radius">
			<view class="content-top">
				<image class="content-top" style="top: 0;" width="100%" height="100%" src="@/static/images/bg_top.png" />
			</view>
			<view class="content-header" />
			<view class="content-body">
				<view class="title" />
				<view class="body" />
				<view class="flex-center footer">
					<button class="content-button" style="border: none;color: #fff;" plain>
						安装完毕，点击重启
					</button>
				</view>
			</view>
		</view>
	</view>
</template>

<style scoped>
.flex-center {
	/* #ifndef APP-NVUE */
	display: flex;
	/* #endif */
	justify-content: center;
	align-items: center;
}

.mask {
	position: fixed;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, .65);
}

.botton-radius {
	border-bottom-left-radius: 30rpx;
	border-bottom-right-radius: 30rpx;
}

.content {
	position: relative;
	top: 0;
	width: 600rpx;
	background-color: #fff;
	box-sizing: border-box;
	padding: 0 50rpx;
	font-family: Source Han Sans CN;
}

.text {
	/* #ifndef APP-NVUE */
	display: block;
	/* #endif */
	line-height: 200px;
	text-align: center;
	color: #FFFFFF;
}

.content-top {
	position: absolute;
	top: -195rpx;
	left: 0;
	width: 600rpx;
	height: 270rpx;
}

.content-top-text {
	font-size: 45rpx;
	font-weight: bold;
	color: #F8F8FA;
	position: absolute;
	top: 120rpx;
	left: 50rpx;
	z-index: 1;
}

.content-header {
	height: 70rpx;
}

.title {
	font-size: 33rpx;
	font-weight: bold;
	color: #3DA7FF;
	line-height: 38px;
}

.footer {
	height: 150rpx;
	display: flex;
	align-items: center;
	justify-content: space-around;
}

.box-des-scroll {
	box-sizing: border-box;
	padding: 0 40rpx;
	height: 200rpx;
	text-align: left;
}

.box-des {
	font-size: 26rpx;
	color: #000000;
	line-height: 50rpx;
}

.progress-box {
	width: 100%;
}

.progress {
	width: 90%;
	height: 40rpx;
	/* border-radius: 35px; */
}

.close-img {
	width: 70rpx;
	height: 70rpx;
	z-index: 1000;
	position: absolute;
	bottom: -120rpx;
	left: calc(50% - 70rpx / 2);
}

.content-button {
	text-align: center;
	flex: 1;
	font-size: 30rpx;
	font-weight: 400;
	color: #FFFFFF;
	border-radius: 40rpx;
	margin: 0 18rpx;

	height: 80rpx;
	line-height: 80rpx;

	background: linear-gradient(to right, #1785ff, #3DA7FF);
}

.flex-column {
	display: flex;
	flex-direction: column;
	align-items: center;
}
</style>
