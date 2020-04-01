<template>
  <div>
    <div class="header">
      <div class="headerline">
        <template v-for="(item,index) in list">
          <router-link to="ticket" class="headerlink"  :key="item.title" :class="index>4?'img-sm':null">
            <div class="headerimg">
              <img :src="item.src" />
            </div>
            <div class="headertitle">{{item.title}}</div>
          </router-link>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomeHeader',
  props:["list"]
}
</script>
<style scoped lang="less">
.header {
  margin: 0.5rem 0.07rem 0;
  .headerline {
    .headerlink {
      display: inline-block;
      width: 20%;
      text-align: center;
      margin: 0.07rem 0 0.7rem;
      text-decoration: none;
      .headerimg {
        width: 70%;
        height: 0;
        padding-bottom: 70%;
        display: block;
        margin: 0 auto 0.05rem;
        img {
          width: 100%;
        }
      }
      .headertitle {
        font-size: 0.12rem;
        color: #333;
      }
    }
  }
  .img-sm {
      .headerimg {
        width: 40% !important;
        padding-bottom: 40% !important;
      }
  }
}
</style>