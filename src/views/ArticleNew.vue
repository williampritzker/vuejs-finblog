<template>
  <div class="articles-new">
    <div class="container">

      <div class="row">
        <div class="col-md-8 col-md-push-1 col-sm-12 col-sm-push-0 col-xs-12 col-xs-push-0">
          <div class="row">
            <div class="col-md-12">
              <div class="form-group">
                <input v-model="newArticle.title" class="form-control" placeholder="Title" type="text">
              </div>
            </div>

            <div class="col-md-12">
              <div class="form-group">
                <textarea v-model="newArticle.text" name="" class="form-control" id="" cols="30" rows="7" placeholder="text"></textarea>
              </div>
            </div>

            <div class="form-group">
              <div v-for="tag in tags">
                <label  class="checkbox-inline"><input v-model="newArticle.tags" type="checkbox" v-bind:value="tag.id">{{ tag.name }}</label>
              </div>
            </div>
            
            <div class="form-group">
              <div v-for="subpage in subpages">
                <label ><input v-model="newArticle.subpage_id" type="radio" name="optradio" v-bind:value="subpage.id">{{subpage.title}}</label>
              </div>
            </div>

            <div class="col-md-12">
              <div class="form-group">
                <input v-on:click="addArticle()" value="Add Article" class="btn btn-primary" type="submit">
              </div>
            </div>
          </div>
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
      subpages: {},
      tags: {},
      newArticle: {title: "", text: "", tags: [], subpage_id: ""}
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
  },
  methods: {
    addArticle: function() {
      var formData = new FormData();
      formData.append("title", this.newArticle.title);
      formData.append("text", this.newArticle.text);
      formData.append("tags", this.newArticle.tags);
      formData.append("subpage_id", this.newArticle.subpage_id);

      axios.post("http://localhost:3000/api/articles", formData).then(response => {
        this.articles.push(response.data);
        this.newArticle.title = "";
        this.newArticle.text = "";
        this.newArticle.tags = [];
        this.newArticle.subpage_id = "";
      });
    }
  },
  computed: {}
};
</script>