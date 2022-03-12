import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _f2246ffe = () => interopDefault(import('..\\pages\\belajar\\index.vue' /* webpackChunkName: "pages/belajar/index" */))
const _5d6c680c = () => interopDefault(import('..\\pages\\class\\index.vue' /* webpackChunkName: "pages/class/index" */))
const _5cf67f91 = () => interopDefault(import('..\\pages\\home.vue' /* webpackChunkName: "pages/home" */))
const _5fbe5927 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _f996a86e = () => interopDefault(import('..\\pages\\my-class.vue' /* webpackChunkName: "pages/my-class" */))
const _0e5346a6 = () => interopDefault(import('..\\pages\\presence.vue' /* webpackChunkName: "pages/presence" */))
const _0e40372e = () => interopDefault(import('..\\pages\\sandbox-1.vue' /* webpackChunkName: "pages/sandbox-1" */))
const _0b6a01b2 = () => interopDefault(import('..\\pages\\stisla.vue' /* webpackChunkName: "pages/stisla" */))
const _501bc536 = () => interopDefault(import('..\\pages\\user\\index.vue' /* webpackChunkName: "pages/user/index" */))
const _0724391f = () => interopDefault(import('..\\pages\\belajar\\slot.vue' /* webpackChunkName: "pages/belajar/slot" */))
const _e3dd8e4a = () => interopDefault(import('..\\pages\\class\\add.vue' /* webpackChunkName: "pages/class/add" */))
const _02d2f0e0 = () => interopDefault(import('..\\pages\\user\\admin\\index.vue' /* webpackChunkName: "pages/user/admin/index" */))
const _9e4d9504 = () => interopDefault(import('..\\pages\\user\\ghany.vue' /* webpackChunkName: "pages/user/ghany" */))
const _2877c0b8 = () => interopDefault(import('..\\pages\\user\\admin\\_user.vue' /* webpackChunkName: "pages/user/admin/_user" */))
const _2cccfd74 = () => interopDefault(import('..\\pages\\class\\_id.vue' /* webpackChunkName: "pages/class/_id" */))
const _e07b95e6 = () => interopDefault(import('..\\pages\\user\\_id.vue' /* webpackChunkName: "pages/user/_id" */))
const _d3d293e0 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/belajar",
    component: _f2246ffe,
    name: "belajar"
  }, {
    path: "/class",
    component: _5d6c680c,
    name: "class"
  }, {
    path: "/home",
    component: _5cf67f91,
    name: "home"
  }, {
    path: "/login",
    component: _5fbe5927,
    name: "login"
  }, {
    path: "/my-class",
    component: _f996a86e,
    name: "my-class"
  }, {
    path: "/presence",
    component: _0e5346a6,
    name: "presence"
  }, {
    path: "/sandbox-1",
    component: _0e40372e,
    name: "sandbox-1"
  }, {
    path: "/stisla",
    component: _0b6a01b2,
    name: "stisla"
  }, {
    path: "/user",
    component: _501bc536,
    name: "user"
  }, {
    path: "/belajar/slot",
    component: _0724391f,
    name: "belajar-slot"
  }, {
    path: "/class/add",
    component: _e3dd8e4a,
    name: "class-add"
  }, {
    path: "/user/admin",
    component: _02d2f0e0,
    name: "user-admin"
  }, {
    path: "/user/ghany",
    component: _9e4d9504,
    name: "user-ghany"
  }, {
    path: "/user/admin/:user",
    component: _2877c0b8,
    name: "user-admin-user"
  }, {
    path: "/class/:id",
    component: _2cccfd74,
    name: "class-id"
  }, {
    path: "/user/:id",
    component: _e07b95e6,
    name: "user-id"
  }, {
    path: "/",
    component: _d3d293e0,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
