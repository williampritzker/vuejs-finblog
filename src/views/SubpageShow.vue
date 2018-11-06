<template>
  <div class="subpage-show">
        

  <title>{{subpage.title }}</title>

  <h1>Article Title</h1>
    <ul v-for="article in subpage.articles">
      <div>
        <a v-bind:href="'/#/articles/' + article.id">{{article.title }} </a>   
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
      subpage: {}
    };
  },
  created: function() {
    axios.get("http://localhost:3000/api/subpages/" + this.$route.params.id)
    .then(response => {
      this.subpage = response.data;
    })
  },
  methods: {},
  computed: {}
};
</script>