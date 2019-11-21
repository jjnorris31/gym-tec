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
                                <h1 class="app-header">{{category}}</h1>
                                <p
                                        class="app-header-sub grey--text text--darken-3">Realiza esta rutina durante 2 a 3 meses.</p>
                            </v-flex>
                        </v-layout>
                    </v-flex>
                </v-layout>
            </v-flex>
            <!-- rutina por día -->
            <v-flex>
                <v-layout
                        row
                        :justify-space-around="$vuetify.breakpoint.xsOnly"
                        :justify-space-between="$vuetify.breakpoint.smAndUp"
                        wrap
                >
                    <!-- titulo de rutina -->
                    <h1 class="dashboard-sub-routine">Rutina</h1>
                    <!-- card de ejercicio individual -->
                    <v-flex
                            lg3
                            md4
                            sm12
                            xs12
                            mb-4
                            v-for="(item, index) in exercises"
                            mt-4
                            hidden-sm-and-up>
                        <v-card
                                :min-width="$vuetify.breakpoint.smAndUp ? 250 : 100"
                                :max-height="$vuetify.breakpoint.xsOnly ? 150 : 1240"
                                color="grey lighten-3"
                                flat
                        >
                            <v-list-item two-line>
                                <v-list-item-content>
                                    <v-list-item-title
                                            class="dashboard-header-card">{{exercises[index].name}}</v-list-item-title>
                                    <v-list-item-subtitle
                                            v-if="$vuetify.breakpoint.xsOnly"
                                            class="dashboard-sub-card">Series: {{exercises[index].series}}</v-list-item-subtitle>
                                    <v-list-item-subtitle
                                            v-if="$vuetify.breakpoint.xsOnly"
                                            class="dashboard-sub-card">Repeticiones: {{exercises[index].fromReps}} a {{exercises[index].toReps}}</v-list-item-subtitle>
                                </v-list-item-content>
                                <v-list-item-avatar
                                        tile
                                        size="80"
                                        color="grey"
                                ></v-list-item-avatar>
                            </v-list-item>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-flex>
            <div class="text-center">
                <v-btn @click="back" class="mx-2" fab dark color="light-blue darken-1">
                    <v-icon dark>mdi-arrow-left</v-icon>
                </v-btn>
                <v-row justify="center">
                    <v-dialog v-model="dialog" persistent max-width="600px">
                        <template v-slot:activator="{ on }">
                            <v-btn v-on="on" class="mx-2" fab dark color="light-blue darken-1">
                                <v-icon dark>mdi-plus</v-icon>
                            </v-btn>
                        </template>
                        <v-card>
                            <v-card-title>
                                <span class="headline">Nuevo ejercicio</span>
                            </v-card-title>
                            <v-card-text>
                                <v-container>
                                    <v-row>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="name" label="Nombre ejercicio" required></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="fromReps" label="Mínimo de repeticiones" hint="example of helper text only on focus"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field
                                                    v-model="toReps"
                                                    label="Máximo de repeticiones"
                                            ></v-text-field>
                                        </v-col>
                                        <v-col cols="12">
                                            <v-text-field v-model="series" label="Series" required></v-text-field>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="blue darken-1" text @click="dialog = false">Cancelar</v-btn>
                                <v-btn color="blue darken-1" text @click="saveNewRoutine">Guardar</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </v-row>
            </div>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "IndividualRoutine",
        computed: {
            exercises() {
                return this.$store.getters.getExercises;
            },
            category() {
                return this.$store.getters.getCategory;
            }
        },
        data: () => ({
            dialog: false,
            name: '',
            series: '',
            fromReps: '',
            toReps: '',
        }),
        methods: {
            back() {
                this.$router.go(-1)
            },
            saveNewRoutine() {
                let payload = {
                    name: this.name,
                    fromReps: this.fromReps,
                    toReps: this.toReps,
                    series: this.series,
                };
                this.$store.dispatch("saveNewExercise", payload);
                this.dialog = false;
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
    .dashboard-sub-routine {
        font-family: Cabin, sans-serif;
        font-size: 22px;
        font-weight: 500;
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

