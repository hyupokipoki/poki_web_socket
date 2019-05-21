import Vue from 'vue';
import io from 'socket.io-client';

const socket = io('http://211.51.76.18:8082');



const SocketPlugin = {
  install(vue) {
    vue.mixin({
    });
    vue.prototype.$sendMessage = ($payload) => {
      socket.emit('message', {
        msg: $payload.msg,
        name: $payload.name,
      });    };
    // 인스턴스 메소드 추가
    vue.prototype.$socket = socket;
  },
};
Vue.use(SocketPlugin);