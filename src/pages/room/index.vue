<template>
  <div class="container flex">
    <div class="room" :class="lengthOfRemoteVideo<=3?'':'scroll'">
      <div class="video flex-center" :class="previewVideo?'':'opacity55'">
        <video v-show="previewVideo" id="previewVideo" muted autoplay playsinline controls></video>
        <img v-show="!previewVideo" src="https://zengjunyong.github.io/rtc-h5/dist/h5/static/roomset_1.png" alt="">
      </div>
      <div class="video flex-center" v-show="lengthOfRemoteVideo<=3? i<3: i<lengthOfRemoteVideo"
           :class="r?'':'opacity55'"
           v-for="(r,i) in remoteVideo">
        <video v-show="r" class="remoteVideo" autoplay playsinline controls></video>
        <img v-show="!r" :src="'https://zengjunyong.github.io/rtc-h5/dist/h5/static/roomset_' + (i+2) + '.png'" alt="">
      </div>
    </div>
    <div class="bottom">
      <img :src="'https://zengjunyong.github.io/rtc-h5/dist/h5/static/camera' + (enableCamera ? '' : '-dis')  + '.png'"
           @click="toggleCamera" alt="">
      <img :src="'https://zengjunyong.github.io/rtc-h5/dist/h5/static/mic'+ (enableMic ? '' : '-dis') +'.png'"
           @click="toggleMic" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: "room",
    data() {
      return {
        previewVideo: false,
        remoteVideo: [false, false, false, false, false, false, false, false, false, false,
          false, false, false, false, false, false, false, false, false],
        lengthOfRemoteVideo: 0,
        enableCamera: true,
        enableMic: true
      };
    },
    mounted() {
    },
    methods: {
      toggleCamera() {
        this.enableCamera = !this.enableCamera;
        zg.enableCamera(this.enableCamera);
      },
      toggleMic() {
        this.enableMic = !this.enableMic;
        zg.enableMicrophone(this.enableMic);
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

      image {
        width: 30px;
        height: 53px;
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

    image {
      width: 50px;
      height: 50px;
    }
  }
</style>
