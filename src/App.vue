<template>
   <Header />
        <br/>
        <h1 className='flex'>E então, você está pronto<br/>para escolher seu lado?</h1>
        <a class="button" href="https://discord.gg/webbcenter" target="_blank" style="--clr:#1e9bff"><span>ANDRÔMEDA</span><i></i></a>
        <a class="button" href="https://discord.gg/webbcenter" target="_blank" style="--clr:#ff1867"><span>BELLATRIX</span><i></i></a>
  
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>