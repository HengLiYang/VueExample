<template>
  <div id="app" ref="app">
    <Header></Header>
    <Container></Container>
    <Footer></Footer>
  </div>
</template>
<script>
  import './assets/css/common.css'
  import Header from './components/common/Header'
  import Container from './components/common/Container.vue'
  import Footer from './components/common/Footer.vue'

  export default {
    name: 'app',
    components: {
      Header,
      Container,
      Footer
    },
    mounted () {
    },
    methods: {}
  }
</script>
<style type="text/css">
  .main-container {
    width: 100%;
    min-width: 800px;
    display: flex;
    padding: 24px 150px;
    background: #f2f2f2;
  }

  .el-footer {
    width: 100%;
    height: 200px !important;
    padding: 0;
  }

  .footer {
    height: 200px;
    padding: 0;
    background: #f2f2f2;
  }

  .el-header {
    padding: 0;
  }

  .el-container {
    width: 100%;
    min-width: 1200px;
    min-height: 2400px;
  }
</style>
