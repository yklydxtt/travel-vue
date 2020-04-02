<template>
  <div class="search">
    <div class="searchwrap">
      <img src="./back.png" class="back" />
      <div class="input">
        <img src="./search.png" class="searchimg"/>
        输入城市/景点/游玩主题
      </div>
      <router-link to='/city' class="link">
        杭州
        <i class="tri"></i>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'search'
}
</script>
<style scoped lang="less">
.searchwrap {
  background: #00bcd4;
  width: 100%;
  color: #fff;
  height: 2.75rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 14px;
  .back {
    width: 1rem;
  }
  .input {
    width: 16.81rem;
    background: #fff;
    height: 1.875rem;
    border-radius: 0.3125rem;
    display: flex;
    align-items: center;
    color: #e4e7ea;
    input {
      border: none;
      width: 80%;
    }
    .searchimg{
      height: .875rem;
      margin-left: .625rem;
    }
  }
  .tri {
    display: inline-block;
    width: 0;
    height: 0;
    margin-left: .125rem;
    vertical-align: middle;
    border-top: .24rem solid #fff;
    border-right: .24rem solid transparent;
    border-left: .24rem solid transparent;
  }
  .link{
    text-decoration: none;
    color: #fff;
  }
}
</style>