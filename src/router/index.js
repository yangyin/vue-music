import Vue from 'vue'
import Router from 'vue-router'


import firstPage from '../pages/firstPage.vue';
import Home from '../pages/home/home.vue';
import Fade from '../pages/fade/index.vue';
import Manage from '../pages/manage/index.vue';

import HomeMusic from '../pages/home/music/music';

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: '',
    component: firstPage,
    children: [{
      path: 'home',
      component: Home,
      children: [{
        path: 'music',
        component: HomeMusic
      },
        {
          path: 'video',
          component: resolve => require(['../pages/home/video'], resolve)
        },
        {
          path: 'radio_station',
          component: resolve => require(['../pages/home/radio_station'], resolve)
        }
      ],
      beforeEnter: (to, from, next) => {
        to.path == '/home' ? next({
          path: 'home/music'
        }) : next();
      }
    },
      {
        path: 'fade',
        component: Fade
      },
      {
        path: 'manage',
        component: Manage
      },
    ],
    beforeEnter: (to, from, next) => {
      // console.log(to.path)
      to.path == '/' ? next({
        path: 'home'
      }) : next();
    }
  },{
      path: '/search',
      component: resolve => require(['../pages/search'], resolve),
      children: [{
        path: 'single',
        component: resolve => require(['../pages/search/single'], resolve)
      },
        {
          path: 'singer',
          component: resolve => require(['../pages/search/singer'], resolve)
        },
      ]
  },{
    path: '/song_sheet',
    name:'song_sheet',
    component: resolve => require(['../components/song-sheet/index.vue'], resolve)
  },{
    path: '/video',
    name:'video',
    component: resolve => require(['../components/video/index.vue'], resolve)
  },{
    path: '/fine_song',
    name:'fine_song',
    component: resolve => require(['../pages/fine-song'], resolve)
  }

    // {path:'/',redirect:'index'},

  ]
})
