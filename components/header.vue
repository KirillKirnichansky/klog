<template>
        <nav class="navbar navbar-expand-lg navbar-dark navbar-fixed-top">
            <a class="navbar-brand" href="/">klog</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                        <nuxt-link class="nav-link" style="color:#E6E6E6" :to="'/'" >Home</nuxt-link>
                    </li>
            </ul>
                <button class="nav-btn my-2 my-sm-0" @click="onLogin">Login or Signup</button>   
        </div>
    </nav>
</template>
<script>
export default {
    methods: {
        onLogin() {
            this.$router.push('/admin/auth');
        }
    }
}
</script>

<style>
.nav-item {
    margin-left:20px;  
}
.nav-link {
   
    font-weight:lighter;
}
.nav-link:hover {
    color:white !important;
    
}
.item {
    display:inline-block;
    list-style:none;
    padding:20px;
    margin:0 50px;
}

a.nuxt-link-active {
    color:lightgreen;
}
.navbar {
    background-color:#479333;
    color:white;
    box-shadow:0px 2px 8px 1px #A4A4A4;
    margin-bottom:20px;
}
.nav-btn {
    color:#479333;
    font-weight: bold;
    background-color:white;
    border:none;
    padding:5px 15px;
    border-radius:20px;
}
.nav-btn:hover {
    cursor: pointer;
    background-color:#479333;
    color:white;
    border:2px solid white;
}
</style>
