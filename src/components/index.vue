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
          <p>会议编号是6位数字</p>
          <button @click="enterRoom">加入</button>
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
          <button>发起</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        room: "",
        video: 1
      };
    },
    methods: {
      enterRoom() {
        let reg = /^^[1-9]\d{5}$$/; // 6位数字的正则表达式
        if (reg.test(this.room)) {
          this.$router.push({ name: "room", query: { room: this.room } });
        } else {
          alert("会议编号是6位数字");
        }
      }
    }
  };
</script>

<style scoped lang="less">
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

        .radio {
          padding-bottom: 21px;
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
