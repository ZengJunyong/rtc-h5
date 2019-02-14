<template>
    <div class="container">
        <div class="flex-center logo">
            <img src="static/logo.png" alt="">
        </div>
        <div class="flex">
            <div>
                <div>
                    <h2>加入一场会议</h2>
                    <input type="number" v-model="room" placeholder="会议编号" required>
                    <p :class="validate?'':'error'">会议编号是6位数字</p>
                    <button @click="joinRoom">加入</button>
                </div>
            </div>
            <div>
                <div>
                    <h2>发起一场会议</h2>
                    <div class="radio">
                        <input type="radio" id="open" value="1" v-model="video">
                        <label for="open">视频开启</label>
                    </div>
                    <div class="radio">
                        <input type="radio" id="close" value="0" v-model="video">
                        <label for="close">视频关闭</label>
                    </div>
                    <button @click="createRoom">发起</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  const api = require("../config/api");

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
        while (1) { // TODO:
          room = Math.floor(Math.random() * 1000000);
          if (room > 100000) { // 生成一个6位数的房号，且该房间号未使用，否则重新生成一个房间号
            let res = await this.$http.get(`${api.url}/conference/isRoomExist`, { params: { roomID: room } });
            if (!res.data) {
              break;
            }
          }
        }
        this.$http.post(`${api.url}/conference/addRoom`, { roomID: room, userID: api.userID });
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
    .container {
        height: 100%;
        background-color: #ffffff;
        background-image: url("https://www.transparenttextures.com/patterns/p5.png");
    }

    .logo {
        padding: 15px 0 60px 0;
    }

    .flex {
        display: flex;

        > div {
            flex-grow: 1;
            padding: 40px 0;
            text-align: center;

            &:first-child {
                border-right: 1px solid #d1d1d1;
            }

            > div {
                width: 200px;
                margin: auto;
                text-align: left;

                h2 {
                    font-size: 28px;
                    padding-bottom: 25px;
                }

                p {
                    color: gray;
                    padding: 10px 0 20px 0;
                }

                p.error {
                    color: red;
                }

                .radio {
                    padding-bottom: 21px;

                    label {
                        margin-left: 5px;
                    }
                }

                input[type="number"] {
                    display: block;
                    width: 100%;
                    font-size: 18px;
                    line-height: 1.5;
                    padding: 5px;
                }

                button {
                    background: #0065f2;
                    color: white;
                    width: 100px;
                    padding: 8px;
                }
            }
        }
    }
</style>
