<template>
  
  <div class="pages-show">

    <h1>Subpage Title</h1>
    <ul v-for="subpage in page.subpages">
      <div>
        <a v-bind:href="'/#/subpages/' + subpage.id">{{subpage.title }}</a>   
      </div>
    </ul>
    <router-link to="/">Back to Home</router-link>
    
  </div>

</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      page: {}
    };
  },
  created: function() {
    axios.get("http://localhost:3000/api/pages/" + this.$route.params.id)
    .then(response => {
      console.log(response.data);
      this.page = response.data;
    })
  },
  methods: {},
  computed: {}
};
</script>