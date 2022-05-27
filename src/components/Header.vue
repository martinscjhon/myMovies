<template>
  <header id="header">
    <router-link to="/" exact>Filmaria</router-link>
    
    <button>
      <router-link to="/salvos" exact>
        salvos      
      </router-link>
    </button>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent"
}
</script>

<style scoped>
  #header{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 100%; 
    height: 80px;
    background-color: brown;      
  }

  a{
    text-decoration: none;
    color: white;
    font: 600 25px "Poppins";
  }

  button{
    cursor: pointer; 
    width: 100px;   
    border: none;
    height: 30px;
    border-radius: 20px;
    outline: none;
    transition: 0.3s;    
  }

  button a{
    color: black;    
    font: 400 13px 'poppins';
  }

  button:hover{
    opacity: 0.9;
  }
</style>