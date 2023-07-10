<template>
  <view class="container">

    <view class="intro">本项目已包含uni ui组件，无需import和注册，可直接使用。在代码区键入字母u，即可通过代码助手列出所有可用组件。光标置于组件名称处按F1，即可查看组件文档。</view>
    <text class="intro">详见：</text>
    <uni-link :href="href" :text="href"></uni-link>

    <HelloWorld />

    <uni-section title="修改颜色 + 字体大小" type="line" padding>
      <uni-countdown :font-size="30" :day="1" :hour="2" :minute="30" :second="0" color="#FFFFFF"
        background-color="#007AFF" />
    </uni-section>

    <navigator url="/pages/inspection/index"><button type="default">点检任务</button></navigator>

    <button @click="handleLogin">小程序登录</button>
  </view>
</template>

<script setup lang="ts">
  import HelloWorld from '@/components/HelloWorld.vue'
  import useCustomTabBar from '@/composables/useCustomTabBar'

  useCustomTabBar({ selected: 0 })

  const href = 'https://uniapp.dcloud.io/component/README?id=uniui'

  function handleLogin() {
    uni.login({
      provider: 'weixin',
      success: function (res) {
        uni.showModal({
          title: res.errMsg,
          content: res.code
        })
      }
    })
  }
</script>

<style>
  .container {
    padding: 20px;
    font-size: 14px;
    line-height: 24px;
  }
</style>