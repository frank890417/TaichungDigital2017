<template lang="jade">
  .container.page_project.project_frame
    .top
      span(v-html="embed('')")
    .bottom
      .left
        h1 新境、心境
        h4 作者
        h5 吳冠穎
        p 木天寮創作團隊科技總監<br>國立交通大學建築研究所博士<br><br>透過程式撰寫及電子電路建構出創作者對這世界的真實想像與未來幻想。喜好透過動力機械結構結合音樂與影像的即時演出，營造出能感受到生命律動的空間氛圍；曾經與影像記錄工作者、表演藝術工作者、編曲家、音樂演奏者合作，並多次參與跨領域整合表演與科技藝術整合計劃
      .right
        img.cover(src="/img/page_dan.png")
        p 以攝影的角度為出發點，在同一個地點的影像紀錄往往會隨著時間的推移而有所不同，當下的美只存在那凍結的一瞬間。而藉由數位媒材與資料探勘的圖像素材資訊，可以將不同時間的影像聚集為一線性時間軸的場域紀錄。<br>本作品試圖以時間作為主軸，將各個時間所記錄的場域資訊與即時圖像視覺演算合併，呈現出跨時間與空間的影像內容。
    
</template>

<script>
    export default {
        mounted() {
            console.log('Navbar mounted.')
        },
        methods: {
          embed(tag){
            return "<iframe width='100%' height='600' src='https://www.youtube.com/embed/sWuvxunOkL0?autoplay=1&rel=0' frameborder='0' allowfullscreen></iframe>";
          }
        }
    }
</script>
