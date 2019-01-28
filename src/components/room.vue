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
      <div>
        <div>
          <img :src="'static/camera.png'" @click="toggleCamera" alt="">
          开启视频
        </div>
        <div>
          <img :src="'static/mic.png'" @click="toggleMic" alt="">
          关闭声音
        </div>
        <div>
          <img :src="'static/screen.png'" @click="toggleScreen" alt="">
          屏幕分享
        </div>
      </div>
      <div>
        <div>
          <img :src="'static/link.png'" alt="">
          复制链接
        </div>
        <div>
          <img :src="'static/invite.png'" alt="">
          邀请朋友
        </div>
        <div>
          <span class="flex-center">548906</span>
          会议编号
        </div>
      </div>
      <div class="none">
        <audio id="screenAudio" autoplay muted playsinline></audio>
        <audio v-for="r in remoteVideo" class="remoteAudio" autoplay playsinline></audio>
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
      // zg.openRoom(
      //   this.$route.query.room, 1,
      //   document.getElementById("previewVideo"),
      //   document.querySelectorAll(".remoteVideo"),
      //   document.querySelectorAll(".remoteAudio"),
      //   () => {
      //     this.previewVideo = true;
      //   },
      //   (len) => {
      //     this.lengthOfRemoteVideo = len;
      //     for (let i = 0; i < this.remoteVideo.length; i++) {
      //       this.remoteVideo.splice(i, 1, i < len);
      //     }
      //   });
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
  .container {
    height: 100%;
    background: black;
    color: white;
  }

  .flex {
    display: flex;
    flex-direction: column;
  }

  @bottomHeight: 80px;

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
      background-color: #333333;
      background-image: url(https://mc.qcloudimg.com/static/img/7da57e0050d308e2e1b1e31afbc42929/bg.png);
      background-repeat: no-repeat;
      background-size: cover;
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
      opacity: 0.75;
    }

  }

  .bottom {
    height: @bottomHeight;
    display: flex;
    justify-content: space-between;
    padding: 0 12px;

    div {
      display: flex;
      align-items: center;

      > div {
        padding-top: 8px;
        flex-direction: column;
        font-size: 12px;

        img {
          width: 30px;
          margin-bottom: 4px;
        }
      }
    }

    > div:first-child {
      flex-grow: 1;

      div {
        margin-right: 30px;
      }
    }

    > div:nth-child(2) {
      div {
        margin-left: 30px;
      }
    }

    span {
      width: 100%;
      height: 30px;
      background: white;
      padding: 0 5px;
      margin-bottom: 4px;
      color: black;
      border-radius: 5px;
      font-size: 18px;
      font-weight: bold;
    }
  }

  .none {
    display: none;
  }

</style>
