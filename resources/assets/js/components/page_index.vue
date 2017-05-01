<template lang="jade">
  .page_index
    .project_window
      \ul.projects(:style="pan")
        router-link.project(:to="project.url" v-for="project in projects")
          h1 {{project.name}}
          .proj_image(:style="bg_css(project.img)")
    transition-group(name="fade" mode="out-in")
      .backeng(v-for="p in projects",v-text="p.eng" v-show="id==now_id",:key="p") 
    .project_next(@click="delta(1)")
      i.fa.fa-angle-right
    .project_pre(@click="delta(-1)")
      i.fa.fa-angle-left
    
</template>

<script>
    import { mapGetter, mapActions , mapState ,mapMutations } from 'vuex';
    export default {
        data(){
          return {
            now_id: 0
          }
        },
        mounted() {
            console.log('page index mounted.')
        },
        methods: {
          delta(dd){
            this.now_id=(this.now_id+dd+this.projects.length)%this.projects.length;
          },
          bg_css(url){
            return {
              "background-image": "url("+url+")"
            }
          }
        },
        computed: {
          ...mapState(["projects"]),
          pan(){
            return {
              "left": (450-this.now_id*900)+"px"
            };
          }
        }
    }
</script>
