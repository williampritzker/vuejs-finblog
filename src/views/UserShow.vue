<template>
  <div class="user-show">
    <div class="container">
      <h2>{{ user.name }}</h2>
      <h3>{{ user.email }}</h3>
      <h4>{{ user.articles }}</h4>
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