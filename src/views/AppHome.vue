<template>
  <v-app style="background-color: white;">
    <!-- navigation drawer-->
    <v-navigation-drawer
      app
      fixed
      enable-resize-watcher
      dark
      overflow
      v-model="drawer"
      :mini-variant="$vuetify.breakpoint.xsOnly"
      color="blue darken-4"
      style="font-family: Cabin, sans-serif"
    >
      <v-list-item two-line>
        <v-list-item-avatar>
          <img src="https://randomuser.me/api/portraits/men/81.jpg">
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>GymTec+</v-list-item-title>
          <v-list-item-subtitle>Ejercicio inteligente</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list
        color="blue darken-4">
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.route"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <template v-slot:append>
        <div class="pa-2">
          <v-btn
            @click="signOut"
            block>Logout</v-btn>
        </div>
      </template>
    </v-navigation-drawer>
    <!-- fin de navigation drawer -->
    <!-- barra superior -->
    <v-app-bar
      app
    >
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title class="app-logo-name"><b>GymTec+</b></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-avatar color="white"
                style="font-family: Cabin, sans-serif; font-size: 20px">
        <span
          class="blue--text text--darken-4">104</span>
      </v-avatar>
      <!-- botón de cambiar de rancho versión móvil -->
      <v-menu bottom left>
        <template v-slot:activator="{ on }">
          <v-btn
            icon
            v-on="on"
          >
            <v-icon color="blue darken-4">mdi-elevator</v-icon>
          </v-btn>
        </template>
        <v-list style="font-family: Cabin, sans-serif;">
          <v-list-item
            v-for="(paddock, index) in paddocks"
            :key="index"
            @click="changePaddock(index)"
          >
            <v-list-item-title>{{ paddock.name }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <!-- fin de botón de cambiar de rancho versión móvil -->
    </v-app-bar>
    <!-- fin de barra superior -->
    <!-- sección principal -->
    <v-content class="app-container">
      <router-view></router-view>
    </v-content>
    <!-- fin de sección principal -->
  </v-app>
</template>

<script>
export default {
  name: 'SmartHome',
  computed: {
    paddocks() {
      return this.$store.getters.getPaddocks;
    },
    user() {
      return this.$store.getters.getUser;
    },
  },
  data: () => ({
    drawer: false, // controla la visibilidad del navigation drawer
    items: [
      { title: 'Dashboard', icon: 'mdi-view-dashboard', route: '/dashboard' },
      { title: 'Ganado', icon: 'mdi-cow' },
      { title: 'Grupos', icon: 'mdi-alpha-g' },
      { title: 'Alertas', icon: 'mdi-bell-ring' },
      { title: 'Cuenta', icon: 'mdi-account-details' },
      { title: 'Configuración', icon: 'mdi-tune' },
    ],
  }),
  methods: {
    /**
     * Método que permite cambiar el rancho
     */
    changePaddock(index) {
      const payload = { userPaddockSelected: this.$store.getters.getPaddocks[index].name };
      this.$store.dispatch('changeLastPaddockSelected', payload);
    },
    /**
     * Método que permite cerrar sesión desde Firebase Auth
     */
    signOut() {
      this.$store.dispatch('signOut');
    },
  },
  created() {
    this.$store.dispatch('loadLastPaddockSelected').then(() => {
      // eslint-disable-next-line
      console.log('last paddock selected event dispatched');
    });
    this.$store.dispatch('fireListenUserPaddocks').then(() => {
      // eslint-disable-next-line
      console.log('paddocks listed event dispatched');
    });
  },
};
</script>

<style>
  .app-header{
    font-family: Cabin, sans-serif;
    font-size: 40px;
    margin-top: 1.5rem;
    font-weight: 500;
  }
  .app-header-sub {
    font-family: Cabin, sans-serif;
    font-size: 20px;
  }
  .app-logo-name {
    font-family: Cabin, sans-serif;
  }
  .app-container {
    margin: 0 50px;
    background-color: white;
  }
  .app-container-no-user {
    margin: 0;
    background-color: darkblue;
  }
  @media (max-width: 600px){
    .app-container {
      margin: 0 1rem;
    }
  }
</style>
