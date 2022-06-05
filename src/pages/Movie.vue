<template>
  <div v-if="loading" class="loading">
  <Loading />
  </div>

  <div id="movie" v-else>
    <div class="container">
      <h2>{{filme.nome}}</h2>
      <img :src="filme.foto" :alt="filme.nome" />
      <h3>Sinopse</h3>
      <p>{{filme.sinopse}}</p>
      <div class="buttos">        
        <button class="button">
          <router-link to="/">Ver mais filmes</router-link>
        </button>
        <button class="button" @click="salvarFilme">Salvar</button>        
        <a 
          :href="`https://youtube.com/results?search_query=${filme.nome}`"
          target="_blank"          
        >
          Trailer
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import {api} from "../services/api"
  import Loading from '../components/Loading.vue';

  export default {
  name: "MovieComponent",
  data(){
    return {
      filme: {},
      loading: true
    }
  },
  props: ["id"],
  async created(){
    const response = await api.get(`?api=filmes/${this.id}`)
    this.filme = response.data;
    this.loading = false
  },
  components: { 
    Loading
  },
  methods:{
    salvarFilme(){
      const minhaLista = localStorage.getItem('@meus-filmes'); //get buscar

      let filmes = JSON.parse(minhaLista) || []; //parse => converte em array para usar no javascript

      const hasFilme = filmes.some( (filme) => filme.id === this.filme.id);

      if(hasFilme){
        alert('Você já salvou esse filme em seus favoritos!')
        return;
      }

      filmes.push(this.filme)

      localStorage.setItem('@meus-filmes', JSON.stringify(filmes)) //set mandar // stringfy converte em string para armazenar no localstorage
      alert("Filme salvo com sucesso!")
    }  
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

  .container{
        display: flex;
        justify-content: center;
        flex-direction: column;
        max-width: 900px;
    }

    h2{
      color: #FFF;
      margin-bottom: 0px;
      background: brown;
      padding: 15px;
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
    }

    .container img{
        width: 100%;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
    }

    .button, a{
      margin-right: 5px;
      border-radius: 5px;
      margin-top: 15px;
      cursor: pointer;
      border:0;
      padding: 12px;
      font-size: 16px;      
      outline: none;
    }
    .button:hover, a:hover{
      background: brown;
      color: #FFF;
    }

    a{
      text-decoration: none;
      color: #000;      
      padding: 12px;
    }    
</style>