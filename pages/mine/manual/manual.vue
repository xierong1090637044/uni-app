<template>
    <view>
        <web-view :webview-styles="webviewStyles" src="https://www.jimuzhou.com/extra/pages/manual/manual"></web-view>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                webviewStyles: {
                    progress: {
                        color: '#FF3333'
                    }
                }
            }
        }
    }
</script>

<style>

</style>