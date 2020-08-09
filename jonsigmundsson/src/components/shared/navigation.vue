<template>
  <v-container>
      <v-navigation-drawer
        :bottom="true"
        v-model="drawer"
        :color="color"
        :expand-on-hover="expandOnHover"
        :mini-variant="miniVariant"
        fixed
        :permanent="permanent"
        :src="bg"
        
        dark
      >
        <v-list
          dense
          nav
          class="py-0"
        >
          <v-list-item two-line :class="miniVariant && 'px-0'">
            <v-list-item-avatar>
              <img :src="portPicture">
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>Portfolio</v-list-item-title>
              <v-list-item-subtitle>Jon Sigmundsson</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>

          <v-list-item
            v-for="item in items"
            :key="item.title"
            link
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        drawer: true,
        items: [
          { title: 'Portfolio', icon: 'mdi-view-dashboard' },
          { title: 'Projects', icon: 'mdi-image' },
          { title: 'Resume', icon: 'mdi-help-box' },
        ],
        color: 'primary',
        colors: [
          'primary',
          'blue',
          'success',
          'red',
          'teal',
        ],
        right: true,
        permanent: true,
        miniVariant: true, 
        expandOnHover: true,
        background: true,
        portPicture: require('../../assets/pictures/face.png')
      }
    },
    computed: {
      bg () {
        return this.background ? 'https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg' : undefined
      },
    },
  }
</script>

