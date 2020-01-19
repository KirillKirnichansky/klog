<template>
<div>
    <nuxt-link v-if="valid" class="box" style="text-decoration:none;" :to="postLink">
        <article class="post-preview">
          <div v-if="thumbnail" class="post-thumbnail" :style="{backgroundImage: 'url('+thumbnail+')'}"></div>
          <div v-if="!thumbnail" class="post-thumbnail stock"></div>
          <div class="post-content">
            <h1>{{ title }}</h1>
            <p>{{previewText}}</p>
            <p id="author">by: {{author}}</p>
          </div>
        </article>
      </nuxt-link>
</div>
</template>

<script>
import Cookie from 'js-cookie'
export default {
    name: 'PostPreview',
    props: {
        id: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        previewText: {
            type: String,
            required: true
        },
        thumbnail: {
            type: String,
            required: true
        },
        isAdmin: {
            type: Boolean,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        valid: {
            type:Boolean,
            required: false
        }
    },
    data() {
        return {
            author: this.email,
            loggedIn: Cookie.get('email')
        }
    },
    computed: {
        postLink() {
            if (this.isAdmin) {
                if (this.email == Cookie.get('email')){
                    this.author = 'you';
                    return '/admin/edit/' + this.id
                } else {
                    return '/admin/' + this.id
                }
            }
            return '/posts/' + this.id;
        }
    },
    methods: {
        test() {
            if (this.user) {
                if (this.author == this.loggedIn){
                    console.log('true');
                    return true;
                }
                return false;
            }
            return false;
        }
    }
}
</script>


<style scoped>
#author {
    position: relative;
    bottom:12px;
    color:grey;
}
.post-preview {
  background-color:#DFDFDF;
  border-radius:15px;
  padding:20px;
  margin-top:20px;
  height:115px;
  box-shadow:0px 3px 1px 1px #D8D8D8;
}
.post-preview:hover {
    box-shadow:0px 2px 8px 1px #C9C9C9;
    border:1px solid #479333;
}
.post-thumbnail {
  width:75px;
  height:75px;
  float:left;
  margin-right:20px;
  background-size:cover;
}
.post-content {
  color:black;
}
h1 {
    font-size:20px;
}
.stock {
    background-image: url('~assets/images/stock.png');
    }
</style>

