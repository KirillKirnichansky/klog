<template>
    <div style="margin-top:50px;" class="container">
        <h1 style="text-align:center;">Login or signup.</h1>
        <form class="form" @submit.prevent="onSubmit">
        <FormInput type="email" v-model="email">Email</FormInput>
        <FormInput type="password" v-model="password">Password</FormInput>
        <div style="text-align:center;">
        <FormButton type="submit">{{ isLogin ? 'Login' : 'Sign Up'}}</FormButton>
        <FormButton class="btn" type="button" @click="isLogin = !isLogin">Switch to {{isLogin ? 'Sign Up' : 'Log In'}}</FormButton>
        </div>
        </form>
    </div>
</template>
<script>
import FormInput from '~/components/input.vue'
import FormButton from '~/components/button.vue'
import axios from 'axios'
export default {
    components: {
        FormInput,
        FormButton
    },
    data() {
        return {
            isLogin: true,
            email: '',
            password: ''
        };
    },
    methods: {
        onSubmit() {
            this.$store.dispatch('authenticateUser', {
                isLogin: this.isLogin,
                email: this.email,
                password: this.password
            })
            .then(() => this.$router.push('/admin'));
            
        }
    }
}
</script>
<style scoped>
    .btn {
        background-color:#336D23;
        width:175px;
        margin-left:20px;
    }
    .btn:hover {
        border:2px solid #336D23;
        color:#336D23;
    }
    .form {
        width:50%;
        margin:0 auto;
        margin-top:50px;
    }
</style>
