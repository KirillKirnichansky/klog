<template>
    <form @submit.prevent="onSubmit" class="form">
        {{author}}
                <InputControl v-model="editedPost.title">Title:</InputControl>
                <div class="clear"></div>
                <InputControl controlType="textarea" v-model="editedPost.content">Post Content:</InputControl>
                <div class="clear"></div>
                <InputControl v-model="editedPost.previewText">Preview Text:</InputControl>
                <div class="clear"></div>
                <InputControl v-model="editedPost.thumbnail">Thumbnail Link (if you don't desire a thumbnail, just leave it blank!):</InputControl>
                <div class="clear"></div>
                <div style="text-align:center">
                <ButtonControl type="submit">Submit</ButtonControl>
                </div>
    </form>
</template>
<script>
import InputControl from '~/components/input.vue'
import ButtonControl from '~/components/button.vue'
import Cookie from 'js-cookie'
export default {
    components: {
        InputControl,
        ButtonControl
    },
    props: {
        post: {
            type: Object,
            required: false
        }
    },
    data() {
        return {
            /*editedPost is what populates the form
            the 'post' prop can be set from outside, which populates the form
            with the contents of the post object (...this.post take all the data from the object)
            */
            
            editedPost: this.post ? {...this.post} : {
                title: '',
                content: '',
                previewText: '',
                thumbnail: '',
                email: Cookie.get('email')
            }

        }
    },
    methods: {
        onSubmit() {
            if (this.editedPost.thumbnail == ''){
                this.editedPost.thumbnail = null
            }
            this.$emit('submit', this.editedPost)
        }
    }
}
</script>
<style scoped>
    .clear {
        clear:both;
    }
</style>
