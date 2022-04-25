interface dataType{
  name:string
}

const state = ():dataType => ({ name: 'produce' });
const getters = {
  getGoods(state:dataType) {
    return state.name;
  },
};
const mutations = {

};
const actions = {
  xxA(ctx, payload:string) {
    console.log(payload);
  },
};

const moduleA = {
  namespace: true,
  state,
  getters,
  mutations,
  actions,
};
export default moduleA;
