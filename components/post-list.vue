<template>
    <div>
        <section class="posts">
            <div class="wrapper">
                <PostPreview
                v-for="post in posts"
                :key="post.id" 
                :isAdmin="isAdmin" 
                :id="post.id" 
                :thumbnail="post.thumbnail"
                :title="post.title" 
                :email="post.email"
                :previewText="post.previewText"
                :user="user"
                :valid="check(post.email)"/> 
            </div>  
            
        </section>
    </div>
</template>
<script>
import PostPreview from '~/components/post-previews.vue'
import Cookie from 'js-cookie'
export default {
    components: {
        PostPreview
    },
    props: {
        isAdmin: {
            type: Boolean,
            default: false
        },
        posts: {
            type: Array,
            required: true
        },
        user: {
            type: Boolean,
            required: false
        }
    },
    data() {
        return {
            loggedIn: Cookie.get('email')
        }
    },
    methods: {
        check(email) {
            if (this.user){
                if (this.loggedIn == email){
                return true;
                }
            return false;
            }
            return true;
        }
    }
}
</script>
<style scoped>
</style>