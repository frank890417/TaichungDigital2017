<template lang="jade">
  .container.page_project.project_frame
    .top
       span(v-html="embed('fuuDVbWnROk')")  
    .bottom
      .left
        h1 絮語
        h4 作者
        h5 黃致傑
        p 東華大學藝術創意產業系助理教授<br>國立臺灣科技大學建築學博士、國立交通大學建築研究所理學碩士，活躍於國際的科技藝術家、駐村藝術家<br><br>創作領域為視覺運算、仿生機械，致力於運用電腦與互動科技仿擬有機體及生命系統，企圖建立人與人造物之間的感性對話
      .right
        a(href="/project/dandelion_dcc/index.html" target="_blank" title="前往作品")
          img.cover(src="/img/page_dande.png")
        p (點擊圖片前往作品)<br><br>網路資訊的大宗，是個人的自我表現與抒發。持續在數位空間中流動的文字，有陳述、景緻和情緒，有個人、家人與朋友。<br>本作品將特定臺中主題的文字雲，以蒲公英種子棉絮隨風飄動的樣貌呈現，是一種關於臺中的動態文字拼貼。 
      

</template>

<script>
    export default {
        mounted() {
            console.log('Navbar mounted.')
        },
        methods: {
          embed(tag){
            return "<iframe width='100%' height='600' src='https://www.youtube.com/embed/fuuDVbWnROk?autoplay=1' frameborder='0' allowfullscreen></iframe>";
          }
        }
    }
</script>
