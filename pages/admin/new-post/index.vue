<template>
    <div style="margin-top:50px" class="container">
        <h1 style="text-align:center;">Create a post.</h1>
        <div class="form">
            <PostForm @submit="onSubmitted"/>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import PostForm from '~/components/admin-post-form.vue'
export default {
    middleware: ['checkAuth','auth'],
    layout: 'user',
    components: {
        PostForm
    },
    methods: {
        onSubmitted(postData) {
            this.$store.dispatch('addPost', postData)
            .then(() =>{this.$router.push("/admin");
            });
        }
    }
}
</script>
<style scoped>
    .form {
        width:90%;
        margin:0 auto;
        margin-top:50px;
    }
</style>

