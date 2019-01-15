<template>
  <div class="container flex">
    <div class="room" :class="lengthOfRemoteVideo<=3?'':'scroll'">
      <div class="video flex-center" :class="previewVideo?'':'opacity55'">
        <video v-show="previewVideo" id="previewVideo" muted autoplay playsinline controls></video>
        <img v-show="!previewVideo" src="static/roomset_1.png" alt="">
      </div>
      <div class="video flex-center" v-show="lengthOfRemoteVideo<=3? i<3: i<lengthOfRemoteVideo"
           :class="r?'':'opacity55'"
           v-for="(r,i) in remoteVideo">
        <video v-show="r" class="remoteVideo" autoplay playsinline controls></video>
        <img v-show="!r" :src="'static/roomset_' + (i+2) + '.png'" alt="">
      </div>
    </div>
    <div class="bottom">
      <div class="flex-center">
        <img :src="'static/camera' + (enableCamera ? '-dis' : '')  + '.png'" @click="toggleCamera" alt="">
      </div>
      <div class="flex-center">
        <img :src="'static/mic'+ (enableMic ? '-dis' : '') +'.png'" @click="toggleMic" alt="">
      </div>
      <div class="flex-center">
        <img :src="'static/screen' + (enableScreen ? '-dis' : '')  + '.png'" @click="toggleScreen" alt="">
      </div>
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
        remoteVideo: [false, false, false, false, false, false, false, false, false, false,
          false, false, false, false, false, false, false, false, false],
        lengthOfRemoteVideo: 0,
        enableCamera: true,
        enableMic: true,
        enableScreen: false
      };
    },
    mounted() {
      zg.openRoom(
        this.$route.query.room, 1,
        document.getElementById("previewVideo"),
        document.querySelectorAll(".remoteVideo"),
        () => {
          this.previewVideo = true;
        },
        (len) => {
          this.lengthOfRemoteVideo = len;
          for (let i = 0; i < this.remoteVideo.length; i++) {
            this.remoteVideo.splice(i, 1, i < len);
          }
        });
    },
    methods: {
      toggleCamera() {
        this.enableCamera = !this.enableCamera;
        zg.enableCamera(this.enableCamera);
      },
      toggleMic() {
        this.enableMic = !this.enableMic;
        zg.enableMicrophone(this.enableMic);
      },
      toggleScreen() {
        if (!zg.isSupportShareScreen) {
          alert("屏幕分享功能只支持桌面系统的Chrome或者Firefox浏览器");
        } else {
          this.enableScreen = !this.enableScreen;
          zg.enableScreen(this.enableScreen);
        }
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

  .scroll {
    overflow: scroll;
  }

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

    .opacity55 {
      opacity: 0.55;
    }

  }

  .bottom {
    height: @bottomHeight;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 25px;

    div {
      width: 40px;
      height: 40px;
      background: white;
      border-radius: 50%;

      img {
        width: 25px;
      }
    }
  }
</style>
