/**
 * Created by panxianwen on 2017/6/19.
 */

export const changeIsLogin = ({commit}, value) => {
  commit('CHANGE_ISLOGIN', value)
}

export const changeLoginway = ({commit}, loginWay) => {
  commit('CHANGE_LOGINWAY', loginWay)
}

export const displayArticles = ({commit}, payload) =>{
  commit('DISPLAY_ARTICLES', payload)
}

export const changeArticleFlag = ({commit}, flag) => {
  commit("CHANGE_ARTICLE_FLAG", flag)
}

export const displayTopic = ({commit}, type) => {
  commit('DISPLAY_TOPIC', type)
}

