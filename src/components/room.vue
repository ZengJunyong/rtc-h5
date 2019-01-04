<template>
  <div class="container flex">
    <div class="room">
      <div class="video flex-center">
        <img src="https://miniprogram-1252463788.file.myqcloud.com/roomset_1.png" alt="">
      </div>
      <div class="video flex-center">
        <img src="https://miniprogram-1252463788.file.myqcloud.com/roomset_2.png" alt="">
      </div>
      <div class="video flex-center">
        <img src="https://miniprogram-1252463788.file.myqcloud.com/roomset_3.png" alt="">
      </div>
      <div class="video flex-center">
        <img src="https://miniprogram-1252463788.file.myqcloud.com/roomset_4.png" alt="">
      </div>
    </div>
    <div class="bottom">
      <img src="static/camera.png" alt="">
      <img src="static/mic.png" alt="">
      <img src="static/beauty-dis.png" alt="">
      <img src="static/log2.png" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: "room",
    data() {
      return {
        room: ""
      };
    },
    mounted() {

    },
    methods: {
      enterRoom() {
      }
    }
  };
</script>

<style scoped lang="less">
  .flex {
    display: flex;
    flex-direction: column;
  }

  .room {
    flex-grow: 1;
    padding: 12px 12px 0 12px;
    display: flex;
    flex-wrap: wrap;

    .video {
      width: calc(50% - 4px);
      background-color: #000;
      opacity: 0.55;
      margin-bottom: 6px;

      &:nth-child(odd) {
        margin-right: 2px;
      }

      &:nth-child(even) {
        margin-left: 2px;
      }

      img {
        width: 30px;
      }
    }
  }

  .bottom {
    height: 80px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 25px;

    img {
      width: 50px;
    }
  }
</style>
