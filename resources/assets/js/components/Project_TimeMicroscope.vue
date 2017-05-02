<template lang="jade">
  .container.page_project.project_timemicro
    .top
      span(v-html="embed('iInlGp3TZcs&list=PLDnVXVSyEyS7_kFeZhN6abY1p2wio40YB')")
    .bottom
      .left
        h1 時光顯微鏡
        h4 章光和
        //h5 
        p 藝術指導<br><br>章光和<br><br>世新大學圖文傳播暨數位出版學系副教授<br>紐約大學藝術碩士<br><br>專業影像處理與藝術創作，作品在國內外展出、典藏<br><br>攝影團隊<br><br>章光和、湛文甫、陳苡端
      .right
        img.cover(src="/img/page_timemicro.png")
        p 就像是在空間裡遠遠的看著行旅的人生，一切的人、事、物都縮小再縮小，縮小到空間質變。空間與時間的質量發生轉變，真實與現在也就消失。像是離真實世界很遠很遠一樣，看著影像裡的世界雖然是臺中的街景，卻是如另一世界，如另一人間。像是消失很久的記憶，似曾相似，親密的回憶與感受因為縮小的世界而容易掌握。但再親密也是無法接近與擁抱，一切終將消逝，終將遠離。<br><br>些微快轉的時間軸徐徐前進，以近似時間對比的效果呈現出，我們生存在這一個時間與空間，有如時空過客般的戲劇效果。相對於天地長存，人生短短數十年，近百年，那種「空間行旅」的感覺，我們希望透過這一件作品表現出來。觀看者就像是在世界之外，透過時光顯微鏡仔細但又模糊的觀看著一幕幕人生百態。


</template>

<script>
    export default {
        mounted() {
            console.log('Navbar mounted.')
        },
        methods: {
          embed(tag){
            return "<iframe width='100%' height='600' src='https://www.youtube.com/embed/iInlGp3TZcs?list=PLDnVXVSyEyS7_kFeZhN6abY1p2wio40YB&autoplay=1' frameborder='0' allowfullscreen ></iframe>";
          }
        }
    }
</script>
