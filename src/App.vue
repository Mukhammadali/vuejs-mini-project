<template>
  <div id="app">
    <div class="container d-flex flex-column align-items-center">
      <Header />
      <router-view />
    </div>
  </div>
</template>

<script>

import Header from './components/Header'

export default {
  name: 'app',
  components: {
    Header
  },
  methods: {
    onScreenResolutionChange(){
      if(window.innerWidth <= 750) {
        this.$store.commit('setIsMobile', true)
      } else {
        this.$store.commit('setIsMobile', false)
      }
    }
  },
  mounted(){
    this.$nextTick(()=>{
      window.addEventListener('resize', this.onScreenResolutionChange)
    })
  },
  created(){
    this.onScreenResolutionChange();
  }
}
</script>

<style>
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  .text-responsive {
    /* font-size: calc(100% + 1vw - 1vmin); */
    font-size: calc(0.5vw + 1vmin);
  }
  

  @media screen and (max-width: 700px) {
    .text-responsive {
      /* font-size: calc(100% + 1vw - 1vmin); */
      font-size: calc(0.75vw + 1vh + 1vmin);
    }
  }
</style>
