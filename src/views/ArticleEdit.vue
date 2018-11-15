<template>
  <div class="article-edit">

          <div class="row">
            <div class="col-md-12">
              <div class="form-group">
                <textarea v-model="title" name=""class="form-control" id="" cols="30" rows="2">{{title}}</textarea>
              </div>
            </div>

            <div class="col-md-12">
              <div class="form-group">
                <textarea v-model="text" name="" class="form-control" id="" cols="30" rows="7" >{{text}}</textarea>
              </div>
            </div>

            <div class="form-group">
              <div v-for="tag in tags">
                <label  class="checkbox-inline"><input v-model="articleEditTags" type="checkbox" v-bind:value="tag.id">{{ tag.name }}</label>
              </div>
            </div>
            
            <div class="form-group">
              <div v-for="subpage in subpages">
                <label ><input v-model="subpage_id" type="radio" name="optradio" v-bind:value="subpage.id">{{subpage.title}}</label>
              </div>
            </div>

            <div class="col-md-12">
              <div class="form-group">
                <input v-on:click="editArticle()" value="Edit Article" class="btn btn-primary" type="submit">
              </div>
            </div>
          </div>
        
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      subpages: [],
      tags: [],
      article: {},
      title: "",
      text: "",
      articleEditTags: [],
      subpage_id: ""
    };
  },
  created: function() {
    axios.get("http://localhost:3000/api/tags")
    .then(response => {
      this.tags = response.data;
    });
    axios.get("http://localhost:3000/api/subpages")
    .then(response => {
      this.subpages = response.data;
    });
    axios.get("http://localhost:3000/api/articles/" + this.$route.params.id)
    .then(response => {
      this.article = response.data;
      this.title = this.article.title;
      this.text = this.article.text;
      this.articleEditTags = this.article.tags;
      this.subpage_id = this.article.subpage_id;
    });
  },
  methods: {
    editArticle: function() {
      var formData = new FormData();
      formData.append("title", this.title);
      formData.append("text", this.text);
      formData.append("tags", this.articleEditTags);
      formData.append("subpage_id", this.subpage_id);

      axios.patch("http://localhost:3000/api/articles/" + this.$route.params.id, formData).then(response => {
        this.$router.push("/articles/" + this.$route.params.id);
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  },
  computed: {}
};
</script>