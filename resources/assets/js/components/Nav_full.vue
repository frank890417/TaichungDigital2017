<template lang="jade">
nav.fullnav(:class="{open: full_nav_open}")
  ul
    li(@click="toggle_full_nav")
      router-link(to="/about") 質感計畫
    li(@click="toggle_full_nav")
      router-link(to="/Project/FrameofMind") 新境、心境
    br
    li(@click="toggle_full_nav")
      router-link(to="/Project/DandelionsWords") 絮語
    li(@click="toggle_full_nav")
      router-link(to="/Project/TrivialSampling") 日常取樣
    br
    li(@click="toggle_full_nav")
      router-link(to="/Project/StoryTeller") 時光@臺中
    li(@click="toggle_full_nav")
      router-link(to="/Project/TimeMicroscope") 時光顯微鏡    
</template>

<script>
    import { mapGetter, mapActions , mapState ,mapMutations } from 'vuex'
    export default {
        mounted() {
            console.log('navfullpage mounted.');
        },
        computed: mapState(["full_nav_open"]),
        methods: {...mapMutations(["toggle_full_nav"])
        }
    }
</script>
