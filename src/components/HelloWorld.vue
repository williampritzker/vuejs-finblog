<template>
  <div class="hello">
    
    <p><a v-if="user.id == null" > Welcome to FinBlog—a place for sharing information about finance. Please login or create an account.

    You may view our pages from the menu bar.</a></p>

    <p><a v-if="user.id =! null" > Write some articles!!! This is a an opensource space, I don't create no content</a></p>

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
