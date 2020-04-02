<template>
  <div id="Ticket">
    <search></search>
    <carrousel></carrousel>
  </div>
</template>

<script>
import Search from './components/Search/search'
import Carrousel from './components/Carrousel/carrousel'
export default {
  name: 'Ticket',
  components:{
    Search,
    Carrousel
  }
}
</script>

<style>
</style>