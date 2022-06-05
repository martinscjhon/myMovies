<template>
  <div id="loading">
    <img src="../assets/loading.gif" class="img-loading"/>
    <h4>Carregando...</h4>
  </div>
</template>

<script>
export default {
  name: "LoadingComponent"
}
</script>

<style scoped>
  .loading .img-loading{
    width: 280px;
    height: 200px;
  }

  .loading h4{
    margin-top: -25px;
  }
</style>

