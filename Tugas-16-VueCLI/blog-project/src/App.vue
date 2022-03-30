<template>
  <!-- App.vue -->

  <v-app>
    <alert/>

    <v-navigation-drawer app v-model="drawer">
      <v-list>
        <v-list-item v-if="!guest">
          <v-list-item-avatar>
            <v-img src="https://randomuser.me/api/portraits/men/2.jpg"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>Rizky Rafi Azhara</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <div class="pa-2" v-if="guest">
          <v-btn block color="primary" class="mb-1" @click="login">
            <v-icon left>mdi-lock</v-icon>
            Login
          </v-btn>
          <v-btn block color="success">
            <v-icon left>mdi-account</v-icon>
            Register
          </v-btn>
        </div>

        <v-divider></v-divider>

        <v-list-item v-for="(item, index) in menus" :key="`menu-${index}`" :to="item.route">
          <v-list-item-icon>
            <v-icon left>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <template v-slot:append v-if="!guest">
        <div class="pa-2">
          <v-btn block color="red" dark @click="logout">
            <v-icon left>mdi-lock</v-icon>
            Logout
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <v-app-bar app color="blue-grey darken-4" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Jabar Coding Camp</v-toolbar-title>

      <v-spacer></v-spacer>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <v-container fluid>
        <v-slide-y-transition>
          <router-view></router-view>
        </v-slide-y-transition>      
      </v-container>
    </v-main>

    <v-footer app>
      Jabar Coding Camp | Vue.js
    </v-footer>
  </v-app>

</template>

<script>
import { mapActions } from "vuex"

export default {
  name: 'App',
  components: {
    Alert: () => import('./components/Alert.vue')
  },
  data: () => ({
    drawer: true,
    menus: [
      {title: 'Home', icon: 'mdi-home', route: '/'},
      {title: 'Blogs', icon: 'mdi-note', route: '/blogs'}
    ],
    guest: true,
  }),

  methods: {
    logout() {
      this.guest = true
      this.setAlert({
        status: true,
        color: 'success',
        text: 'Anda berhasil logout'
      })
    },

    login() {
      this.guest = false
      this.setAlert({
        status: true,
        color: 'success',
        text: 'Anda berhasil login'
      })
    },

    ...mapActions({
      setAlert: 'alert/set'
    })
  }
}
</script>
