import { createRouter, createWebHistory } from 'vue-router'
import PkIndexView from '@/views/pk/PkIndexView'
import RecordIndexView from '@/views/record/RecordIndexView.vue'
import RanklistIndexView from '@/views/ranklist/RanklistIndexView.vue'
import UserBotIndexView from '@/views/user/bot/UserBotIndexView.vue'
import NotFound from '@/views/error/NotFound.vue'

const routes = [
  // 根目录自动跳到pk页面
  {
    path: "/",
    name: "home",
    redirect: "/pk/",
  },
  {
    path: "/pk/",
    name: "pk_index",
    component: PkIndexView,
  },
  {
    path: "/record/",
    name: "record_index",
    component: RecordIndexView,
  },
  {
    path: "/ranklist/",
    name: "ranklist_index",
    component: RanklistIndexView,
  },
  {
    path: "/user/bot/",
    name: "user_bot_index",
    component: UserBotIndexView,
  },
  {
    path: "/404/",
    name: "404",
    component: NotFound,
  },
  // 路由的匹配由上至下按顺序进行，若都不行，则404
  {
    path: "/:catchAll(.*)",
    redirect: "/404",
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
