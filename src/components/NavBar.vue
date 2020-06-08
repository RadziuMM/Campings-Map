<template>
 <div class="bar">
    <div @click="changeHomeStatus()">Home</div>
    <div @click="changeMapStatus()">Map</div>
    <div @click="changeAboutStatus()">About</div>
    <div @click="changeAddStatus()">Add Location</div>
    <div @click="changeContactStatus()">Contact</div>
 </div>
</template>

<script>
let homeStatus = false;
let mapStatus = true;
let aboutStatus = false;
let addStatus = false;
let contactStatus = false;
export default {
  name: 'NavBar',
  data() {
    return {};
  },
  methods: {
    changeHomeStatus() {
      homeStatus = true;
      mapStatus = false;
      aboutStatus = false;
      addStatus = false;
      contactStatus = false;
      this.check();
    },
    changeMapStatus() {
      homeStatus = false;
      mapStatus = true;
      aboutStatus = false;
      addStatus = false;
      contactStatus = false;
      this.check();
    },
    changeAboutStatus() {
      homeStatus = false;
      mapStatus = false;
      aboutStatus = true;
      addStatus = false;
      contactStatus = false;
      this.check();
    },
    changeAddStatus() {
      homeStatus = false;
      mapStatus = false;
      aboutStatus = false;
      addStatus = true;
      contactStatus = false;
      this.check();
    },
    changeContactStatus() {
      homeStatus = false;
      mapStatus = false;
      aboutStatus = false;
      addStatus = false;
      contactStatus = true;
      this.check();
    },
    check() {
      if (aboutStatus === true) {
        document.getElementById('about').style.display = 'flex';
      } else {
        document.getElementById('about').style.display = 'none';
      }
      if (mapStatus === true) {
        document.getElementById('map').style.display = 'block';
      } else {
        document.getElementById('map').style.display = 'none';
      }
      if (addStatus === true) {
        document.getElementById('add').style.display = 'flex';
      } else {
        document.getElementById('add').style.display = 'none';
      }
      if (contactStatus === true) {
        document.getElementById('contact').style.display = 'block';
      } else {
        document.getElementById('contact').style.display = 'none';
      }
      if (homeStatus === true) {
        document.getElementById('Home').style.display = 'inline-block';
      } else {
        document.getElementById('Home').style.display = 'none';
      }
    },
  },
};
</script>

<style lang="scss">

body{
    @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@5falsefalse&display=swap');
    font-family: 'Roboto Mono', monospace;
}
.bar{
  display: flex;
  align-items: center;
  justify-content: center;
}
.bar>div{
    float: left;
    margin: 2vw 0 0 1vw;
    font-size: 4vw;
    word-spacing: -5px;
    text-transform: uppercase;
    color:grey;
    transition: ease-in-out 1s;
    @media (min-width: 768px) {
      font-size: 2vw;
      word-spacing: -8px;
    }
}
.bar>div:hover{
    color:black;
    cursor: pointer;
}
</style>
