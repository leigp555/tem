<script lang="ts" setup>
import axios from 'axios';
import { computed, watchEffect } from 'vue';
import { mapState } from 'vuex';
import Hello from '@/components/HelloWorld.vue';
// const fn = async () => {
//   const { data } = await axios.get(import.meta.env.VITE_BASE_API);
//   console.log(data);
// };
// fn();
// window.alert(import.meta.env.VITE_BASE_API);
import { useMyStore } from '@/store';
import moduleA from '@/store/module/moduleA';

const store = useMyStore();
const storeState = mapState(['count', 'name']);
const result = {};
Object.keys(storeState).forEach((key) => {
  result[key] = computed(storeState[key].bind({ $store: store }));
});
const { count, name } = { ...result };
// getters
const getNum = computed(() => store.getters.getNum(10));
computed(() => store.getters.getNum(10));
computed(() => store.getters.getNum(10));
console.log(`getNum${getNum.value}`);

watchEffect(() => {
  console.log(count.value, name.value);
  console.log(store.getters.getGoods);
  console.log(store.getters.getX);
  console.log('=====');
  console.log(store.state.car.name);
  console.log(store.state.produce.name);
});
console.log(store);

store.dispatch('xxA', 'AAAAAAAAAA');
store.dispatch('xxB', 'BBBBBBBBB');
console.log('----');
const aa = computed(() => store.getters['car/getX']);
console.log(aa.value);
console.log(store);
</script>

<template>
  <button @click="store.dispatch('addAction',1)">
    +1
  </button>

  <div class="test">
    <ol>
      <li>
        <router-link to="/login">
          登录
        </router-link>
      </li>
      <li>
        <router-link to="/register">
          注册
        </router-link>
      </li>
    </ol>
    <span>xxx</span>
    <!--    <Hello msg="xxx" />-->
    <!--    <img src="../src/assets/test.jpg" alt="">-->
  </div>
<!--  <router-view />-->
</template>
<style lang="scss" scoped>
.test{
  color: red;
}
</style>
