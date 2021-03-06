import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import CategoriesEdit from '../views/CategoriesEdit.vue'
import CategoriesList from '../views/CategoriesList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main,
    children: [
      // 创建一个子路由，对应的组件是CategoryEdit
      { path: 'categories/create', component: CategoriesEdit },
      { path: 'categories/list', component: CategoriesList }

    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
