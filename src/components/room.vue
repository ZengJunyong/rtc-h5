<template>
  <div class="container flex">
    <div class="room">
      <div class="video flex-center">
        <video v-show="localStream" id="localVideo" muted autoplay playsinline></video>
        <img v-show="!localStream" src="https://miniprogram-1252463788.file.myqcloud.com/roomset_1.png" alt="">
      </div>
      <div class="video flex-center">
        <video v-show="remoteStream" id="remoteVideo" autoplay playsinline></video>
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
  export default {
    name: "room",
    data() {
      return {
        room: "",
        localStream: false,
        remoteStream: false
      };
    },
    mounted() {
      // this.initRTC();
    },
    methods: {
      initRTC() {
        let RTC = new WebRTCAPI({
          "userId": "Web_trtc_01",
          "userSig": "eJxlj1FPgzAYRd-5FYTXGdOylolvyIagbG5iZPOlYVDwk6zUrmxM43834hJJvK-n5N7cT8M0TespTi6zPG9aoZk*SW6Z16aFrIs-KCUULNNsrIp-kHcSFGdZqbnqIaaU2ggNHSi40FDC2Uj5lmmlc4bwQNoXNeuXflsIQnjiTKg7VKDq4Xy28aOV75RtHHR1E*r7UUUjiiNHCO8u3B385*pDhsvHiuKXcD5KvejVW9JFAnEaJ6RbHetbMaM37cO6Csibv11s7GkwBVlD*r4*xYNJDTt*vkUc4rpXNhnQA1d7aEQv2AhTbI-RTyzjy-gGYDJeuA__",
          "sdkAppId": 1400176759
        });
        RTC.getLocalStream({
          video: true,
          audio: true,
          attributes: {
            // width: 640,
            // height: 480,
            // frameRate: 20
          }
        }, (info) => {
          let stream = info.stream;
          //初始化完成后调用进房接口
          RTC.enterRoom({
            roomid: 456789
          }, () => {
            //进房成功，音视频推流
            RTC.startRTC({
              role: "ed640",   //画面设定的配置集名 （见控制台 - 画面设定 )
              stream: stream
            });
          }, () => {
          });
        }, (error) => {
          console.error(error);
        });
        //本地流 新增
        RTC.on("onLocalStreamAdd", (data) => {
          console.log("onLocalStreamAdd");
          if (data && data.stream) {
            this.localStream = true;
            document.querySelector("#localVideo").srcObject = data.stream;
          }
        });
        //远端流 新增/更新
        RTC.on("onRemoteStreamUpdate", (data) => {
          console.log("onRemoteStreamUpdate");
          if (data && data.stream) {
            this.remoteStream = true;
            document.querySelector("#remoteVideo").srcObject = data.stream;
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
