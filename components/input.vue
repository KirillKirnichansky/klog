<template>
    <div>
        <label class='label'><slot/></label>
        <div class="clear"></div>
        <div class="form">
        <input
        class="text-input"
        v-if="controlType === 'input'"
        v-bind="$attrs"
        :value="value"
        @input="$emit('input',$event.target.value)"
        >
        <textarea
        class="txtarea-input"
        rows="2"
        v-if="controlType === 'textarea'"
        v-bind="$attrs"
        :value="value"
        @input="$emit('input',$event.target.value)"
        ></textarea>
        </div>
    </div>
</template>
<script>
export default {
    name: 'AppInputControl',
    props: {
        controlType: {
            type: String,
            default: 'input'
        },
        value: {
            type: String,
            default: ''
        }
    }
}
</script>
<style scoped>
.form {
    margin:20px 0;
}
.label {
    font-weight:bold;
    color:black;
    float:left;
}
.text-input {
    box-sizing:border-box;
    float:left;
    position:relative;
    bottom:25px;
    width:100%;
    height:30px;
    padding:10px 0px;
    border:2px solid black;
    border-top:none;
    border-left:none;
    border-right:none;
}
.text-input:focus {
    outline:none;
    border:3px solid #479333;
    border-top:none;
    border-left:none;
    border-right:none;
    -webkit-transition: 0.3s;
    transition: 0.3s;
}
.txtarea-input {
    float:left;
    position:relative;
    bottom:25px;
    width:100%;
    border:2px solid black;
    border-top:none;
    border-left:none;
    border-right:none;
    resize:none;
    rows:"1";
}
.txtarea-input:focus {
    outline:none;
    border:3px solid #479333;
    border-top:none;
    border-left:none;
    border-right:none;
    -webkit-transition: 0.3s;
    transition: 0.3s;
}
.clear {
    clear:both;
}
</style>
