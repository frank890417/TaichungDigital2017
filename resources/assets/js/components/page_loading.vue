<template lang="jade">
  .container.page_loading
    video.loading_video(src="/video/170613_LogoAnimation.mp4" autoplay)

</template>

<script>

    export default {
        mounted() {
            console.log('video mounted.')
            document.querySelector(".loading_video").addEventListener('ended', function(){
               router.replace("/index")
            });
            setTimeout(()=>{
              if (document.querySelector(".loading_video").paused){
                router.replace("/index")
              }
            },500)
        },
        methods: {
        }
    }
</script>
