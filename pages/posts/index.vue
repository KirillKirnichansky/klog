<template>
    <div class="container">
        <h1 style="text-align:center"></h1>
        <PostList :posts="loadedPosts"/>
    </div>
</template>
<script>
  import PostList from '~/components/post-list.vue'

  export default {
    components: {
      PostList
    },
    computed: {
      loadedPosts() {
        return this.$store.getters.loadedPosts
      }
    }
  }
  
</script>
