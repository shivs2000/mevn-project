<template>
<div>
  <div   class="w3-card w3-margin-bottom"  style="width:50%;height:300px;margin:auto;" v-for="person in persons " :key="person">
    
    <header class="w3-container">
      <h1>{{ person.title}}</h1>
    </header>  
    <div class="w3-container">
    {{person.content}}
    </div>


  </div>
</div>


</template>
<script>
import 'w3-css/w3.css';
import axios from 'axios'
export default {

  data () {

    return{
    persons:[],
  }
}
  ,

  methods:  {
      getInitialUsers () {
        
    for (var i = 0; i < 5; i++) {
      this.persons.push({title:"blog title",content:"Loremdolore magna aliqua. Ut enifdgkdfgjkkjgneg  gueghgh ewguiuiergher aliquip ex ea commodo consequat."});
      /*axios.get()
        .then(response => {
          this.persons.push(response.data.results[0]);
        });*/
    }
  },
    scroll (person) {
    window.onscroll = () => {
      let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;

      if (bottomOfWindow) {
        this.persons.push({title:"blog title",content:"Loremdolore magna aliqua. Ut enifdgkdfgjkkjgneg  gueghgh ewguiuiergher aliquip ex ea commodo consequat."});
        /*axios.get('')
          .then(response => {
            this.persons.push(response.data.results[0]);
          });
          */
      }
    };
  },
    
  },
  mounted() {
   this.scroll(this.person);
  },
  beforeMount() {
   this.getInitialUsers();
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
