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
    exercises: ['squads, squads'],
    fullPlan: '',
    planIndex: '',
  },
  mutations: {
    /**
     * Establece el usuario actual de la aplicación
     * @param state ...
     * @param user usuario actual
     */
    setUser(state, user) {
      state.user = user;
    },
    /**
     * Establece el plan completo según la rutina
     * @param state ...
     * @param fullPlan plan actual
     */
    setFullPlan(state, fullPlan) {
      console.log(fullPlan);
      state.fullPlan = fullPlan;
    },
    /**
     * Establece la rutina seleccionada
     * @param state
     * @param routine rutina actual
     */
    setRoutine(state, routine){
      state.routine = routine;
    },
    /**
     * Establece la categoría según la rutina
     * @param state
     * @param categories categoria actual
     */
    setCategories(state, categories) {
      state.categories = categories;
    },
    setCategory(state, category){
      state.category = category;
    },
    /**
     * Establecen los ejercicios según la rutina seleccionada
     * por el usuario
     * @param state
     * @param exercises ejercicio actual
     */
    setExercises(state, exercises){
      state.exercises = exercises;
    },
    /**
     * Establece el plan parcial según la rutina
     * @param state
     * @param planIndex plan actual
     */
    setPlanIndex(state, planIndex) {
      state.planIndex = planIndex;
    },
    /**
     * Obtiene el índice de la rutina
     * @param state
     * @param routineIndex índice de rutina actual
     */
    setRoutineIndex(state, routineIndex) {
      state.routineIndex = routineIndex;
    }
  },
  actions: {
    /**
     * Verifica si las credenciales están hechas correctamente
     * y de ser así, manda directamente al dashboard
     * @param context
     * @param payload
     */
    signIn(context, payload) {
      firebase.auth.signInWithEmailAndPassword(payload.user, payload.password).then((user) => {
        context.commit('setUser', user);
        router.push('/apphome/dashboard');
      });
    },
    /**
     * Obtiene la rutina seleccionada por el usuario desde la base de datos,
     * además envía directamente a la pantalla de rutinas
     * @param context
     * @param payload
     * @returns {Promise<void>}
     */
    async selectRoutine(context, payload) {
      context.commit('setRoutine', payload.routineSelected);
      const routineRef = await firebase.firestore.collection('users').doc(firebase.auth.currentUser.uid).collection('routines').doc(payload.routineSelected);
      const routineDoc = await routineRef.get();
      context.commit('setCategories', routineDoc.data());
      await router.push('/apphome/categories');
    },
    /**
     * Carga los ejercicios según el plan seleccionado por el usuario
     * @param context
     * @param payload
     */
    loadExercises(context, payload) {
      let tempArray = [];
      for (let i = 0; i < payload.category.length; i++) {
        tempArray.push(payload.category[i])
      }
      context.commit('setExercises', tempArray);
      router.push('/apphome/routine');
    },
    /**
     * Carga el plan según la categoría seleccionada por el usuario
     * @param context
     * @param payload
     */
    loadPlan(context, payload) {
      context.commit('setCategory', payload.plan);
    },
    /**
     * Carga el plan completo según la categoría seleccionada por el usuario
     * @param context
     * @param payload
     */
    loadFullPlan(context, payload) {
      context.commit('setFullPlan', payload.fullPlan);
    },
    /**
     * Carga el índice del plan según la categoría seleccionada por el usuario
     * @param context
     * @param payload
     */
    loadPlanIndex(context, payload) {
      context.commit("setPlanIndex", payload.planIndex);
    },
    /**
     * Guarda un nuevo ejercicio en la base de datos
     * @param context
     * @param payload
     */
    saveNewExercise(context, payload) {
      let planRef = firebase.firestore.collection('users').doc(firebase.auth.currentUser.uid).collection('routines').doc(this.state.routine);
      let updateObject = this.state.fullPlan;
      let somePlan = this.state.planIndex;
      updateObject.push(payload);
      let tempObject = {somePlan: updateObject};
      planRef.update(tempObject);
      router.push('/apphome/categories');
    },
    goRoutine(){
      router.push('/apphome/routine');
    },
    /**
     * Indica al router que debe de ir a la pantalla de rutinas
     */

    goRoutines() {
      router.push('/apphome/routines');
    },
    /**
     * Registra un nuevo usuario en la base de datos
     * @param context
     * @param user
     */
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
    /**
     * Si el usuario ya inicio sesión ya no es necesario que
     * inicie otra vez
     * @param context
     */
    firstUserSet(context) {
      context.commit('setUser', firebase.auth.currentUser);
    },
    /**
     * Cierra la sesión actual del usuario
     * @param context
     */
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
