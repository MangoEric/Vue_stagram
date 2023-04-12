<template>
  <div>
    <Post
      v-for="(a, i) in 게시물" :key="i"
     :게시물="게시물[i]" />
</div>
</template>

<script>
import Post from './PostCom.vue';

export default {
  components :{
    Post,
  },
  props :{
    게시물 : Array,
  }
}
</script>

<style>

</style>