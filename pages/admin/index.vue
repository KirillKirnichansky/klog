<template>
    <div class="container">
        <h1>Hello {{author}},</h1>
        <h2>take a look at what everyone's klogging about.</h2>
        <section class="existing-posts">
            <PostList :posts="loadedPosts" :isAdmin="true"/>
        </section>
    </div>
</template>
<script>
import PostList from '~/components/post-list.vue'
import Cookie from 'js-cookie'
export default {
    middleware: ['checkAuth','auth'],
    layout: 'user',
    components: {
        PostList
    },
    data() {
        return {
            author: Cookie.get('email')
        }
    },
    computed: {
      loadedPosts() {
        return this.$store.getters.loadedPosts
      }
    },
    
    methods: {
        onLogout() {
            this.$store.dispatch('logout');
            this.$router.push('/admin/auth');
        }
    }
}
</script>
<style scoped>
    .existing-posts {
        width:80%;
        margin:0 auto;
    }
</style>
