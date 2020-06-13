import firabase from 'firebase/app';

export default {
  actions: {
    async login({dispatch, commit}, {email, password}) {
      try {
        await firabase.auth().signInWithEmailAndPassword(email, password);
      } catch (e) {
        commit('setError', e);
        throw e;
      }
    },
    async logout({commit}) {
      await firabase.auth().signOut();
      commit('clearInfo');
    },
    async register({dispatch, commit}, {email, password, name}) {
      try {
        await firabase.auth().createUserWithEmailAndPassword(email, password);
        const uid = await dispatch('getUid');
        await firabase.database().ref(`/users/${uid}/info`).set({
          bill: 10000,
          name
        });
      } catch (e) {
        commit('setError', e);
        throw e;
      }
    },
    getUid() {
      const user = firabase.auth().currentUser;
      return user ? user.uid : null;
    }
  }
}
