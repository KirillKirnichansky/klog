import Vuex from 'vuex';
import axios from 'axios';
import Cookie from 'js-cookie'

const createStore = () => {
    return new Vuex.Store({
        state: {
            loadedPosts: [],
            token: null,
            email: null
        },
        mutations: {
            setPosts(state, posts) {
                state.loadedPosts = posts
            },
            addPost(state, post) {
                state.loadedPosts.push(post)
            },
            editPost(state, editedPost) {
                const postIndex = state.loadedPosts.findIndex(post => post.id === editedPost.id);
                state.loadedPosts[postIndex] = editedPost
            },
            setToken(state, token){
                state.token = token;
            },
            clearToken(state) {
                state.token = null;
            },
            setEmail(state, email) {
                state.email = email;
            },
            clearEmail(state) {
                state.email = null;
            }
        },
        actions: {
            nuxtServerInit(vuexContext, context) {
                return axios.get('https://vue-posts-7eb6f.firebaseio.com/posts.json')
                .then(res => {
                    const postsArray = []
                    for (const key in res.data) {
                        postsArray.push({ ...res.data[key], id: key})
                    }
                    vuexContext.commit('setPosts', postsArray)
                })
                .catch(e => context.error(e));
            },
            addPost(vuexContext, post) {
                const createdPost = {
                    ...post,
                    updatedDate: new Date()
                }
                return axios
                .post('https://vue-posts-7eb6f.firebaseio.com/posts.json?auth=' + vuexContext.state.token, createdPost)
                .then(result => {
                    vuexContext.commit('addPost', {...createdPost, id: result.data.name})
                    
                })
                .catch(e => console.log(e))
            },
            editPost(vuexContext, editedPost) {
                return axios.put('https://vue-posts-7eb6f.firebaseio.com/posts/' + editedPost.id + '.json?auth=' + vuexContext.state.token, editedPost)
                .then(res => {
                    vuexContext.commit('editPost',editedPost)
                })
                .catch(e => console.log(e))  
            },
            setPosts(vuexContext, posts) {
                vuexContext.commit('setPosts', posts)
            },
            authenticateUser(vuexContext, data) {
                let authURL = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyBjqChhS7OeZqfs04pTe5v9zLb8nHPN_8Q';
                if (!data.isLogin) {
                    authURL = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyBjqChhS7OeZqfs04pTe5v9zLb8nHPN_8Q';
                }
                console.log(authURL);
                return this.$axios.$post(authURL, {
                    email: data.email,
                    password: data.password,
                    returnSecureToken: true
                }
                ).then(result => {
                    console.log('testing');
                    vuexContext.commit('setToken',result.idToken);
                    localStorage.setItem('token', result.idToken);
                    localStorage.setItem('tokenExpiration', new Date().getTime() + Number.parseInt(result.expiresIn) * 1000);
                    localStorage.setItem('email', data.email);
                    Cookie.set('jwt', result.idToken);
                    Cookie.set('email',data.email);
                    Cookie.set('tokenExpiration', new Date().getTime() + Number.parseInt(result.expiresIn) * 1000);
                })
                .catch(e => console.log(e));
            },
            initAuth(vuexContext, req) {
                let token;
                let tokenExpiration;
                console.log('initAuth');
                if (req) {
                    if (!req.headers.cookie){
                        return;
                    }
                    const jwtCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith('jwt='));
                    if (!jwtCookie){
                        return;
                    }
                    token = jwtCookie.split('=')[1];
                    tokenExpiration = req.headers.cookie.split(';').find(c => c.trim().startsWith('tokenExpiration=')).split('=')[1];
                } else {
                    token = localStorage.getItem('token');
                    tokenExpiration = localStorage.getItem('tokenExpiration');
                } 
                if (new Date().getTime() > +tokenExpiration || !token){
                    vuexContext.dispatch('logout');
                    return;
                }
                vuexContext.commit('setToken', token);
            },
            logout(vuexContext) {
                vuexContext.commit('clearToken');
                vuexContext.commit('clearEmail');
                Cookie.remove('jwt');
                Cookie.remove('tokenExpiration');
                Cookie.remove('email');
                if (process.client) {
                    localStorage.removeItem('token');
                    localStorage.removeItem('tokenExpiration');
                }
            }
        },
        getters: {
            loadedPosts(state) {
                return state.loadedPosts
            },
            isAuthenticated(state) {
                return state.token != null
            },
            author() {
                return Cookie.get('email'); 
            }
        }
    })
}

export default createStore