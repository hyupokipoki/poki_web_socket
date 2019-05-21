<template>
  <div class="inner-wrap">
    <Message-Title/>
    <Message-List :userName="userName" :msgs="datas" class="msg-list"></Message-List>
    <Message-Form v-on:submitMessage="sendMessage" class="msg-form"></Message-Form>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import MessageTitle from "@/components/Chat/MessageTitle.vue";
import MessageList from "@/components/Chat/MessageList.vue";
import MessageForm from "@/components/Chat/MessageForm.vue";
import Constant from "@/Constant";
export default {
  name: "ChatRoom",
  data() {
    return {
      datas: [],
      uid: this.getRandomId(),
      userName: ""
    };
  },
  components: {
    "Message-Title": MessageTitle,
    "Message-List": MessageList,
    "Message-Form": MessageForm
  },
  computed: {
    ...mapState({
      msgDatas: state => state.socket.msgDatas
    })
  },
  created() {
    const $ths = this;
    $ths.userName = $ths.$route.params.userName;
    this.$socket.on("message", data => {
      console.log(data.message);
      console.log(data.fromUid);

      // this.pushMsgData(data.message);
      $ths.datas.push(data);
    });
  },
  methods: {
    ...mapMutations({
      pushMsgData: Constant.PUSH_MSG_DATA
    }),
    sendMessage(msg) {
      // this.datas.push(msg);
      // this.pushMsgData(msg);
      this.$sendMessage({
        // name: this.$route.params.username,
        name: this.uid,
        // name: this.userName,
        msg: msg
      });
    },
    getRandomId: function() {
      var randLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
      var uniqid = randLetter + Date.now();
      return uniqid;
    }
  }
};
</script>

<style scoped>
.inner-wrap {
  display: flex;
  flex-direction: column;
  /* background-color: #fff; */
}

.msg-list {
  flex: 1;
  overflow-x: hidden;
}

.msg-form {
  padding: 8px;
}
/* .msg-form {
  bottom: -28px;
  position: absolute;
  left: 0;
  right: 0;
}
.msg-list {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 60px;
  overflow-x: scroll;
} */
</style>