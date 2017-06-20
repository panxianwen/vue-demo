import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import Article from '../components/Article.vue'
import ArticleList from '../components/ArticleList.vue'
import Download from '../components/Download.vue'

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
      path: '/article/:id',
      component: Article
    }, {
      path: '/download',
      component: Download
    }
  ]
})
