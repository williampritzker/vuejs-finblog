<template>
  <div id="app">
    <div class="page-box">
      <header class="site-header">
        <div class="container">
          <div class="row">
            <div class="col col-xs-6 col-md-3">
              <a href="index.html" class="logo">
                <img src="img/logo.png" width="120" height="66" alt="Logo">
              </a>
            </div>

            <div class="col col-xs-6 col-md-9 right-align">
              <div class="menu main-menu">
                <a href="#" class="menu-btn"><span></span><span></span><span></span></a>

                <nav class="menu-list-wrap">
                  <ul class="menu-list">
                    <li v-for="page in pages" class="menu-item menu-item-has-children">
                      <a href="index.html">{{page.title}}</a>
                      <div class="sub-menu-wrap">
                        <ul v-for="subpage in page.subpages" class="sub-menu">
                          <li class="menu-item"><a v-bind:href="'/#/subpages/' + subpage.id">{{ subpage.title }}</a></li>
                        </ul>
                      </div>
                    </li>
                    <li class="menu-item menu-item-has-children">
                      <a href="index.html">Home</a>
                      <div class="sub-menu-wrap">
                        <ul class="sub-menu">
                          <li class="menu-item"><a href="index.html">Main</a></li>
                          <li class="menu-item"><a href="index-2.html">With main post</a></li>
                          <li class="menu-item"><a href="index-3.html">With sidebar</a></li>
                          <li class="menu-item"><a href="index-4.html">Fullscreen slider</a></li>
                          <li class="menu-item"><a href="index-5.html">Animation</a></li>
                          <li class="menu-item"><a href="index-6.html">Timeline</a></li>
                        </ul>
                      </div>
                    </li>
                      <li v-if="isLoggedIn()" class="menu-item"><a href="/#/articles/new">New Article</a></li>
                      <li v-if="isLoggedIn()"class="menu-item"><a href="/#/users/me">Profile</a></li>
                      <li v-if="isLoggedIn()" class="menu-item"><a href="/#/logout">Logout</a></li>
                      <li v-if="!isLoggedIn()" class="menu-item"><a href="/#/signup">Signup</a></li>
                      <li v-if="!isLoggedIn()" class="menu-item"><a href="/#/login">Login</a></li>
                  </ul>
                </nav><!-- .menu-list-wrap -->
              </div><!-- .main-menu -->

              <div class="action-box">
                <a href="#" class="header-btn">
                  <svg fill="#cccc33" width="20" height="20" viewBox="0 0 502.749 502.749" style="enable-background:new 0 0 502.749 502.749;" xml:space="preserve">
                    <path fill="inherit" d="M394.4,148.299c1.417,0,2.833,0.283,4.25,0.283l0,0c39.1,0,71.683-30.883,73.95-69.983
                    c2.267-40.8-28.9-75.933-69.7-78.483c-41.083-2.267-75.933,29.183-78.2,69.7c-0.567,9.917,0.85,19.267,3.683,28.05L152.15,202.982
                    c-13.033-11.05-29.75-17.85-48.167-17.85c-40.8,0-73.95,33.15-73.95,73.95s33.15,73.95,73.95,73.95
                    c17.283,0,33.433-5.95,45.9-16.15l171.983,93.5c-4.533,17.567-2.267,35.983,6.233,52.133c12.75,24.65,37.967,40.233,65.733,40.233
                    l0,0c11.9,0,23.517-3.117,34-8.783c36.267-18.7,50.433-64.033,31.733-100.017c-12.75-24.65-37.967-39.95-65.733-39.95
                    c-11.9,0-23.517,2.833-34,8.5c-8.5,4.533-16.15,10.483-22.1,17.567l-166.317-90.383c4.25-9.35,6.8-19.833,6.8-30.883
                    c0-10.2-1.983-19.833-5.667-28.617l174.25-103.417C358.983,139.232,375.699,147.449,394.4,148.299z M358.699,72.082
                    c1.133-21.25,18.7-37.683,39.95-37.683c0.85,0,1.7,0,2.267,0c22.1,1.417,38.817,20.117,37.683,42.217
                    c-1.133,21.817-20.117,38.817-42.217,37.683C374.283,112.882,357.283,93.899,358.699,72.082z M64.033,259.082
                    c0-22.1,17.85-39.95,39.95-39.95s39.95,17.85,39.95,39.95s-17.85,39.95-39.95,39.95S64.033,281.182,64.033,259.082z
                     M375.416,392.815c5.667-3.117,11.9-4.533,18.417-4.533c15.017,0,28.617,8.217,35.7,21.533c10.2,19.55,2.55,43.917-17,53.833
                    c-5.667,3.117-11.9,4.533-18.417,4.533l0,0c-15.017,0-28.617-8.217-35.7-21.533c-4.817-9.35-5.95-20.4-2.55-30.6
                    C358.699,406.132,365.783,397.632,375.416,392.815z"/>
                  </svg>
                </a>
                <div class="action-content">
                  <div class="action-content-wrap">
                    <div class="header-social">
                      <div class="icons-list">
                        <span class="icon">
                          <svg fill="#000" width="20" height="20" viewBox="0 0 502.749 502.749" style="enable-background:new 0 0 502.749 502.749;" xml:space="preserve">
                            <path fill="inherit" d="M394.4,148.299c1.417,0,2.833,0.283,4.25,0.283l0,0c39.1,0,71.683-30.883,73.95-69.983
                            c2.267-40.8-28.9-75.933-69.7-78.483c-41.083-2.267-75.933,29.183-78.2,69.7c-0.567,9.917,0.85,19.267,3.683,28.05L152.15,202.982
                            c-13.033-11.05-29.75-17.85-48.167-17.85c-40.8,0-73.95,33.15-73.95,73.95s33.15,73.95,73.95,73.95
                            c17.283,0,33.433-5.95,45.9-16.15l171.983,93.5c-4.533,17.567-2.267,35.983,6.233,52.133c12.75,24.65,37.967,40.233,65.733,40.233
                            l0,0c11.9,0,23.517-3.117,34-8.783c36.267-18.7,50.433-64.033,31.733-100.017c-12.75-24.65-37.967-39.95-65.733-39.95
                            c-11.9,0-23.517,2.833-34,8.5c-8.5,4.533-16.15,10.483-22.1,17.567l-166.317-90.383c4.25-9.35,6.8-19.833,6.8-30.883
                            c0-10.2-1.983-19.833-5.667-28.617l174.25-103.417C358.983,139.232,375.699,147.449,394.4,148.299z M358.699,72.082
                            c1.133-21.25,18.7-37.683,39.95-37.683c0.85,0,1.7,0,2.267,0c22.1,1.417,38.817,20.117,37.683,42.217
                            c-1.133,21.817-20.117,38.817-42.217,37.683C374.283,112.882,357.283,93.899,358.699,72.082z M64.033,259.082
                            c0-22.1,17.85-39.95,39.95-39.95s39.95,17.85,39.95,39.95s-17.85,39.95-39.95,39.95S64.033,281.182,64.033,259.082z
                             M375.416,392.815c5.667-3.117,11.9-4.533,18.417-4.533c15.017,0,28.617,8.217,35.7,21.533c10.2,19.55,2.55,43.917-17,53.833
                            c-5.667,3.117-11.9,4.533-18.417,4.533l0,0c-15.017,0-28.617-8.217-35.7-21.533c-4.817-9.35-5.95-20.4-2.55-30.6
                            C358.699,406.132,365.783,397.632,375.416,392.815z"/>
                          </svg>
                        </span>
                        <ul class="social">
                          <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                          <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                          <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                          <li><a href="#"><i class="fa fa-pinterest-p"></i></a></li>
                        </ul>
                      </div>
                      <a class="btn close" href="#"></a>
                    </div>
                  </div>
                </div>
              </div><!-- .action-box -->

              <div class="action-box">
                <a href="#" class="header-btn">
                  <svg fill="#cccc33" width="20" height="20" viewBox="0 0 17 17" enable-background="new 0 0 17 17" xml:space="preserve">
                    <path fill="inherit" d="M16.604 15.868l-5.173-5.173c0.975-1.137 1.569-2.611 1.569-4.223 0-3.584-2.916-6.5-6.5-6.5-1.736 0-3.369 0.676-4.598 1.903-1.227 1.228-1.903 2.861-1.902 4.597 0 3.584 2.916 6.5 6.5 6.5 1.612 0 3.087-0.594 4.224-1.569l5.173 5.173 0.707-0.708zM6.5 11.972c-3.032 0-5.5-2.467-5.5-5.5-0.001-1.47 0.571-2.851 1.61-3.889 1.038-1.039 2.42-1.611 3.89-1.611 3.032 0 5.5 2.467 5.5 5.5 0 3.032-2.468 5.5-5.5 5.5z"/>
                  </svg>
                </a>
                <div class="action-content">
                  <div class="action-content-wrap">
                    <form class="header-search">
                      <div class="input-field">
                        <span class="icon">
                          <svg fill="#000" width="20" height="20" viewBox="0 0 17 17" enable-background="new 0 0 17 17" xml:space="preserve">
                            <path fill="inherit" d="M16.604 15.868l-5.173-5.173c0.975-1.137 1.569-2.611 1.569-4.223 0-3.584-2.916-6.5-6.5-6.5-1.736 0-3.369 0.676-4.598 1.903-1.227 1.228-1.903 2.861-1.902 4.597 0 3.584 2.916 6.5 6.5 6.5 1.612 0 3.087-0.594 4.224-1.569l5.173 5.173 0.707-0.708zM6.5 11.972c-3.032 0-5.5-2.467-5.5-5.5-0.001-1.47 0.571-2.851 1.61-3.889 1.038-1.039 2.42-1.611 3.89-1.611 3.032 0 5.5 2.467 5.5 5.5 0 3.032-2.468 5.5-5.5 5.5z"/>
                          </svg>
                        </span>
                        <input class="form-control search-input" type="search" name="search" placeholder="Search ...">
                      </div>
                      <a class="btn close" href="#"></a>
                    </form>
                  </div>
                </div>
              </div><!-- .action-box -->
            </div>
          </div>
        </div>
      </header><!-- .site-header -->
      <div class="container">
        <router-view :key="$route.path"></router-view>
      </div>
      <div class="post-footer">
          <div class="post-author">
            By: <a href="post.html">Mark</a>
          </div>

          <div class="post-sharing">
            Share:
            <ul class="social">
              <li><a href="#"><i class="fa fa-twitter"></i></a></li>
              <li><a href="#"><i class="fa fa-facebook"></i></a></li>
              <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
              <li><a href="#"><i class="fa fa-pinterest-p"></i></a></li>          
            </ul>
          </div>
      </div>
    </div><!-- .page-box -->
      
  </div>
</template>

<style>
</style>

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
      });
  },
  methods: {
    isLoggedIn: function() {
      if (localStorage.getItem("jwt")) {
        return true;
      }
      return false;
    }
  }
};
</script>