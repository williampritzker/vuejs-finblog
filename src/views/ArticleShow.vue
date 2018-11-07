<template>
  <div class="articles-show">
    <div class="container">
      <h2>{{ article.title }}</h2>
      <h3>{{ article.text }}</h3>
      <h3>{{ article.user.name }}</h3>
      <h5>{{ article.tags }}</h5>
      <div>
        <a v-bind:href="'/#/subpages/' + article.subpage_id">{{article.subpage.title }}</a>
      </div>
      <router-link to="/">Back to Home</router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      article: {}
    };
  },
  created: function() {
    axios.get("http://localhost:3000/api/articles/" + this.$route.params.id)
    .then(response => {
      this.article = response.data;
    });
  },
  methods: {},
  computed: {}
};
</script>