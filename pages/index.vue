<template>

  <div class="home-page">

    <section class="intro">
      <h1>Welcome to klog!</h1>
      <h3>Browse the latest posts from our kloggers,</h3>
      <h4>to create a post, just login or signup.</h4>
    </section>
    <div class="container">
      <PostList :posts="loadedPosts"/>
    </div>
  </div>

</template>

<script>
  import PostList from '~/components/post-list.vue'

  export default {
    components: {
      PostList
    },
    data() {
      return {
        
      }
    },
    computed: {
      loadedPosts() {
        return this.$store.getters.loadedPosts
      }
    },
    head: {
      title: 'Klog'
    }
  }

  
</script>

<style scoped>
.intro {
  text-align:center;
}
</style>
