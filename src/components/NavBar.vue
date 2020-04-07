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
/* eslint-disable no-undef */
export default {
  name: 'NavBar',
  data() {
    return {};
  },
  methods: {
    homestatus() {
      homestatus();
    },
    mapstatus() {
      mapstatus();
    },
    aboutstatus() {
      aboutstatus();
    },
    addstatus() {
      addstatus();
    },
    contactstatus() {
      contactstatus();
    },
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
