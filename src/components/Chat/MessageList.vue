<template>
  <div v-auto-bottom="msgs">
    <transition-group name="list" >
      <div v-for="(msg,index) in msgs" v-bind:key="index">
            <!-- <span>{{msg.from.name}}</span> -->
            <span>{{msg.message}}</span>
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: 'MessageList',
  props: ['msgs'],
};
</script>

<style scoped>
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(30px);
}
</style>