<template lang="jade">
  .leftbar
    router-link(to="/index").header
      img.nav_logo(src="/img/iconlogoWF.png")
      // .line1 質感
      // .line2 臺中紀事
    .hamburger(@click="toggle_full_nav" ,:class="{open: full_nav_open}")
      .l1
      .l2
      .l3
    .question
    .mute(@click="toggle_mute")
      img(src="/img/volume-icon.png", :class="{muting:mute_text=='UNMUTE'}" width=30)

    
</template>

<script>
  import { mapGetter, mapActions , mapState ,mapMutations } from 'vuex'
  export default {
      data(){
        return {mute_text: "MUTE"}
      },
      mounted() {
          console.log('Navbar mounted.');
      },
      computed: mapState(["full_nav_open"]),
      methods: {
       ...mapMutations(['toggle_full_nav']) ,
       toggle_mute(){
         var current_volume = $("#bgmusic")[0].volume;
         if (current_volume==1){
           this.mute_text="UNMUTE"
         }else{
           this.mute_text="MUTE"
         }
         console.log(current_volume)
         $("#bgmusic").animate({volume: -current_volume+1})
         // $("#bgmusic").attr("src","/music/bgscope.mp3");
       }
      }
  }
</script>
