<template>
  <Header />
  <br/>
  <h1 class="title">
    <span class="text">Bem-vindo ao</span>
    <br>
    <span class="title">Webb Center</span>
  </h1>
  <h1 className='flex'>E então, você está pronto<br/>para escolher seu lado?</h1>
  <a class="button" href="https://discord.gg/webbcenter" target="_blank" style="--clr:#1e9bff"><span>ANDRÔMEDA</span><i></i></a>
  <a class="button" href="https://discord.gg/webbcenter" target="_blank" style="--clr:#ff002a"><span>BELLATRIX</span><i></i></a>
  
  <section id="characters">
    <div class="characters">
      <!-- oi -->
    </div>
  </section>
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