<template>
    <div class="container" style="margin-top:50px">

        <div class="row">
            <div class="col">
                <div class="img" v-if="loadedPost.thumbnail" style="width:300px;height:300px;" :style="{backgroundImage: 'url(' + loadedPost.thumbnail + ')'}"></div>
        <div v-if="!loadedPost.thumbnail" class="t img"> 
        </div>  
            </div>
            </div>
                <h1 class="title"> {{loadedPost.title}} </h1>
                <p class="date">last updated on: {{loadedPost.updatedDate | date}} </p>
                <p class="author">by: {{loadedPost.email}}</p>
                <p>{{loadedPost.content}} </p>    
            

    </div>
</template>
<script>

import axios from 'axios'
export default {
    asyncData(context) {
        return axios.get('https://vue-posts-7eb6f.firebaseio.com/posts/' + context.params.id + '.json')
        .then(res => {
            return {
                loadedPost: res.data
            }
        })
        .catch(e => context.error(e))
    }
}
</script>
<style scoped>
    .t {
        width:300px;
        height: 300px;
        background-image: url('~assets/images/stock.png');
        background-size:cover;
        padding-top:30px;
    }
    .img {
        margin:0 auto;
        margin-bottom:20px;
        background-size:cover;
    }
    .clear {
        clear:both;
    }
    .date {
        color:grey;
    }
    .author {
        color:grey;
        position: relative;
        bottom:18px;
    }
</style>
