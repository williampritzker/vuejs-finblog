<template>
  <div class="user-show">
    <div class="page-content">
      <h1>{{ user.name }}</h1>
      <h1>{{ user.email }}</h1>
          <h1>Articles</h1>
      <ul v-for="article in user.articles">
        <div>
          <a v-bind:href="'/#/articles/' + article.id">{{article.title }} </a>   
        </div>
      </ul>
      <ul>
      <li><router-link to="/">Back to index</router-link></li>
      <li><router-link to="/users/edit/me">Edit Profile</router-link></li>
      <li><router-link to="/logout">Logout</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      user: {},
      articles: {}
    };
  },
  created: function() {
    axios.get("http://localhost:3000/api/users/me")
    .then(response => {
      this.user = response.data;
    })
  },
  methods: {},
  computed: {}
};
</script>