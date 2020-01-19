<template>
    <button
    class="button"
    v-bind="$attrs"
    v-on="$listeners"
    ><slot/></button>
</template>
<script>
export default {
    name: 'AppButton'
}
</script>
<style scoped>
.button {
    background-color:#479333;
    border:none;
    border-radius:30px;
    color:white;
    padding:15px;
    width:100px;
    height:60px;
}
.button:hover {
    background-color:white;
    color:#479333;
    border:2px solid #479333;
    -webkit-transition: 0.3s;
    transition: 0.3s;
    outline:none;
}
</style>
