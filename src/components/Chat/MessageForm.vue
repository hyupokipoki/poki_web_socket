<template>
  <div class="inner-wrap">
    <form id="input-form" @submit.prevent="submitMessageFunc">
      <input v-model="msg" label="chat" placeholder="보낼 메세지를 입력하세요." solo>
      <button id="input-send-btn">
        <img src="../../assets/send_btn.png" alt>
      </button>
    </form>
    <div class="banner">
      <span>Powered by POKI POKI</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "MessageForm",
  data() {
    return {
      msg: ""
    };
  },
  methods: {
    submitMessageFunc() {
      if (this.msg.length === 0) return false;
      this.$emit("submitMessage", this.msg);
      this.msg = "";
      return true;
    }
  }
};
</script>

<style scoped>
.inner-wrap {
  background-color: rgb(254, 242, 204);
  /* background-color: white; */

  border-left: 1px solid rgb(255, 210, 84);
  border-right: 1px solid rgb(255, 210, 84);
}

#input-form {
  display: flex;
  border-bottom: 1px solid #000;
  padding: 8px;
  background-color: rgb(254, 242, 204);
    background-color: white;

  border-radius: 10px;
}

#input-form input {
  flex: 1;
  border: none;
}

#input-send-btn {
  background: none;
  border: none;
}

#input-send-btn img {
  width: 16px;
}

#input-send-btn:active {
  width: 32px;
}

.banner {
  padding: 16px;
  display: flex;
  justify-content: center;
}

</style>