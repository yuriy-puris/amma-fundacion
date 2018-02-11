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
    path: '/http://amma-test.bigdropinc.net/about-us/about-amma/',
    component: About,
  },
  {
    path: '/http://amma-test.bigdropinc.net/about-the-collection/',
    component: Collection
  },
  {
    path: '/http://amma-test.bigdropinc.net/exhibitions/',
    component: Exhibitions
  },
  {
    path: '/http://amma-test.bigdropinc.net/publications/',
    component: Publications
  },
  {
    path: '/http://amma-test.bigdropinc.net/programs/',
    component: Programs
  },
  {
    path: '/http://amma-test.bigdropinc.net/news/',
    component: News
  },
  {
    path: '/http://amma-test.bigdropinc.net/contact-us/',
    component: Contact
  }
];

export default new Router({
  mode: 'history',
  routes: routes
})
