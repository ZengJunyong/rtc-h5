<template>
  <div class="container">
    <h1>视频会议系统</h1>
    <input type="text" placeholder="请输入房间号">
    <button class="join">创建/加入房间</button>
  </div>
</template>

<script>
  export default {
    name: "HelloWorld",
    data() {
      return {
        msg: "Welcome to Your Vue.js App"
      };
    }
  };
</script>

<style scoped lang="less">
  h1 {
    text-align: center;
    font-size: 30px;
    font-weight: bold;
    padding-top: 120px;
  }

  input, button {
    display: block;
    width: calc(100% - 50px);
    margin: 25px;
    text-align: center;
    font-size: 16px;
    line-height: 2;
  }

  button {
    &.join {
      background: #3aaafb;
      color: white;
      border-radius: 50px;
    }
  }
</style>
