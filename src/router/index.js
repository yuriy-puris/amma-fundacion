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
import Artists from '../components/Artists'
import LetterPage from '../components/LetterPage'
import CurrentExhibitions from '../components/CurrentExhibitions'
import UpcomingExhibitions from '../components/UpcomingExhibitions'
import PastExhibitions from '../components/PastExhibitions'
import Artworks from '../components/Artworks'

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: Home
  },
  // {
  //   path: '/artists/:name',
  //   name: 'name',
  //   component: LetterPage,
  //   props: true
  // },
  {
    path: '/about-us/about-amma/',
    name: 'about-amma',
    component: About,
    props: true
  },
  {
    path: '/about-the-collection/',
    name: 'about-the-collection',
    component: Collection,
    props: true,
  },
  {
    path: '/about-the-collection/artworks',
    name: 'artworks',
    component: Artworks,
    props: true
  },
  {
    path: '/exhibitions',
    name: 'exhibitions',
    component: Exhibitions,
    props: true,
    children: [
      {
        path: ':exhibitions',
        name: 'exhibitions',
        component: CurrentExhibitions,
        props: true
      },
      {
        path: ':upcoming-exhibitions',
        name: 'upcoming-exhibitions',
        component: UpcomingExhibitions,
        props: true
      },
      {
        path: ':past-exhibitions',
        name: 'past-exhibitions',
        component: PastExhibitions,
        props: true
      },
    ]
  },
  {
    path: '/artists',
    name:'artists',
    component: Artists,
    props: true,
  },
  {
    path: '/artists/:id',
    component: LetterPage,
    props: true
  },
  {
    path: '/publications/',
    component: Publications
  },
  {
    path: '/programs/',
    name: 'programs',
    component: Programs,
    props: true
  },
  {
    path: '/news/',
    name: 'news',
    component: News
  },
  {
    path: '/contact-us/',
    name: 'contact-us',
    component: Contact
  },
];

export default new Router({
  mode: 'history',
  routes: routes
})
