<template>
  <div class="container">
    <h1>视频会议系统</h1>
    <input type="number" v-model="room" placeholder="请输入房间号" required>
    <button class="join" @click="enterRoom">创建/加入房间</button>
  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        room: ""
      };
    },
    methods: {
      enterRoom() {
        this.$router.push({ name: "room", query: { room: this.room } });
      }
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
    padding: 5px;
  }

  button {
    &.join {
      background: #3aaafb;
      color: white;
      border-radius: 50px;
      border: none;
    }
  }
</style>
