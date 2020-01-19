<template>
    <div>
        <section style="margin-top:50px;" class="update-form container">
                    <div class="form">
                        <h1 style="text-align:center;">Edit post.</h1>
                        <PostForm :post="loadedPost" @submit="onSubmit"/>
                    </div>
        </section>

    </div>
</template>
<script>
import PostForm from '~/components/admin-post-form.vue'
import PostPreview from '~/components/post-previews.vue'
import axios from 'axios'
export default {
    middleware: ['checkAuth','auth'],
    layout: 'user',
    components: {
        PostForm,
        PostPreview
    },
    asyncData(context) {
        return axios
        .get('https://vue-posts-7eb6f.firebaseio.com/posts/' + context.params.postId + '.json')
        .then(res => {
            return {
                loadedPost: {...res.data, id: context.params.postId}
            };
        })
        .catch(e => context.error(e))
    },
    methods: {
        onSubmit(editedPost) {
            this.$store.dispatch('editPost', editedPost)
            .then(() => {this.$router.push("/admin");
            });
        }
    }
}
</script>
<style scoped>
    .form {
        margin:0 auto;
        margin-top:50px;
        width:90%;
    }
</style>
