import { createStore } from 'vuex';
import type { App } from 'vue';
import state from './state';
import mutations from './mutations';
import actions from './actions';
import a from './modules/a';
import b from './modules/b';
import { isDevMode } from '../utils';
const store = createStore({
  strict: isDevMode(),
  state: () => state,
  mutations,
  actions,
  modules: { a, b },
});
export function setupStore(app: App<Element>) {
  app.use(store);
}
export default store;
