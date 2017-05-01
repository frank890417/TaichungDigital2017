<template lang="jade">
  .leftbar
    router-link(to="/").header
      .line1 質感
      .line2 台中紀事
    .hamburger(@click="toggle_full_nav" ,:class="{open: full_nav_open}")
      .l1
      .l2
      .l3
    .question

    
</template>

<script>
  import { mapGetter, mapActions , mapState ,mapMutations } from 'vuex'
  export default {
      mounted() {
          console.log('Navbar mounted.');
      },
      computed: mapState(["full_nav_open"]),
      methods: {
       ...mapMutations(['toggle_full_nav']) 
      }
  }
</script>
