<template>
    <div>
        <h1>hello world</h1>    

        <section v-scroll-reveal.reset>
            <h1>Tada!</h1>
        </section>

        <section v-scroll-reveal.reset="{delay: 250}">
            <h1>late scroll</h1>
        </section>
    </div>
</template>

<script>

import VueScrollReveal from 'vue-scroll-reveal';
import Vue from 'vue';

Vue.use(VueScrollReveal);
Vue.use(VueScrollReveal, {
  class: 'v-scroll-reveal',
  duration: 800,
  scale: 1,
  distance: '10px',
  mobile: false
});
export default {
    
}
</script>
