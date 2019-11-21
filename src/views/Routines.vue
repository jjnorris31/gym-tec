<template>
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
                                <h1 class="app-header">Rutinas</h1>
                                <p
                                        class="app-header-sub grey--text text--darken-3"> Aquí están todos los planes disponibles.</p>
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
                            xs12
                            mb-4
                            hidden-sm-and-up>
                        <v-card
                                :min-width="$vuetify.breakpoint.smAndUp ? 250 : 100"
                                :max-height="$vuetify.breakpoint.xsOnly ? 150 : 1240"
                                color="grey lighten-3"
                                flat
                                @click="loadCategory('beginner')"
                        >
                            <v-list-item two-line>
                                <v-list-item-content>
                                    <v-list-item-title
                                            class="dashboard-header-card">Principiantes</v-list-item-title>
                                    <v-list-item-subtitle
                                            v-if="$vuetify.breakpoint.xsOnly"
                                            class="dashboard-sub-card">Si nunca has entrenado con pesas, este plan es para tí.</v-list-item-subtitle>
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
                                                src="../principiante.png"
                                                alt="Sunny image"
                                                :width="$vuetify.breakpoint.smAndUp ? 92 : 65"
                                        ></v-img>
                                    </v-flex>
                                </v-layout>
                            </v-card-text>
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
                    <!-- HIPERTROFIA -->
                    <v-flex
                            lg4
                            md5
                            :pr-2="$vuetify.breakpoint.lgAndUp"
                            order-sm3
                            order-md3
                            sm12
                            xs12
                            mb-4>
                        <v-card
                                :min-width="$vuetify.breakpoint.smAndUp ? 250 : 100"
                                color="grey lighten-3"
                                flat
                                @click="loadCategory('Hipertrofia')"
                        >
                            <v-list-item two-line>
                                <v-list-item-content>
                                    <v-list-item-title
                                            class="dashboard-header-card">Hipertrofia</v-list-item-title>
                                    <v-list-item-subtitle
                                            v-if="$vuetify.breakpoint.xsOnly"
                                            class="dashboard-sub-card">Aumenta la masa muscular rápidamente</v-list-item-subtitle>
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
                                                src="../hipertrofia.png"
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
                            xs12
                            mb-4>
                        <v-card
                                :min-width="$vuetify.breakpoint.smAndUp ? 250 : 100"
                                color="grey lighten-3"
                                flat
                        >
                            <v-list-item two-line>
                                <v-list-item-content>
                                    <v-list-item-title
                                            class="dashboard-header-card">Definición</v-list-item-title>
                                    <v-list-item-subtitle
                                            v-if="$vuetify.breakpoint.xsOnly"
                                            class="dashboard-sub-card">Esculpe ese cuerpo baby!</v-list-item-subtitle>
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
                                                src="../misc.png"
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
                </v-layout>
            </v-flex>
            <div class="text-center">
                <v-btn @click="back" class="mx-2" fab dark color="light-blue darken-1">
                    <v-icon dark>mdi-arrow-left</v-icon>
                </v-btn>
            </div>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "Routine",
        computed: {
            paddockSelected() {
                return 'Esto es lo que necesitas saber sobre tu físico.';
            },
        },
        data: () => ({
        }),
        methods: {
            loadCategory(routine) {
                const payload = {
                    routineSelected: routine
                };
                this.$store.dispatch('selectRoutine', payload);
            },
            back() {
                this.$router.go(-1)
            }
        },
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

