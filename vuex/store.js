/**
 * Created by panxianwen on 2017/6/19.
 */

import Vue from 'vue'
import Vuex from 'vuex'

import * as actions from './actions'
import * as getters from './getters'
import mutactions from './mutactions'

Vue.use(Vuex)

const state = {
  show: 'hot',
  loginway: 'login',
  articleFlag: false,
  islogin: false,
  articles: [],
}

export default new Vuex.Store({
  state,
  mutactions,
  getters,
  actions
})
