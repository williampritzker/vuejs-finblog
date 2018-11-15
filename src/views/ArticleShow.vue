<template>
  <div class="articles-show">
    
    <main id="main">
      <header class="page-header">
        <h1><span class="accent-color"></span> {{article.title}}</h1>
      </header>

      <div class="container">
        <article class="post post-single bg">
          <div class="post-media">
            <img class="retina" src="content/img/post-1-1098.jpg" width="1098" height="574" alt="Post Image">
          </div>

          <div class="post-header">
            <div> by {{article.user.name}}</div>
            <div class="date">Posted on November 15, 2016</div>
          </div>

          <div class="post-content">
            <p>{{article.text}}</p>

            <ul class="tags-list" v-for="tag in article.tags">
              <li><a href="#">{{tag.name}}</a></li>
            </ul>          
          </div><!-- .post-content -->

        </article><!-- .post -->
        
      </div>
    </main><!-- #main -->

<!--       <h2>{{ article.title }}</h2>
      <h3>{{ article.text }}</h3>
      <h3>{{ article.user.name }}</h3>
      <h5>{{ article.tags }}</h5>
      <div>
        <a v-bind:href="'/#/subpages/' + article.subpage_id">{{article.subpage.title }}</a>
      </div>
      <div>
        <a v-if="article.user.id == user.id" v-on:click="deleteArticle">Delete Article</a>
      </div>
      <router-link to="/">Back to Home</router-link> -->
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