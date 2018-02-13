import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import About from '../components/About'
import Collection from '../components/Collection'
import Exhibitions from '../components/Exhibitions'
import Publications from '../components/Publications'
import Programs from '../components/Programs'
import News from '../components/News'
import Contact from '../components/Contact'

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/about-us/about-amma/',
    component: About,
  },
  {
    path: '/about-the-collection/',
    component: Collection
  },
  {
    path: '/exhibitions/',
    component: Exhibitions
  },
  {
    path: '/publications/',
    component: Publications
  },
  {
    path: '/programs/',
    component: Programs
  },
  {
    path: '/news/',
    component: News
  },
  {
    path: '/contact-us/',
    component: Contact
  }
];

export default new Router({
  mode: 'history',
  routes: routes
})
