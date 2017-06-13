<template lang="jade">
  .container.page_project
    .left
      h1 日常取樣
      h4 侯君昊
      //h5 
      p 國立交通大學建築研究所副教授<br>哈佛大學設計博士、國立交通大學應用藝術研究所碩士<br><br>創作領域為科技藝術、設計運算、數位構築、跨媒體整合，歷年參與各類科技藝術、數位建築展覽，並擔任協同策展人，以推動前衛科技與文化融合、數位科技與跨媒體創為目標
    .right
      a(href="/project/trivial_sampling/index.html" target="_blank" title="前往作品")
        img.cover(src="/img/page_trivial.png")
      p (點擊圖片前往作品)<br><br>透過搜尋與取樣方法由社群網路擷取影像素材，根據色彩、材質、地理位置進行取樣，以取樣地圖形式呈現。由此，看似個人、隨意的日常取材，藉由取樣過程中主觀、聚焦、切割與轉換，以及地理、顏色等關聯性串連，可能呈現怎樣的臺中日常呢？
      p ©侯君昊

</template>

<script>
    export default {
        mounted() {
            console.log('Navbar mounted.')
        }
    }
</script>
