<template>
  <div class="w3-row">
    <div class="w3-card-4 w3-col l4 s12 w3-padding w3-margin" >

     <p>this is profile upload page</p>


    </div>
    <input type="file" @change="croppie"/>
  <vue-croppie ref="croppieRef" :enableOrientation="true" :boundary="{ width: 500, height: 500}" :viewport="{ width:150,
     height:150, 'type':'circle' }">
  </vue-croppie>
  <!-- the result -->
  <img :src="cropped">
  <button @click="crop">Crop</button>
  
  <img :src="src">







</div>


</template>
<script>
import 'w3-css/w3.css';
import axios from 'axios'

export default {

  computed:{




  },
  mounted() {
        // Upon mounting of the component, we accessed the .bind({...})
        // function to put an initial image on the canvas.

    },

  data () {

    return{
 params:{
   Key:'',
   Body:null,
 },
 params1:{
Key:"seema.png",
Bucket:"profilesdata"

 },
    cropped: null,
    croppieImage:'',
    image:'',
    src:"data:image/png;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
,

  }
}
  ,

  methods:  {
    submit() {  axios.post('http://localhost:8081/register',{username:this.username,email:this.email,password:this.password})

    .then(response => {
     console.log(response.data);
    })
    .catch(error => {
        console.log(error);
    });
},




croppie (e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;

      var reader = new FileReader();
      reader.onload = e => {
        this.$refs.croppieRef.bind({
          url: e.target.result
        });
      };

    reader.readAsDataURL(files[0]);
    },
    crop() {
      // Options can be updated.
      // Current option will return a base64 version of the uploaded image with a size of 600px X 450px.
      let options = {
        type: 'html',
        size: { width: 150, height: 150 },
        format: 'jpeg'
      };
      this.$refs.croppieRef.result(options, output => {
        this.cropped = this.croppieImage = output;
          console.log(this.croppieImage);
        });
      }
  }

    }



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
