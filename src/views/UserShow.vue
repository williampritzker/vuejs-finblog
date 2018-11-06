<template>
  <div class="user-show">
    <div class="container">
      <h2>{{ user.name }}</h2>
      <h3>{{ user.email }}</h3>
      <router-link to="/">Back to index</router-link>
      <router-link to="/logout">Logout</router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      user: {}
    };
  },
  created: function() {
    axios.get("http://localhost:3000/api/users/" + this.$route.params.id)
    .then(response => {
      this.user = response.data;
    })
  },
  methods: {},
  computed: {}
};
</script>