<template>
  <div class="home">
    <Logo/>
    <NavBar/>
    <home_/>
    <Map/>
    <About/>
    <AddLocation/>
    <Contact/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src

import Logo from '@/components/Logo.vue';
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';
import Map from '@/components/SPA views/Map.vue';
import About from '@/components/SPA views/About.vue';
import AddLocation from '@/components/SPA views/AddLocation.vue';
import Contact from '@/components/SPA views/Contact.vue';
import home_ from '@/components/SPA views/Home.vue';

export default {
  name: 'Home',
  components: {
    Logo,
    NavBar,
    Map,
    Footer,
    About,
    AddLocation,
    Contact,
    home_,
  },
  methods: {
  },
};
</script>
