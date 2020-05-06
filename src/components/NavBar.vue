<template>
 <div class="bar">
    <div @click="homestatus()">Home</div>
    <div @click="mapstatus()">Map</div>
    <div @click="aboutstatus()">About</div>
    <div @click="addstatus()">Add Location</div>
    <div @click="contactstatus()">Contact</div>
 </div>
</template>

<script>
let HomeStatus = 0;
let MapStatus = 1;
let AboutStatus = 0;
let AddStatus = 0;
let ContactStatus = 0;
export default {
  name: 'NavBar',
  data() {
    return {};
  },
  methods: {
    homestatus() {
      HomeStatus = 1;
      MapStatus = 0;
      AboutStatus = 0;
      AddStatus = 0;
      ContactStatus = 0;
      this.check();
    },
    mapstatus() {
      HomeStatus = 0;
      MapStatus = 1;
      AboutStatus = 0;
      AddStatus = 0;
      ContactStatus = 0;
      this.check();
    },
    aboutstatus() {
      HomeStatus = 0;
      MapStatus = 0;
      AboutStatus = 1;
      AddStatus = 0;
      ContactStatus = 0;
      check();
    },
    addstatus() {
      HomeStatus = 0;
      MapStatus = 0;
      AboutStatus = 0;
      AddStatus = 1;
      ContactStatus = 0;
      this.check();
    },
    contactstatus() {
      HomeStatus = 0;
      MapStatus = 0;
      AboutStatus = 0;
      AddStatus = 0;
      ContactStatus = 1;
      this.check();
    },
    check() {
      if (AboutStatus === 1) {
        document.getElementById('about').style.display = 'flex';
      } else {
        document.getElementById('about').style.display = 'none';
      }
      if (MapStatus === 1) {
        document.getElementById('map').style.display = 'block';
      } else {
        document.getElementById('map').style.display = 'none';
      }
      if (AddStatus === 1) {
        document.getElementById('add').style.display = 'flex';
      } else {
        document.getElementById('add').style.display = 'none';
      }
      if (ContactStatus === 1) {
        document.getElementById('contact').style.display = 'block';
      } else {
        document.getElementById('contact').style.display = 'none';
      }
      if (HomeStatus === 1) {
        document.getElementById('Home').style.display = 'inline-block';
      } else {
        document.getElementById('Home').style.display = 'none';
      }
}
  },
};
</script>

<style lang="scss">

body{
    @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@500&display=swap');
    font-family: 'Roboto Mono', monospace;
}
.bar{
  display: flex;
  align-items: center;
  justify-content: center;
}
.bar>div{
    float: left;
    margin: 2vw 1vw 1vw 1vw;
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
