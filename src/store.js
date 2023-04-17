import { createStore } from 'vuex'

const store = createStore({
  state(){
    return {
      name : 'ko',
      age : 20,
    }
  },
  mutations :{
    chageName(state){
      state.name = 'wow'
    },
    addAge(state){
      state.age++
    },
    ten(state, data){
      state.age += data
    }
  }
})

export default store