<template lang="jade">
  .page_index
    .project_window
      ul.projects(:style="computed_left")
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
        data(){

          return {span: 1000}
        },
        methods: {
          ...mapMutations(['now_id_delta']),
          bg_css(url){
            return {
              "background-image": "url("+url+")"
            }
          },
          delta(d){
            // (原本的id+變化+總長）% 總長
            // (0 + (-1) + 5) % 5 = 4
            this.now_index=(this.now_index+d+this.works.length)%this.works.length;
          }
        },
        computed: {
          ...mapState(["projects","now_id"]),
          pan(){
            return {
              "margin-left": (-this.now_id*1000)+"px"
            };
          },
          computed_left(){
            return {
              //左距離＝偏移負的單格距離＊現在正在瀏覽的index
              "left": (-500-this.span*this.now_id)+"px"
            };
          }
        }
    }
</script>
