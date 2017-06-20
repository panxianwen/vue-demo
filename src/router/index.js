import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import Article from '../components/Article.vue'
import ArticleList from '../components/ArticleList.vue'
import Download from '../components/Download.vue'
import Bonus from '../components/Bonus.vue'
import Special from '../components/Special.vue'
import SpecialList from '../components/SpecialList.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      component: Home,
      children: [{
        path: 'article/:type',
        component: ArticleList
      }]
    }, {
      path: '/topic',
      component: Special,
      children: [{
        path: 'topic_article/:type',
        component: SpecialList
      }]
    }, {
      path: '/article/:id',
      component: Article
    }, {
      path: '/download',
      component: Download
    }, {
      path: '/bonus',
      component: Bonus
    }
  ]
})
