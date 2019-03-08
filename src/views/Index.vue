<template>
    <div class="center">
        <div class="container">
            <div id="div1"></div>
            <div class="flex-center logo">
                <iframe src="static/logo.svg" width="65" height="66">
                </iframe>
            </div>

            <div class="flex">
                <div>
                    <div>
                        <div class="btn _1">
                            加入一场会议
                            <div class="attachment"></div>
                        </div>
                        <input type="text" v-model="room" placeholder="会议编号" required>
                        <p :class="validate?'':'error'">会议编号是6位数字</p>
                        <div @click="joinRoom" class="btn pointer">加入</div>
                    </div>
                </div>
                <div>
                    <div>
                        <div class="btn _2">
                            发起一场会议
                            <div class="attachment"></div>
                        </div>
                        <div class="radio" style="margin-top: 23px;">
                            <label class="radio-container">
                                视频开启
                                <input type="radio" value="1" v-model="video">
                                <span class="checkmark"></span>
                            </label>
                        </div>
                        <div class="radio" style="margin: 15px 0 23px 0;">
                            <label class="radio-container">
                                视频关闭
                                <input type="radio" value="0" v-model="video">
                                <span class="checkmark"></span>
                            </label>
                        </div>
                        <div class="btn pointer" @click="createRoom">发起</div>
                    </div>
                </div>
            </div>
            <div class="flex-center">
                <div class="footer">
                    优客工场·U会议
                    <br>UCOMMUNE
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  const api = require("../config/api.json");

  export default {
    name: "index",
    data() {
      return {
        room: "",
        video: 1,
        validate: true
      };
    },
    computed: {
      isSafariOnIphone() {
        let ua = window.navigator.userAgent;
        return ua.indexOf("Safari") != -1 && ua.indexOf("Version") != -1 && ua.indexOf("iPhone") != -1;
      }
    },
    methods: {
      async joinRoom() {
        let reg = /^^[1-9]\d{5}$$/; // 6位数字的正则表达式
        if (reg.test(this.room)) {
          let res = await this.$http.get(`${api.url}/conference/isRoomExist`, { params: { roomID: this.room } });
          if (!res.data) {
            return alert(`该会议编号（${this.room}）不存在，请检查一下是否有误？`);
          }
          this.$router.push({
            name: "room",
            query: { room: this.room },
            params: { isSafariOnIphone: this.isSafariOnIphone }
          });
        } else {
          this.validate = false;
        }
      },
      async createRoom() {
        let room;
        let loop = true;
        while (loop) {
          room = Math.floor(Math.random() * 1000000);
          if (room > 100000) { // 生成一个6位数的房号，且该房间号未使用，否则重新生成一个房间号
            let res = await this.$http.get(`${api.url}/conference/isRoomExist`, { params: { roomID: room } });
            if (!res.data) {
              loop = false;
            }
          }
        }
        this.$http.post(`${api.url}/conference/addRoom`, { roomID: room, userID: 1 });
        this.$router.push({
          name: "room",
          query: { room, video: this.video },
          params: { isSafariOnIphone: this.isSafariOnIphone }
        });
      }
    }
  };
</script>

<style scoped lang="scss">
    .center {
        text-align: center;
    }

    iframe {
        border: none
    }

    .container {
        margin: auto;
        height: 100%;
        min-width: 600px;
        max-width: 1366px;
    }

    .logo {
        padding: 36px 0 10px 0;
    }

    .btn {
        background: #FFCC66;
        color: #404040;
        border-radius: 7px;
        padding: 8px;
        width: 100%;
        font-size: 19px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }

    .pointer {
        cursor: pointer;
        height: 52px;
    }

    ._1 {
        border-bottom-left-radius: 0;

        /*https://www.cnblogs.com/v-weiwang/p/5057588.html 画三角形*/
        .attachment {
            position: absolute;
            bottom: 0;
            left: -10px;
            border-style: solid;
            border-width: 0px 0px 10px 10px;
            border-color: transparent transparent #FFCC66 transparent;
        }
    }

    ._2 {
        border-bottom-right-radius: 0;

        .attachment {
            position: absolute;
            bottom: 0;
            right: -10px;
            border-style: solid;
            border-width: 0px 10px 10px 0px;
            border-color: transparent transparent #FFCC66 transparent;
        }
    }

    .flex {
        display: flex;
        background: url("https://zengjunyong.github.io/rtc-h5/dist/static/line.png") center no-repeat;

        > div {
            height: 436px;
            flex-grow: 1;
            padding: 112px 0 0 0;
            text-align: center;

            > div {
                width: 206px;
                margin: auto;
                text-align: left;

                p {
                    color: #999999;
                    padding: 10px 0 20px 0;
                }

                p.error {
                    color: red;
                }

                .radio {
                    background: rgba(204, 204, 204, 0.3);
                    font-size: 15px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 7px 28px;
                    border-radius: 5px;
                    color: #666666;

                    label {
                        flex: 1;
                    }
                }

                input[type="text"] {
                    border: none;
                    height: 51px;
                    background: rgba(204, 204, 204, 0.3);
                    border-radius: 5px;
                    display: block;
                    width: 100%;
                    font-size: 19px;
                    padding-left: 12px;
                    margin-top: 30px;
                    outline: none;
                }
            }
        }
    }

    .footer {
        width: 458px;
        border-top: 1px solid rgba(153, 153, 153, 0.42);
        padding: 15px 0 30px 0;
        margin-top: 50px;
        font-size: 16px;
        font-weight: 400;
        color: rgba(153, 153, 153, 0.86);
        line-height: 22px;
    }

    /*https: //www.w3schools.com/howto/tryit.asp?filename=tryhow_css_custom_radio*/
    /* The container */
    .radio-container {
        display: block;
        position: relative;
        cursor: pointer;
        user-select: none;
    }

    /* Hide the browser's default radio button */
    .radio-container input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
    }

    /* Create a custom radio button */
    .checkmark {
        position: absolute;
        top: 3px;
        right: 0;
        height: 16px;
        width: 16px;
        background-color: white;
        border-radius: 50%;
        border: 1px solid #797979;
    }

    /* On mouse-over, add a grey background color */
    .radio-container:hover input ~ .checkmark {
        background-color: #ccc;
    }

    /* When the radio button is checked, add a blue background */
    .radio-container input:checked ~ .checkmark {
        background-color: #797979;
    }

    /* Create the indicator (the dot/circle - hidden when not checked) */
    .checkmark:after {
        content: "";
        position: absolute;
        display: none;
    }

    /* Show the indicator (dot/circle) when checked */
    .radio-container input:checked ~ .checkmark:after {
        display: block;
    }

    /* Style the indicator (dot/circle) */
    .radio-container .checkmark:after {
        top: 4px;
        left: 4px;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: white;
    }
</style>
