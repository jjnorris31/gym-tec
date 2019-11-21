<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-container fill-height>
    <v-layout column>
      <!-- header y subtítulo -->
      <v-flex>
        <v-layout
          row
          justify-space-between>
          <!-- mensaje de bienvenida -->
          <v-flex
            :mb-4="$vuetify.breakpoint.smAndUp"
            class="dashboard-header-container">
            <v-layout column>
              <v-flex>
                <h1 class="app-header">Hola, {{currentUser}}</h1>
                <p
                  v-if="$vuetify.breakpoint.xsOnly"
                  class="app-header-sub grey--text text--darken-3"> {{ subtitle.mobile }}</p>
                <p
                  v-else
                  class="app-header-sub grey--text text--darken-3">
                  {{ paddockSelected }}</p>
              </v-flex>
            </v-layout>
          </v-flex>
          <!-- número de usuario, visible en md and down -->
          <v-flex
            hidden-lg-and-up
            hidden-xs-only
            align-self-center>
            <v-card
              flat
              color="primary"
              dark
              style="font-family: Cabin, sans-serif;"
            >
              <v-card-title style="font-size: 35px">A0163088</v-card-title>
              <v-card-text style="font-size: 18px">Alumno</v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
      <!-- botones agregar animal y rancho, visible xs only -->
      <v-flex
        hidden-sm-and-up
        mb-4
        style="font-family: Cabin, sans-serif;">
        <v-layout
          row
          justify-space-around>
          <v-btn
            depressed
            to="animalform"
            dark
            color="blue darken-4"
            rounded>
            <v-icon left>mdi-clipboard-account</v-icon>
            Mi rutina
          </v-btn>
          <v-btn
            depressed
            to="/apphome/paddockform"
            dark
            color="blue darken-4"
            rounded><v-icon left>mdi-progress-clock</v-icon>Progreso</v-btn>
        </v-layout>
      </v-flex>
      <!-- cards -->
      <v-flex>
        <v-layout
          row
          :justify-space-around="$vuetify.breakpoint.xsOnly"
          :justify-space-between="$vuetify.breakpoint.smAndUp"
          wrap
        >
          <!-- card animales en sistema -->
          <v-flex
            lg3
            md4
            sm12
            xs5
            mb-4
            hidden-sm-and-up>
            <v-card
              :min-width="$vuetify.breakpoint.smAndUp ? 250 : 100"
              :max-height="$vuetify.breakpoint.xsOnly ? 150 : 1240"
              color="grey lighten-3"
              flat
              disabled
            >
              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-title
                    class="dashboard-header-card">Guía</v-list-item-title>
                  <v-list-item-subtitle
                    v-if="$vuetify.breakpoint.xsOnly"
                    class="dashboard-sub-card">Guía de ejercicios</v-list-item-subtitle>
                  <v-list-item-subtitle
                    v-else
                    class="dashboard-sub-card">Guía</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-card-text
              class="dashboard-card-graphics">
                <v-layout
                  align-center
                  :column="$vuetify.breakpoint.xsOnly">
                  <v-flex
                    xs6
                    class="dashboard-card-number"
                    hidden-xs-only
                  >
                    280
                  </v-flex>
                  <v-flex xs6>
                    <v-img
                      src="../bike.png"
                      alt="Sunny image"
                      :width="$vuetify.breakpoint.smAndUp ? 92 : 65"
                    ></v-img>
                  </v-flex>
                </v-layout>
              </v-card-text>
            </v-card>
          </v-flex>
          <!-- card de celo -->
          <v-flex
            lg6
            md12
            sm12
            order-xs5
            order-sm1
            order-md1
            :pr-2="$vuetify.breakpoint.lgAndUp"
            xs12
            mb-4>
            <v-card
              :min-width="$vuetify.breakpoint.smAndUp ? 360 : 100"
              color="grey lighten-3"
              flat
            >
              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-title class="dashboard-header-card">Cardio</v-list-item-title>
                  <v-list-item-subtitle
                    v-if="$vuetify.breakpoint.xsOnly"
                    class="dashboard-sub-card">Distancia durante el mes</v-list-item-subtitle>
                  <v-list-item-subtitle
                    v-else
                    class="dashboard-sub-card">Rutinas en el Sistema</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-card-text class="dashboard-text-spacer">
                <v-layout
                  :column="$vuetify.breakpoint.xsOnly"
                  align-center>
                  <v-flex
                    xs10
                    class="dashboard-card-number"
                    hidden-xs-only>
                    150
                  </v-flex>
                  <v-flex xs2 hidden-xs-only>
                    <v-img
                      src="../bike.png"
                      alt="Sunny image"
                      :width="$vuetify.breakpoint.smAndUp ? 92 : 65"
                    ></v-img>
                  </v-flex>
                </v-layout>
              </v-card-text>
              <v-flex>
                <v-card-text>
                  <v-slider
                    class="dashboard-title-slider"
                    v-model="dayHeat"
                    step="1"
                    :max="5"
                    thumb-label="always"
                    label="Kilómetros"
                    ticks="always"
                    tick-size="4"
                  >
                    <template v-slot:thumb-label="props">
                      <v-icon dark>
                        {{ season(props.value) }}
                      </v-icon>
                    </template>
                  </v-slider>
                </v-card-text>
              </v-flex>
              <v-flex hidden-xs-only>
                <v-card-text class="dashboard-card-text">
                  Descripción del Ejercicio
                </v-card-text>
              </v-flex>
            </v-card>
          </v-flex>
          <!-- card de ganancias, versión sm y md -->
          <v-flex
            lg5
            md5
            order-md2
            order-sm2
            sm12
            hidden-lg-and-up
            hidden-xs-only
            :mb-4="$vuetify.breakpoint.smAndUp">
            <v-card
              :min-width="$vuetify.breakpoint.smAndUp ? 360 : 100"
              color="grey lighten-3"
              flat
            >
              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-title
                    class="dashboard-header-card">Progreso</v-list-item-title>
                  <v-list-item-subtitle
                    class="dashboard-sub-card">Progreso
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-card-text
                class="dashboard-card-graphics">
                <v-layout
                  align-center>
                  <v-flex
                    xs10
                    class="dashboard-card-number">
                    10
                  </v-flex>
                  <v-flex xs2>
                    <v-img
                      src="https://img.icons8.com/cotton/2x/money.png"
                      alt="Sunny image"
                      :width="92"
                    ></v-img>
                  </v-flex>
                </v-layout>
              </v-card-text>
              <v-flex>
                <v-card-text class="dashboard-card-text">
                  Descripción del Ejercicio
                </v-card-text>
              </v-flex>
            </v-card>
          </v-flex>
          <!-- contenedor de número de vacas, collares y ganancias, versión lg and up -->
          <v-flex
            lg6
            md12
            :pl-2="$vuetify.breakpoint.lgAndUp"
            order-sm2
            mb-4
            hidden-md-and-down>
            <v-layout
              fill-height
              justify-space-between
              :column="$vuetify.breakpoint.lgAndUp"
              :row="$vuetify.breakpoint.mdAndDown">
              <!-- collares y número de vacas -->
              <v-flex lg6>
                <v-layout
                  row>
                  <v-card
                    min-width="95%"
                    class="mx-auto"
                    flat
                    color="blue darken-4"
                    dark
                    style="font-family: Cabin, sans-serif;"
                  >
                    <v-card-title style="font-size: 35px">A0163088</v-card-title>
                    <v-card-text style="font-size: 18px">Alumno</v-card-text>
                  </v-card>
                </v-layout>
              </v-flex>
              <!-- card de ganancias -->
              <v-flex
                lg5
                md7>
                <v-card
                  min-width="360"
                  color="grey lighten-3"
                  flat
                >
                  <v-list-item two-line>
                    <v-list-item-content>
                      <v-list-item-title
                        class="dashboard-header-card">Progreso</v-list-item-title>
                      <v-list-item-subtitle
                        class="dashboard-sub-card">Calorías Quemadas
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                  <v-card-text>
                    <v-layout align-center>
                      <v-flex xs10 id="revenues-number">
                        818 kcal
                      </v-flex>
                      <v-flex xs2>
                        <v-img
                          src="https://img.icons8.com/cotton/2x/exercise.png"
                          alt="Sunny image"
                          width="92"
                        ></v-img>
                      </v-flex>
                    </v-layout>
                  </v-card-text>
                  <v-card-text class="dashboard-card-text">
                    De acuerdo a los datos proporcionados.
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-flex>
          <!-- card días en leche -->
          <v-flex
            lg4
            md5
            :pr-2="$vuetify.breakpoint.lgAndUp"
            order-sm3
            order-md3
            sm12
            xs5
            :mb-0="$vuetify.breakpoint.lgAndUp"
            :mb-4="$vuetify.breakpoint.smAndUp">
            <v-card
              :min-width="$vuetify.breakpoint.smAndUp ? 250 : 100"
              color="grey lighten-3"
              flat
              @click="fowardRoutines"
            >
              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-title
                    class="dashboard-header-card">Rutinas</v-list-item-title>
                  <v-list-item-subtitle
                    v-if="$vuetify.breakpoint.xsOnly"
                    class="dashboard-sub-card">Ejemplos de rutinas</v-list-item-subtitle>
                  <v-list-item-subtitle
                    v-else
                    class="dashboard-sub-card">Cuádricep y Gastrognemios</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-card-text
              class="dashboard-card-graphics">
                <v-layout
                  align-center
                  :column="$vuetify.breakpoint.xsOnly">
                  <v-flex
                    xs10
                    class="dashboard-card-number"
                    hidden-xs-only
                    >
                    5
                  </v-flex>
                  <v-flex xs2>
                    <v-img
                      src="../pgs.png"
                      alt="Sunny image"
                      :width="$vuetify.breakpoint.smAndUp ? 92 : 65"
                    ></v-img>
                  </v-flex>
                </v-layout>
              </v-card-text>
              <v-flex hidden-xs-only>
                <v-card-text class="dashboard-card-text">
                  Ejercicios por rutina
                </v-card-text>
              </v-flex>
            </v-card>
          </v-flex>
          <!-- card de vacas enfermas -->
          <v-flex
            lg4
            md5
            :pr-2="$vuetify.breakpoint.lgAndUp"
            :pl-2="$vuetify.breakpoint.lgAndUp"
            order-sm4
            order-md4
            sm12
            xs5
            mb-4>
            <v-card
              :min-width="$vuetify.breakpoint.smAndUp ? 250 : 100"
              color="grey lighten-3"
              flat
              disabled
            >
              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-title
                    class="dashboard-header-card">Nutrición</v-list-item-title>
                  <v-list-item-subtitle
                    v-if="$vuetify.breakpoint.xsOnly"
                    class="dashboard-sub-card">Nutrición y dietas</v-list-item-subtitle>
                  <v-list-item-subtitle
                    v-else
                    class="dashboard-sub-card">Lumbares</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-card-text
                class="dashboard-card-graphics">
              <v-layout
                  :column="$vuetify.breakpoint.xsOnly"
                  align-center>
                  <v-flex
                    xs10
                    class="dashboard-card-number"
                    hidden-xs-only>
                  2
                  </v-flex>
                  <v-flex xs2>
                    <v-img
                      src="../food.png"
                      alt="Sunny image"
                      :width="$vuetify.breakpoint.smAndUp ? 92 : 65"
                    ></v-img>
                  </v-flex>
                </v-layout>
              </v-card-text>
              <v-flex hidden-xs-only>
                <v-card-text class="dashboard-card-text">
                  Prevenir lesiones y fortalecer el core
                </v-card-text>
              </v-flex>
            </v-card>
          </v-flex>
          <!-- card de vacas gestantes -->
          <v-flex
            lg4
            order-sm5
            order-md5
            md5
            :pl-2="$vuetify.breakpoint.lgAndUp"
            sm12
            xs5>
            <v-card
              :min-width="$vuetify.breakpoint.smAndUp ? 250 : 100"
              color="grey lighten-3"
              flat
              disabled
            >
              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-title
                    class="dashboard-header-card">Herramientas</v-list-item-title>
                  <v-list-item-subtitle
                    v-if="$vuetify.breakpoint.xsOnly"
                    class="dashboard-sub-card">Dispositivos</v-list-item-subtitle>
                  <v-list-item-subtitle
                    v-else
                    class="dashboard-sub-card">Bíceps y Tríceps</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-card-text
                class="dashboard-card-graphics">
              <v-layout
                  align-center
                  :column="$vuetify.breakpoint.xsOnly"
                >
                  <v-flex
                    xs10
                    class="dashboard-card-number"
                    hidden-xs-only>
                  21
                  </v-flex>
                  <v-flex xs2>
                    <v-img
                      src="../trx.png"
                      alt="Sunny image"
                      :width="$vuetify.breakpoint.smAndUp ? 92 : 65"
                    ></v-img>
                  </v-flex>
                </v-layout>
              </v-card-text>
              <v-flex hidden-xs-only>
                <v-card-text class="dashboard-card-text">
                  Hipertrofia muscular
                </v-card-text>
              </v-flex>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>


export default {
  name: 'Dashboard',
  computed: {
    paddockSelected() {
      return 'Esto es lo que necesitas saber sobre tu físico.';
    },
  },
  data: () => ({
    showHeatText: false,
    showGestationText: false,
    showSickText: false,
    showEarningsText: false,
    showDimText: false,
    dayHeat: '',
    days: [
      'Hoy',
      'Ayer',
      'Hace 3 días',
      'Hace 4 días',
      'Hace 5 días',
      'Hace 6 días',
    ],
    icons: [
      'mdi-numeric-0-circle',
      'mdi-numeric-1-circle',
      'mdi-numeric-2-circle',
      'mdi-numeric-3-circle',
      'mdi-numeric-4-circle',
      'mdi-numeric-5-circle',
    ],
    subtitle: {
      mobile: 'Go big or go home!',
    },
    currentUser: 'JuanJo',
  }),
  methods: {
    season(val) {
      return this.icons[val];
    },
    fowardRoutines(){
      this.$store.dispatch('goRoutines');
    },
  },
  mounted() {
    if(this.$store.state.user){
      this.currentUser = this.$store.state.user.user.email;
    }
    
  }
};
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Cabin&display=swap');
  .dashboard-header-card {
    font-family: Cabin, sans-serif;
    font-size: 30px;
  }
  .dashboard-sub-card {
    font-family: Cabin, sans-serif;
    font-size: 15px;
  }
  .dashboard-card-number {
    font-family: Cabin, sans-serif;
    font-size: 80px;
  }
  .dashboard-card-text {
    font-family: Cabin, sans-serif;
    font-size: 15px;
  }
  .dashboard-header-container {
    margin: 0 1rem 0 1rem;
  }
  .dashboard-text-spacer {
    margin-bottom: 1rem;
  }
  .dashboard-title-slider {
    font-family: Cabin, sans-serif;
    font-size: 20px;
  }
  #revenues-number {
    font-family: Cabin, sans-serif;
    font-size: 80px;
  }
  @media (max-width: 600px) {
    .app-header {
      font-size: 25px;
      font-weight: 500;
    }
    .app-header-sub {
      font-family: Cabin, sans-serif;
      font-size: 15px;
    }
    .dashboard-header-card {
      font-size: 20px;
    }
    .dashboard-sub-card {
      font-size: 14px;
    }
    .dashboard-card-number {
      font-size: 50px;
      color: #011936;
    }
    .dashboard-text-spacer{
      margin-bottom: 0;
    }
    .dashboard-card-graphics {
      padding: 2px;
    }
    #revenues-number {
      font-size: 50px;
    }
  }
  /* No greater than 900px, no less than 400px */
  @media (max-width:1650px) and (min-width:1451px) {
    #revenues-number {
      font-size: 70px;
    }
  }
  /* No greater than 900px, no less than 400px */
  @media (max-width:1450px) and (min-width:1264px) {
    #revenues-number {
      font-size: 55px;
    }
  }
</style>
