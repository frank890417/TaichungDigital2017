
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import VueRouter from 'vue-router';
import Vuex from 'vuex';

require('./bootstrap');
Vue.use(VueRouter);
Vue.use(Vuex);


require('./bootstrap');



/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// Vue.component('example', require('./components/Example.vue'));

var Navbar = Vue.component('Navbar', require('./components/Navbar.vue'));
var Nav_full = Vue.component('Nav_full', require('./components/Nav_full.vue'));

var Project_StoryTeller = Vue.component('Project_StoryTeller', require('./components/Project_StoryTeller.vue'));
var Project_FrameofMind = Vue.component('Project_FrameofMind', require('./components/Project_FrameofMind.vue'));
var Project_DandelionsWords = Vue.component('Project_DandelionsWords', require('./components/Project_DandelionsWords.vue'));
var Project_TrivialSampling = Vue.component('Project_TrivialSampling', require('./components/Project_TrivialSampling.vue'));
var Project_TimeMicroscope = Vue.component('Project_TimeMicroscope', require('./components/Project_TimeMicroscope.vue'));


//vue router
const routes = [
  {path: '/Project/StoryTeller',component: Project_StoryTeller },
  {path: '/Project/FrameofMind',component: Project_FrameofMind },
  {path: '/Project/DandelionsWords',component: Project_DandelionsWords },
  {path: '/Project/TrivialSampling',component: Project_TrivialSampling },
  {path: '/Project/TimeMicroscope',component: Project_TimeMicroscope },
];

const router = new VueRouter({
  routes
});
router.replace("/Project/StoryTeller");

router.beforeEach((to, from, next) => {
  console.log(to);
  
  next();
});

//vuex store
var store = new Vuex.Store({
  state: {
    full_nav_open: true,
    projects: [
      {
        name: "新境、心境",
        eng: "Frame of Mind",
        url: "/Project/FrameofMind"
      },
      {
        name: "絮語 (Dandelion’s Words)",
        eng: "Dandelion’s Words",
        url: "/Project/DandelionsWords"
      },
      {
        name: "日常取樣 (Trivial Sampling)",
        eng: "Trivial Sampling",
        url: "/Project/TrivialSampling"
      },
      {
        name: "時光@臺中(Storyteller)",
        eng: "Storyteller",
        url: "/Project/StoryTeller"
      },
      {
        name: "時光顯微鏡(Time microscope)",
        eng: "Time microscope",
        url: "/Project/TimeMicroscope"
      }
    ]
  },
  mutations: {
    toggle_full_nav (state){
      state.full_nav_open=!state.full_nav_open;
    }
  },
  actions: {
   
  }
});


const app = new Vue({
  el: "#app",
  store,
  router,
  data: {
    posts: []
  },
  mounted (){
    // store.dispatch("ajax_post");
    // store.commit("update_posts",[
    //   {title: "test",body: "haha"}
    // ]);
    
  }
  
});