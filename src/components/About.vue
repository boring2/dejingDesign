<template>
  <div class="about">
    <div class="description">
      DE.J 為業界最具創新的品牌設計公司之一，協助全球知名品牌及各種產業客戶的策略及設計需求。VOCUIS 設於台灣和上海，致力於提供每個客戶完善的營銷諮詢、策略溝通和有效的項目設計，自2000年以來我們的客戶群包括全球中小企業主、零售商、製造商和國際跨國公司。
    </div>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.about {
  background: url("../assets/about.png") center;
  height: calc(100vh - 50px);
}
.description {
  text-align: center;
  line-height: 2;
  padding: 120px 10% 0 10%;
  color: #474440;
  font-size: 15px;
}
</style>
