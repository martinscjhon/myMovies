<template>
  <div v-if="loading" class="loading">
   <Loading />
  </div>

  <div id="home" v-else>
    <div class="list-filme">
      <article class="filme" v-for="filme in filmes" :key="filme.id">
        <strong>{{filme.nome}}</strong>
        <img :src="filme.foto" :alt="filme.nome"/>
        <router-link :to="`/filme/${filme.id}`">Acessar</router-link>
      </article>
    </div>
  </div>
</template>

<script>
import { api } from '../services/api';
import Loading from '../components/Loading.vue';

export default {
    name: "HomeComponent",
    data() {
      return {
        filmes: [],
        loading: true
      };
    },
    components: { 
      Loading
    },
    async created() {
      const response = await api.get("?api=filmes");
      this.filmes = response.data;
      this.loading = false;
    }
}
</script>

<style scoped>
  .loading{
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    height: calc(100vh - 80px);    
  }  

  #home{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 800px;
  }

  .list-filmes{
    margin:15px;
  }

  .list-filme article{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;    
    margin: 15px;
    padding: 15px; 
    border-radius: 5px;
  }

  .list-filme strong{
    padding-bottom: 15px;
    font-size: 20px;
  }

  img{
    max-height: 350px;
    width: 900px;  
  }
  
  .list-filme article a{
    text-decoration: none;
    color: #FFF;
    font-size: 25px;
    background-color: brown;
    width: 100%;
    height: 40px;
    margin-top: -30px;
    text-align: center;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px; 
  }
</style>