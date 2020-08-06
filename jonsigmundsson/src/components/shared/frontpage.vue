<template>
    <div class="frontpage">
        <resumebox/>
        <aboutme/>
    </div>
</template>

<script>
import resumebox  from '../frontpage/resumebox.vue'
import aboutme from '../frontpage/aboutme.vue'
export default {
    
    data(){
        return {};
    },
    components: {
        resumebox,
        aboutme
    }
}
</script>

<style lang="scss">



</style>


