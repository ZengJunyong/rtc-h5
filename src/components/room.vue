<template>
  <div class="container flex">
    <div class="room">
      <div class="video flex-center">1</div>
      <div class="video flex-center">2</div>
      <div class="video flex-center">3</div>
      <div class="video flex-center">4</div>
    </div>
    <div class="bottom">
      btn
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
    background-color: #ffffff;
    background-image: url("https://www.transparenttextures.com/patterns/az-subtle.png");
    padding: 12px 12px 0 12px;
    display: flex;
    flex-wrap: wrap;

    .video {
      width: calc(50% - 4px);
      background: yellowgreen;
      margin-bottom: 6px;

      &:nth-child(odd) {
        margin-right: 2px;
      }

      &:nth-child(even) {
        margin-left: 2px;
      }
    }
  }

  .bottom {
    height: 80px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
</style>
