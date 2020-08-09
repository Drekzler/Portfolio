<template>
    <div class="frontpage">
        <resumebox/>
        <aboutme/>
        <background/>
    </div>
</template>

<script>
import resumebox  from '../frontpage/resumebox.vue'
import aboutme from '../frontpage/aboutme.vue'
import background from '../frontpage/background.vue';
export default {
    
    data(){
        return {};
    },
    components: {
        resumebox,
        aboutme,
        background
    }
}
</script>

<style lang="scss">



</style>


