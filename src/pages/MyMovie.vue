<template>
  <div id="myMovie">
    <h1>Meus Filmes</h1>
    <span v-if="filmes.length <= 0">
      Você não possui nenhum filme salvo!
    </span>    
      <ul>
        <li v-for="item in filmes" :key="item.id">
          <span>{{item.nome}}</span>
          <div>
            <router-link :to="`/filme/${item.id}`" class="button">Ver detalhes</router-link>
            <button class="button" @click="excluir(item.id)">Excluir</button>
          </div>
        </li>
      </ul>    
  </div>
</template>

<script>
export default {
  name: "MyMovieComponent",
  data(){
    return{
      filmes: []
    }
  },
  created(){
    const minhaLista = localStorage.getItem("@meus-filmes");

    this.filmes = JSON.parse(minhaLista) || [];
  },
  methods:{
    excluir(id){
      let filtroFilmes = this.filmes.filter((item) => {
        return (item.id !== id)
      })

      return this.filmes = filtroFilmes
    }
  },
  watch:{
    filmes(){
      localStorage.setItem("@meus-filmes", JSON.stringify(this.filmes))
    }
  }
}
</script>

<style scoped>
  #myMovie{
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
  }

  ul{
    padding: 0;
    margin-top: 3rem;
  }

  ul li{
    padding: 0;
    list-style: none;
    min-width: 600px;
    display: flex;
    align-items: center;
    justify-content: space-between;    
  }

  .button:nth-child(1){    
    margin-right: 10px;
    color: #017014
  }

  .button +.button{
    color: red;
    font-family: "Poppins";
  }

  .button{
    background: transparent;
    text-decoration: none;
    border: none;
    font-size: 14px;
    cursor: pointer;    
  }

  ul li span{
    font-size: 18px;
  }
</style>