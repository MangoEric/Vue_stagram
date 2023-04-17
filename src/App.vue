<template>
  <div class="header">
    <ul class="header-button-left">
      <li v-if="step == 1 || step == 2">Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="step == 1" @click="step++" >Next</li>
      <li v-if="step == 2" @click="publish">Post</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>
  <h4>{{ $store.state.name }}</h4>

  <Container :게시물="게시물" :step="step" :이미지="이미지" @write="작성한글 = $event"/>
  <div class="more-container">
    <button @click="more" class="button more">더보기</button>
  </div>
  <div class="footer">
    <ul class="footer-button-plus">
      <input @change="upload" type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
 </div>
  
</template>

<script>
import Container from './components/ContainerCom.vue'
import postdata from './assets/postdata.js'
import axios from 'axios'

export default {
  name: 'App',
  data(){
    return{
      게시물 : postdata,
      더보기 : 0,
      step : 0,
      이미지 : '',
      작성한글 : '',
      선택한필터 : '',
    }
  },
  mounted(){
    this.emitter.on('박스클릭함',(a)=>{
      this.선택한필터 = a;
    })
  },
  components: {
    Container,
  },
  methods :{
    more(){
      axios.get(`https://codingapple1.github.io/vue/more${this.더보기}.json`)
      .then((결과)=>{
        this.게시물.push(결과.data);
        this.더보기++;
      })
    },
    upload(e){
      let 파일 = e.target.files;
      // console.log(파일[0].type);
      let url = URL.createObjectURL(파일[0])
      console.log(url)
      this.이미지 = url;
      this.step++;

    },
    publish(){
      var 내게시물 = {
        name: "Eric",
        userImage: "https://placeimg.com/100/100/arch",
        postImage: this.이미지,
        likes: 0,
        date: "May 15",
        liked: false,
        content: this.작성한글,
        filter: this.선택한필터
      }
      this.게시물.unshift(내게시물);
      this.step = 0;
    }
  }
}
</script>

<style>
body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
.button {
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 10px 12px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
}

.more {
  color: black;
  border-radius: 10px;
  background-color: #e7e7e7;
}

.more:hover {
  background-color: white;
  border-radius: 10px;
  border: 2px solid #e7e7e7;
}
.more-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
