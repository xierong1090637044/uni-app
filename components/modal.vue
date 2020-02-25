<template>
	<view>
		<view class='modal transparent' v-if="is_transparent" catchtouchmove="preventD" @click="hiddenModal">
			<slot></slot>
		</view>
		<view class='modal light_black' v-else catchtouchmove="preventD" @click="hiddenModal">
			<slot></slot>
		</view>

	</view>
</template>

<script>
	export default {
		name: 'modal',
		props: {
			is_transparent: {
				type: Boolean,
				value: false
			}
		},
		externalClasses: ['my_class'],

		data() {
			return {
				modal_display: ""
			};
		},

		methods: {
			preventD() {
				return
			},
			
			hiddenModal(){
				this.$emit("hideModal")
			}
		}
	}
</script>

<style>
	.modal {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 1000;
	}

	.transparent {
		background: transparent;
	}

	.light_black {
		background: rgba(0, 0, 0, 0.5);
	}
</style>
