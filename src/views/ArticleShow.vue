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
      <div>
        <a v-if="article.user.id == user.id" v-on:click="deleteArticle">Delete Article</a>
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
      article: {},
      user:{}
    };
  },
  created: function() {
    axios.get("http://localhost:3000/api/articles/" + this.$route.params.id)
    .then(response => {
      this.article = response.data;
    });
    axios.get("http://localhost:3000/api/users/me")
    .then(response => {
      this.user = response.data;
    });
  },
  methods: {
    deleteArticle: function() {
    axios.delete("http://localhost:3000/api/articles/" + this.$route.params.id)
    .then(response => {
      this.$router.push("/users/me");
    })
    .catch(error => {
      this.errors = error.response.data.errors;
    });
  }
  },
  computed: {}
};
</script>