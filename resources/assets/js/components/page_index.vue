<template lang="jade">
  .page_index
    .project_window
      ul.projects(:style="pan")
        router-link.project(:to="project.url" v-for="(project,pid) in projects",:class="{cur_item: pid==now_id}")
          .proj_image(:style="bg_css(project.img)")
            h1 {{project.name}}
    transition-group(name="fade" ,mode="out-in" ,style="width: 100%;height: 100%;position: absolute;left: 0;top: 0;", tag="div")
      .backeng(v-for="(p,id) in projects",v-text="p.eng" v-show="id==now_id",:key="p") 
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
              "left": (-this.now_id*1000)+"px"
            };
          }
        }
    }
</script>
