<template lang="jade">
  .page_index
    .project_window
      ul.projects(:style="pan")
        router-link.project(:to="project.url" v-for="project in projects")
          h1 {{project.name}}
          .proj_image(:style="bg_css(project.img)")
    transition-group(name="fade" mode="out-in")
      .backeng(v-for="p in projects",v-text="p.eng" v-show="id==now_id",:key="p") 
    .project_next(@click="now_id_delta(1)")
      i.fa.fa-angle-right
    .project_pre(@click="now_id_delta(-1)")
      i.fa.fa-angle-left
    
</template>

<script>
    import { mapGetter, mapActions , mapState ,mapMutations } from 'vuex';
    export default {
        mounted() {
            console.log('page index mounted.')
        },
        methods: {
          ...mapMutations(['now_id_delta']),
          bg_css(url){
            return {
              "background-image": "url("+url+")"
            }
          }
        },
        computed: {
          ...mapState(["projects","now_id"]),
          pan(){
            return {
              "left": (450-this.now_id*900)+"px"
            };
          }
        }
    }
</script>
