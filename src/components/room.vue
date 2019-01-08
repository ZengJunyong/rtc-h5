<template>
  <div class="container flex">
    <div class="room">
      <div class="video flex-center">
        <video v-show="previewVideo" id="previewVideo" muted autoplay playsinline controls></video>
        <img v-show="!previewVideo" src="https://miniprogram-1252463788.file.myqcloud.com/roomset_1.png" alt="">
      </div>
      <div class="video flex-center">
        <video v-show="remoteVideo[0]" class="remoteVideo" autoplay playsinline controls></video>
        <img v-show="!remoteVideo[0]" src="https://miniprogram-1252463788.file.myqcloud.com/roomset_2.png" alt="">
      </div>
      <div class="video flex-center">
        <video v-show="remoteVideo[1]" class="remoteVideo" autoplay playsinline controls></video>
        <img v-show="!remoteVideo[1]" src="https://miniprogram-1252463788.file.myqcloud.com/roomset_3.png" alt="">
      </div>
      <div class="video flex-center">
        <video v-show="remoteVideo[2]" class="remoteVideo" autoplay playsinline controls></video>
        <img v-show="!remoteVideo[2]" src="https://miniprogram-1252463788.file.myqcloud.com/roomset_4.png" alt="">
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
  import zg from "@/utils/zego";

  export default {
    name: "room",
    data() {
      return {
        previewVideo: false,
        remoteVideo: [false, false, false]
      };
    },
    mounted() {
      this.initRTC();
    },
    methods: {
      initRTC() {
        zg.openRoom(
          this.$route.query.room, 1,
          document.getElementById("previewVideo"),
          document.querySelectorAll(".remoteVideo"),
          () => {
            this.previewVideo = true;
          },
          (len) => {
            for (let i = 0; i < this.remoteVideo.length; i++) {
              this.remoteVideo.splice(i, 1, i < len)
            }
          });
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
