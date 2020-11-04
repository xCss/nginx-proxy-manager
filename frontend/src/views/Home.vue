<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import {setup,onMounted, getCurrentInstance}from 'vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  setup(ctx){
    onMounted(()=>{
      let vm = this
      console.log(getCurrentInstance())
    })
  }
}
</script>
