<template>
  <div class="saveList">
    <div class="title">
      <a class="today">今日特惠</a>
      <a class="more">
        更多特惠
        <img src="./more.png" class="moreImg" />
      </a>
    </div>
    <div class="viewlist">
      <div class="viewitem" v-for="item of list" :key="item.title">
        <img :src="item.img" class="viewimg"/>
        <div class="viewtitle">{{item.title}}</div>
        <div class="viewmsg">{{item.msg}}</div>
        <div class="price">￥{{item.price}}<span class="qi">起</span></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'savelist',
  props: ['list'],
}
</script>
<style scoped lang="less">
.saveList {
  margin: 0.5rem 0.7rem 0;
  .title {
    display: flex;
    justify-content: space-between;
    font-size: 0.75rem;
    .today {
      display: flex;
      color: #fff;
      background-color: #17c0c8;
      border-radius: 3px;
      height: 2rem;
      justify-content: center;
      align-items: center;
      width: 4.75rem;
    }
    .more {
      color: #757575;
      display: flex;
      align-items: center;
      .moreImg {
        height: 1rem;
        margin-left: 0.3125rem;
      }
    }
  }
  .viewlist{
    margin: .18rem 0;
    .viewitem{
      width: 48%;
      display: inline-block;
      margin: .3125rem 1%;
      div{
        margin: .3125rem 0;
      }
      .viewimg{
        width: 100%;
        border-radius: .3125rem;
      }
      .viewtitle{
        font-size: .875rem;
      }
      .viewmsg{
        font-size: .8125rem;
        color: #555;
        overflow:hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        width: 100%;
      }
      .price{
        color: #ff7400;
        font-weight: bold;
        font-size: 1.125rem;
        .qi{
          font-weight: 400;
          font-size: .875rem;
        }
      }
    }
  }
}
</style>