<template>
  <div class="chat-container" v-auto-bottom="msgs">
    <div class="poki-chat-container">
      <img src="../../assets/poki_bot.png" alt=""><span class="poki-chat">안녕! {{userName}}</span>
    </div>

    <transition-group name="list">
      <div v-for="(msg,index) in msgs" v-bind:key="index">
        <div class="user-chat-container" v-if="msg.fromUid !== 'poki'">
          <span class="user-chat">{{msg.message}}</span>
        </div>
        <div class="poki-chat-container" v-if="msg.fromUid == 'poki'">
          <img src="../../assets/poki_bot.png" alt=""><span class="poki-chat">{{msg.message}}</span>
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "MessageList",
  props: ["msgs", "userName"]
};
</script>

<style scoped>

.chat-container {
  /* background-color: rgb(248, 235, 230); */
  background-color: rgb(254, 242, 204);

  border-left: 1px solid rgb(255, 210, 84);
  border-right: 1px solid rgb(255, 210, 84);
}

.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(30px);
}

.user-chat-container {
  margin-top: 8px;
  display: flex;
  flex-direction: row-reverse;
  margin-right: 8px;
}

.poki-chat, .user-chat {
  padding: 16px;
  border-radius: 0.4em;
  position: relative;
  max-width: 60%;
  line-height:120%;
  /* color: white; */
}

.user-chat {
  margin-right: 8px;
    background: rgb(255, 210, 84);
}


.user-chat:after {
  content: "";
  position: absolute;
  right: 0;
  top: 50%;
  width: 0;
  height: 0;
  border: 10px solid transparent;
  border-left-color: rgb(255, 210, 84);
  border-right: 0;
  border-bottom: 0;
  margin-top: -5px;
  margin-right: -10px;
}

.poki-chat-container {
  margin-top: 8px;
  display: flex;
  flex-direction: row;

  margin-left: 8px;
}
.poki-chat-container img{
  width: 50px;
  height: 50px;
  margin-top: auto;
  margin-bottom: auto;
  margin-right: 8px;
}
.poki-chat {
  margin-left: 8px;
  background-color: rgb(219, 219, 219);
  /* border-image: url('../../assets/poki-chat.png') 50 fill ;;
  border-image-width:15px;
  border-image-outset: 9px;
  background-size: 100%;
  background-position: left center; */
}

.poki-chat:after {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  width: 0;
  height: 0;
  border: 10px solid transparent;
  border-right-color: rgb(219, 219, 219);
  border-left: 0;
  border-bottom: 0;
  margin-top: -5px;
  margin-left: -10px;
}
</style>