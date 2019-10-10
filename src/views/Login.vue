<template>
    <v-container
      fill-height
      fluid
      pt-0
      pb-0>
      <v-layout row>
        <v-flex lg3
                md3
                hidden-sm-and-down>
          <v-img
            src="https://timedotcom.files.wordpress.com/2016/02/kayla-itsines-workout-for-motto.jpg"
            height="100%"
            gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
          >
            <v-layout
              pt-4
              pl-4>
              <v-flex
                xs12
                class="login-logo-text app-default-font white--text">
                GymTec+
              </v-flex>
            </v-layout>
          </v-img>
        </v-flex>
        <v-flex
          lg9
          md9
          sm12
          xs12
          class="blue darken-4">
          <v-layout
            row
            justify-center
            fill-height>
            <v-flex
              lg4
              md6
              sm8
              xs8
              align-self-center
              >
              <v-layout
                column
                align-center
                class="app-default-font">
                <h1
                  v-if="$vuetify.breakpoint.mdAndUp"
                  class="white--text">Ve al mejor gimnasio</h1>
                <h1
                  v-if="$vuetify.breakpoint.smAndDown"
                  mt-4
                  class="white--text">GymTec+</h1>
                <p
                  class="login-sub-text blue-grey--text text--lighten-5">
                  Descubre tu máximo potencial
                </p>
                <!-- contenedor de las tabs -->
                <v-flex mb-4>
                  <v-tabs
                    v-model="tabs"
                    fixed-tabs
                    background-color="white"
                    slider-color="blue darken-4"
                    color="blue darken-4"
                  >
                    <v-tab>
                      Login
                    </v-tab>
                    <v-tab>
                      Registrarse
                    </v-tab>
                  </v-tabs>
                  <v-tabs-items v-model="tabs">
                    <!-- tab item de login -->
                    <v-tab-item>
                      <v-layout
                        row
                        justify-center>
                        <!-- email de usuario registrado -->
                        <v-flex
                          xs10
                          mt-4>
                          <v-text-field
                            v-model="user"
                            outlined
                            flat
                            placeholder="email"></v-text-field>
                        </v-flex>
                        <!-- fin de email de usuario registrado -->
                        <!-- contraseña de usuario registrado -->
                        <v-flex xs10>
                          <v-text-field
                            v-model="pass"
                            flat
                            placeholder="contraseña"
                            type="password"
                            persistent-hint
                            outlined
                            color="blue darken-4"
                            background-color="white"></v-text-field>
                        </v-flex>
                        <!-- contraseña de usuario registrado -->
                        <!-- botón signIn y forgot password -->
                        <v-flex xs10>
                          <v-layout
                            row
                            justify-space-around
                            align-center
                            mb-4>
                            <v-flex xs3>
                              <v-btn
                                class="info-button text-none white--text"
                                color="blue darken-4"
                                @click="signIn"
                                depressed
                                block>Login</v-btn>
                            </v-flex>
                            <v-flex xs7>
                              <v-layout>
                                <v-flex
                                  xs12
                                  class="login-button-text blue--text text--darken-4">
                                  ¿Olvidaste tu contraseña?
                                </v-flex>
                              </v-layout>
                            </v-flex>
                          </v-layout>
                        </v-flex>
                      </v-layout>
                    </v-tab-item>
                    <!-- tab item del nuevo registro -->
                    <v-tab-item>
                      <v-layout
                        row
                        justify-center>
                        <!-- nombre del nuevo usuario -->
                        <v-flex xs10
                                mt-4>
                          <v-text-field
                            v-model="newUser.name"
                            flat
                            placeholder="Nombre"
                            persistent-hint
                            outlined
                            color="blue darken-4"
                            background-color="white"></v-text-field>
                        </v-flex>
                        <!-- fin del nombre del nuevo usuario -->
                        <!-- apellido del nuevo usuario -->
                        <v-flex xs10>
                          <v-text-field
                            v-model="newUser.lastName"
                            flat
                            placeholder="Apellido"
                            persistent-hint
                            outlined
                            color="blue darken-4"
                            background-color="white"></v-text-field>
                        </v-flex>
                        <!-- fin del apellido del nuevo usuario -->
                        <!-- dirección del nuevo usuario -->
                        <v-flex xs10>
                          <v-text-field
                            v-model="newUser.address"
                            flat
                            placeholder="Dirección"
                            persistent-hint
                            outlined
                            color="blue darken-4"
                            background-color="white"></v-text-field>
                        </v-flex>
                        <!-- fin de dirección del nuevo usuario -->
                        <!-- correo del nuevo usuario -->
                        <v-flex xs10>
                          <v-text-field
                            v-model="newUser.email"
                            flat
                            placeholder="Correo electrónico"
                            persistent-hint
                            outlined
                            color="blue darken-4"
                            background-color="white"></v-text-field>
                        </v-flex>
                        <!-- fin del correo del nuevo usuario -->
                        <!-- contraseña del nuevo usuario -->
                        <v-flex xs10>
                          <v-text-field
                            v-model="newUser.password"
                            flat
                            placeholder="Contraseña"
                            persistent-hint
                            outlined
                            color="blue darken-4"
                            background-color="white"></v-text-field>
                        </v-flex>
                        <!-- fin de contraseña del nuevo usuario -->
                        <!-- botón registrar -->
                        <v-flex xs10>
                          <v-layout row justify-space-around align-center mb-4>
                            <v-flex xs6>
                              <v-btn
                                class="info-button text-none white--text"
                                color="blue darken-4"
                                @click="signUp"
                                depressed
                                block>Registrarse</v-btn>
                            </v-flex>
                          </v-layout>
                        </v-flex>
                        <!-- fin de botón registrar -->
                      </v-layout>
                    </v-tab-item>
                  </v-tabs-items>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      user: '', // nombre de usuario (cuenta creada)
      pass: '', // contraseña del usuario (cuenta creada)
      tabs: null,
      newUser: { // objeto de nuevo usuario
        name: '', // nombre (nuevo usuario)
        lastName: '', // apellido del nuevo usuario
        phone: '', // número de teléfono del nuevo usuario
        email: '', // correo electrónico del nuevo usuario
        password: '', // contraseña del nuevo usuario
        address: '', // dirección del nuevo usuario
      },
    };
  },
  methods: {
    /**
     * Método que permite iniciar sesión en Firebase Auth
     */
    signIn() {
      const payload = {
        user: this.user,
        password: this.pass,
      };
      this.$store.dispatch('signIn', payload);
    },
    /**
     * Método que permite registrar un nuevo usuario en Firebase Auth
     */
    signUp() {
      this.$store.dispatch('signUp', this.newUser).then(() => {
        // eslint-disable-next-line no-console
        console.log('new user add');
      });
    },
  },
  created() {
    /* permite saber si el usuario ha iniciado sesión o no
    para bloquear determinadas secciones de la aplicación */
    this.$store.dispatch('firstUserSet');
  },
};
</script>

<style scoped>
  .login-sub-text {
    font-size: 20px;
  }
  .login-button-text {
    font-size: 15px;
  }
  .login-logo-text {
    font-weight: 600;
    font-size: 40px;
  }
  @media (max-width: 600px) {
    .login-sub-text {
      font-size: 15px;
    }
    .login-button-text {
      font-size: 12px;
    }
  }
</style>
