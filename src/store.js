import Vue from 'vue'
import Vuex from 'vuex'
import firebase from '../firebase';
import router from "./router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: '',
    routine : '',
    routines: '',
    categories: '',
    category: '',
    exercises: '',
    fullPlan: '',
    planIndex: '',
  },
  mutations: {
    /**
     * Establece el usuario actual de la aplicación
     * @param state estado default
     * @param user usuario actual
     */
    setUser(state, user) {
      state.user = user;
    },
    setFullPlan(state, fullPlan) {
      console.log(fullPlan);
      state.fullPlan = fullPlan;
    },
    setRoutine(state, routine){
      state.routine = routine;
    },
    setCategories(state, categories) {
      state.categories = categories;
    },
    setCategory(state, category){
      state.category = category;
    },
    setExercises(state, exercises){
      state.exercises = exercises;
    },
    setPlanIndex(state, planIndex) {
      state.planIndex = planIndex;
    },
    setRoutineIndex(state, routineIndex) {
      state.routineIndex = routineIndex;
    }
  },
  actions: {
    signIn(context, payload) {
      firebase.auth.signInWithEmailAndPassword(payload.user, payload.password).then((user) => {
        context.commit('setUser', user);
        router.push('/apphome/dashboard');
      });
    },
    async selectRoutine(context, payload) {
      context.commit('setRoutine', payload.routineSelected);
      const routineRef = await firebase.firestore.collection('users').doc(firebase.auth.currentUser.uid).collection('routines').doc(payload.routineSelected);
      const routineDoc = await routineRef.get();
      context.commit('setCategories', routineDoc.data());
      await router.push('/apphome/categories');
    },
    loadExercises(context, payload) {
      let tempArray = [];
      for (let i = 0; i < payload.category.length; i++) {
        tempArray.push(payload.category[i])
      }
      context.commit('setExercises', tempArray);
      router.push('/apphome/routine');
    },
    loadPlan(context, payload) {
      context.commit('setCategory', payload.plan);
    },
    loadFullPlan(context, payload) {
      context.commit('setFullPlan', payload.fullPlan);
    },
    loadPlanIndex(context, payload) {
      context.commit("setPlanIndex", payload.planIndex);
    },
    saveNewExercise(context, payload) {

      let planRef = firebase.firestore.collection('users').doc(firebase.auth.currentUser.uid).collection('routines').doc(this.state.routine);
      let updateObject = this.state.fullPlan;

      let somePlan = this.state.planIndex;
      updateObject.push(payload);

      let tempObject = {somePlan: updateObject};
      planRef.update(tempObject);
    },
    goRoutine(){
      router.push('/apphome/routine');
    },
    goRoutines() {
      router.push('/apphome/routines');
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
    },
    getRoutine(state) {
      return state.routine;
    },
    getCategories(state) {
      return state.categories;
    },
    getCategory(state) {
      return state.category;
    },
    getExercises(state) {
      return state.exercises;
    },
    getFullPlan(state) {
      return state.fullPlan;
    },
    getPlanIndex(state) {
      return state.planIndex;
    },
  }
})
