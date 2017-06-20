/**
 * Created by panxianwen on 2017/6/19.
 */

export default {

  CHANGE_ISLOGIN (state, value) {
   state.islogin = value
  },
  CHANGE_LOGINWAY (state, loginway) {
    state.loginway = loginway
  },
  DISPLAY_ARTICLES (state, payload) {
    state.show = payload.type
    state.articles = payload.articleList
  },
  CHANGE_ARTICLE_FLAG (state, flag) {
    state.articleFlag = flag
  },
  DISPLAY_TOPIC (state, type) {
    state.show = type
    state.topicArticles = state[type + 'TopicArticles']
  }

}
