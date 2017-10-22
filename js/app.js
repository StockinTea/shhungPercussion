Vue.component('card',{ 
  template:'<div class="card"><div class="card-title"><div class="music"><span class="eng">{{musiceng}}</span><span class="chinese">{{musicchinese}}</span></div><div class="author"><span class="eng">{{authoreng}}</span><span class="chinese">{{authorchinese}}</span></div></div><div class="card-intro">{{intro}}</div><div class="accompany">{{accompany}}</div></div>', 
  props: ['musiceng','musicchinese','authoreng','authorchinese','intro','accompany'] 
})

function carousel() {
  var i;
  var x = document.getElementsByClassName("img-s");
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 4000);
}

const Home =  { template: '#index' };
const About = { template: '<div>About</div>' };
const Music = { template: '#musicList',
 							 data() { return { musicList: music }}};
const Team = { template: '<div>Team</div>' };

const routes = [
  { path: '/home', component: Home, alias: '/' },
  { path: '/about', component: About },
  { path: '/music', component: Music },
  { path: '/team', component: Team }
]

const router = new VueRouter({
  routes
})

const app = new Vue({
  router
}).$mount('#app')
