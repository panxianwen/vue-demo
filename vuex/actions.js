/**
 * Created by panxianwen on 2017/6/19.
 */

export const changeIsLogin = ({commit}, value) => {
  commit('CHANGE_ISLOGIN', value)
}

export const changeLoginway = ({commit}, loginWay) => {
  commit('CHANGE_LOGINWAY', loginWay)
}
