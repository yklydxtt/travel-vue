<template>
<div>
    <home-header :list="headerlist"></home-header>
    <save-list :list="savelist"></save-list>
</div>
</template>

<script>
import axios from 'axios'
import HomeHeader from './components/Header/Header'
import SaveList from './components/SaveList/savelist'
export default {
  name: 'home',
  components:{
      HomeHeader,
      SaveList
  },
  data:function(){
    return {
      headerlist:[],
      savelist:[]
    }
  },
  mounted: function () {
    axios.get('https://www.fastmock.site/mock/f533d8ffdf3d124f3adae55f3cf30660/api/api/getHeader').then((data) => {
      this.headerlist = data.data.data || []
    })
    axios.get('https://www.fastmock.site/mock/f533d8ffdf3d124f3adae55f3cf30660/api/saveList').then((data) => {
      this.savelist = data.data.data || []
    })
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>