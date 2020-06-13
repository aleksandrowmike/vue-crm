import firabase from 'firebase/app';

export default {
  actions: {
    async createCategory({commit, dispatch},{title, limit}) {
      try{
        const uid = await dispatch('getUid');
        const category = await firabase.database().ref(`/users/${uid}/categories`).push({title, limit});
        return {title, limit, id: category.key};
      }catch (e) {
        commit('setError', e);
        throw e;
      }
    }
  }
}
