import Vue from 'vue'
import Vuex from 'vuex'
import firebase from '../firebase';
import router from "./router";


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: '',
  },
  mutations: {
    /**
     * Establece el usuario actual de la aplicación
     * @param state estado default
     * @param user usuario actual
     */
    setUser(state, user) {
      state.user = user;
    }
  },
  actions: {
    signIn(context, payload) {
      firebase.auth.signInWithEmailAndPassword(payload.user, payload.password).then((user) => {
        context.commit('setUser', user);
        router.push('/apphome/dashboard');
      });
    },
    signUp(context, user) {
      firebase.auth.createUserWithEmailAndPassword(user.email, user.password)
        .then((event) => {
          firebase.firestore.collection('users').doc(event.user.uid).set({
            firstName: user.name,
            lastName: user.lastName,
            email: user.email,
            phone: user.phone,
          }).then(() => {
            // do something after sign up
          });
        }).catch((error) => {
        // eslint-disable-next-line no-console
          console.log(error);
        });
    },
    firstUserSet(context) {
      context.commit('setUser', firebase.auth.currentUser);
    },
    signOut(context) {
      firebase.auth.signOut().then(() => {
        context.commit('setUser', null);
        router.push('/');
      });
    },

  },
  getters: {
    getUser(state) {
      return state.user;
    }
  }
})
