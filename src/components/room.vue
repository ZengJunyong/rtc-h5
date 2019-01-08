<template>
  <div class="container flex">
    <div class="room">
      <div class="video flex-center">
        <video v-show="localStream" id="previewVideo" muted autoplay playsinline controls></video>
        <img v-show="!localStream" src="https://miniprogram-1252463788.file.myqcloud.com/roomset_1.png" alt="">
      </div>
      <div class="video flex-center">
        <video v-show="remoteStream" id="remoteVideo" autoplay playsinline controls></video>
        <img v-show="!remoteStream" src="https://miniprogram-1252463788.file.myqcloud.com/roomset_2.png" alt="">
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
  import rtc from "@/utils/zego.util";

  export default {
    name: "room",
    data() {
      return {
        room: "",
        localStream: true,
        remoteStream: true
      };
    },
    mounted() {
      this.initRTC();
    },
    methods: {
      initRTC() {
        rtc.openRoom('123', 1)
      },
      toggleMute() {
      },
      toggleCamera() {
      }
    }
  };
</script>

<style scoped lang="less">
  .flex {
    display: flex;
    flex-direction: column;
  }

  @bottomHeight: 90px;

  .room {
    flex-grow: 1;
    padding: 12px 12px 0 12px;
    display: flex;
    flex-wrap: wrap;
    height: calc(100% - @bottomHeight);

    @margin: 2px;

    .video {
      width: calc(50% - @margin);
      height: 50%;
      background-color: #000;
      opacity: 0.55;
      margin-bottom: 6px;

      &:nth-child(odd) {
        margin-right: @margin;
      }

      &:nth-child(even) {
        margin-left: @margin;
      }

      video {
        width: 100%;
        height: 100%;
      }

      img {
        width: 30px;
      }
    }
  }

  .bottom {
    height: @bottomHeight;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 25px;

    img {
      width: 50px;
    }
  }
</style>
