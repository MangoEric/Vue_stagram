import axios from 'axios'
import { createStore } from 'vuex'

const store = createStore({
  state(){
    return {
      name : 'ko',
      age : 20,
      likes : 12,
      좋아요눌렀니 : false,
      more : {},
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
    },
    addLike(state){
      if(state.좋아요눌렀니 == false){
        state.likes++;
        state.좋아요눌렀니 = true;
      }else{
        state.likes--;
        state.좋아요눌렀니 = false;
      }
    },
    setMore(state, data){
      state.more = data
    },
  },
  actions : {
    getData(context){
      axios.get('https://codingapple1.github.io/vue/more0.json')
      .then((a)=>{
        context.commit('setMore',a.data)
      })
    }
  },
})

export default store