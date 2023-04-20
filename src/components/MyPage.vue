<template>
  <div style="padding : 10px">
    <h4>팔로워</h4>
    <input placeholder="🔍" />
    <div class="post-header" v-for="(a, i) in follower" :key="i">
      <div class="profile" :style="`background-image:url(${a.image})`"></div>
      <span class="profile-name">{{ a.name }}</span>
  </div>
</div>
</template>

<script>
import { computed, onMounted, reactive, ref, toRefs, watch } from 'vue';
import axios from 'axios';
import { useStore } from 'vuex'

export default {
  name : 'MyPage',
  props : {
    one : Number,
  }
  ,
  setup (props)  {
    //보통 array, object 집어 넣음
    let test = reactive({name : 'ko'})
    test;
    // 그 나머지 자료형 집어 넣음
    let follower = ref([]);

    let {one} = toRefs(props);
    console.log(one.value)
    
    watch(one , ()=>{
      //변경될때마다 반응하는 함수
    })
    let 결과 = computed( ()=>{ return follower.value.length })
    console.log(결과.value)

    let store = useStore();
    console.log(store.state.name)

    onMounted(()=>{
      axios.get('/follower.json').then((a)=>{
        follower.value = a.data
      })
    })
    return { follower }
  },
  data () {
    return {

    }
  },
};
</script>

<style scoped>

</style>