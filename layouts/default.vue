<template>
  <div>
    <Header/>
    <nuxt/>
  </div>
</template>

<script>
import Header from '~/components/header.vue'
export default {
  head: {
    script: [
      { src: 'https://code.jquery.com/jquery-3.3.1.slim.min.js', intergity: 'sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo', crossorigin: 'anonymous'},
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js', intergity: 'sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49', crossorigin: 'anonymous'},
       { src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js', intergity: 'sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy', crossorigin: 'anonymous'}
    ]
  },
  components: {
    Header
  }
}
</script>


<style>

html {
  font-family: 'Roboto', sans-serif; 
}

body {
  margin-top:0;
}
</style>
