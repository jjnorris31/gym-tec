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
                                <h1 class="app-header">{{ routine }}</h1>
                                <p
                                        v-if="$vuetify.breakpoint.xsOnly"
                                        class="app-header-sub grey--text text--darken-3">¿Nunca has entrenado con pesas? Entonces
                                necesitas ponerte en forma antes de comenzar el trabajo duro, ¡Revisa nuestros planes disponibles!</p>
                                <p
                                        v-else
                                        class="app-header-sub grey--text text--darken-3">
                                    {{ categories }}</p>
                            </v-flex>
                        </v-layout>
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
                            v-for="(category, index) in categories"
                            md4
                            sm12
                            xs12
                            mb-4
                            hidden-sm-and-up>
                        <v-card
                                @click="setExercises(category, index)"
                                :min-width="$vuetify.breakpoint.smAndUp ? 250 : 100"
                                :max-height="$vuetify.breakpoint.xsOnly ? 150 : 1240"
                                color="grey lighten-3"
                                flat
                        >
                            <v-list-item two-line>
                                <v-list-item-content>
                                    <v-list-item-title
                                            class="dashboard-header-card">{{category[0]}}</v-list-item-title>
                                    <v-list-item-subtitle
                                            v-if="$vuetify.breakpoint.xsOnly"
                                            class="dashboard-sub-card">{{category[1]}}</v-list-item-subtitle>
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
                                                src="../dumbell.png"
                                                alt="Sunny image"
                                                :width="$vuetify.breakpoint.smAndUp ? 92 : 65"
                                        ></v-img>
                                    </v-flex>
                                </v-layout>
                            </v-card-text>
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
            categories() {
                console.log(this.$store.getters.getCategories);
                return this.$store.getters.getCategories;
            },
            routine() {
                let routine = this.$store.getters.getRoutine;
                return routine.charAt(0).toUpperCase() + routine.substring(1);
            }
        },
        data: () => ({
        }),
        methods: {
            setExercises(tempCategory, index) {

                let payload = {
                    category: tempCategory.slice(2, tempCategory.length)
                };

                let planPayload = {
                    plan: tempCategory[0]
                };

                let fullPlanPayload = {
                    fullPlan: tempCategory
                };

                let planIndexPayload = {
                    planIndex: index
                };

                this.$store.dispatch('loadExercises', payload);
                this.$store.dispatch('loadPlan', planPayload);
                this.$store.dispatch('loadFullPlan', fullPlanPayload);
                this.$store.dispatch('loadPlanIndex', planIndexPayload);
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

