<template>
	<view class="content">
		<!-- 自定义头部 -->
		<view class="nav_head">
			<view class=""></view>
		    <view class="status_bar">
		       计数器
		    </view>
		    <view class="nav_head_image" v-on:click="setState"><image class="u_img" src="../../static/add.svg" mode=""></image> </view>
		 </view>
		<view class="index_box">
			<view class="list_item" v-for="item in list" v-bind:key='item.id' v-on:click="GotoJsqInfo(item.id)">{{item.title}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[
					{id:1,title:'cl'},
					{id:2,title:'c2'}
				],
				state:false
			}
		},
		onLoad() {

		},
		methods: {
			GotoJsqInfo(id){
				console.log(11)
				uni.navigateTo({
					url: `../jsqInfo/index?id=${id}`
				});
			},
			setState(){
				this.state=true
			},
			
			 change(e) {
			    const value = e.detail.value
			 }
		}
	}
</script>

<style>
	.nav_head{
		height: 88rpx;
		line-height: 88rpx;
		display: flex;
		justify-content: space-between;
		padding: 15px;
		box-sizing: content-box;
	}
	.nav_head_image{
		width: 40rpx;
		height: 40rpx;

	}
	.u_img{
		width: 100%;
		height: 100%;
		position: relative;
		top: 5px;
	}
	.index_box{
		box-sizing: content-box;
		padding: 0 24rpx;
	}
	.list_item{
		height: 80rpx;
		line-height: 80rpx;
		margin-bottom: 24rpx;
		background-color: #555555;
		border-radius: 10rpx;
		padding: 0 15px;
		box-sizing: content-box;
	}
</style>
