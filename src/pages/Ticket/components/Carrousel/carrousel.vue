<template>
  <swiper ref="mySwiper" :options="swiperOptions">
    <swiper-slide><img src="https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20203/7848b373c2e61f6638c35cf2e559e3da.jpg_750x200_a135a825.jpg"/></swiper-slide>
    <swiper-slide><img src="https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20204/e25a520f999e20230cb6645daa619007.jpg_750x200_49cd9de5.jpg"/></swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  name: 'carrousel',
  data: function () {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination'
        },
        autoplay: true
        // Some Swiper option/callback...
      }
    }
  },
  computed: {
    swiper: function () {
      return this.$refs.mySwiper.$swiper
    }
  },
  mounted: function () {
    console.log('Current Swiper instance object', this.swiper)
    this.swiper.slideTo(0, 1000, false)
  }
}
</script>
<style scoped lang="less">
img{
  width: 100%;
}
</style>