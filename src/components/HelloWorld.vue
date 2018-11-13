<template>
  <div class="hello">
    <h3>Local Links</h3>
    <ul>
      <li><a v-if="user.id == null" href="/#/signup">Signup</a></li>
      <li><a v-if="user.id == null" href="/#/login">Login</a></li>
      <li><a v-if="user.id != null" href="/#/logout">Logout</a></li>
      <li><a v-if="user.id != null" href="/#/articles/new">New Article</a></li>
      <li><a v-if="user.id != null" href="/#/users/me">Profile</a></li>
    </ul>

    <h3>Pages</h3>
      <div v-for="page in pages">
        <div>
          <li><a v-bind:href="'/#/pages/' + page.id">{{ page.title }}</a></li>
        </div>
    </div>

  </div>

</template>

<script>
import axios from "axios";

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data: function() {
    return {
      pages: [],
      user: []
    };
  },
  created: function() {
    axios.get("http://localhost:3000/api/pages/")
    .then(response => {
      console.log(response.data);
      this.pages = response.data;
    }),
    axios.get("http://localhost:3000/api/users/me")
      .then(response => {
      this.user = response.data;
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
