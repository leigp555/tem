interface dataType{
  name:string
}
const moduleB = {
  namespace: true,
  state: ():dataType => ({ name: 'car' }),
  mutations: { },
  actions: {
    xxB(ctx, payload:string) {
      console.log(payload);
    },
  },
  getters: {
    getX(state:dataType) {
      return state.name;
    },
  },
};

export default moduleB;
