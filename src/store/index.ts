import { InjectionKey } from 'vue';
import { createStore, useStore as baseUseStore, Store } from 'vuex';
import moduleA from '@/store/module/moduleA';
import moduleB from '@/store/module/moduleB';

export interface State {
    count: number,
    name:string,
    arr:number[]
}

// eslint-disable-next-line symbol-description
export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state() {
    return {
      count: 0,
      name: 'lgp',
      arr: [1, 2, 3, 4, 5, 6],
    };
  },
  getters: {
    sortArr(state) {
      return state.arr.sort((a, b) => b - a);
    },
    getNum: (state, getters) => (maxNum:number) => {
      console.log('执行了');
      const max = maxNum || Math.max(...state.arr);
      const arr1 = getters.sortArr as number[];
      return arr1.map((item) => item * max);
    },
  },
  mutations: {
    add(state, payload) {
      state.count += payload;
    },
  },
  actions: {
    addAction(ctx, payload) {
      ctx.commit('add', payload);
    },
  },
  modules: {
    produce: moduleA,
    car: moduleB,
  },
});

// 定义自己的 `useStore` 组合式函数
export function useMyStore() {
  return baseUseStore(key);
}
