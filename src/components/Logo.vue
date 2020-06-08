<template>
<div class="frame">
  <div class="logo">
      <img src="favicon.png"/>
      Camping Map
  </div>
  <div class="quote">
      share your camping spots
  </div>
</div>
</template>

<script>
export default {
  name: 'Logo',
};
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Comic+Neue:ital@1&display=swap');
body{
    color:black;
}
.frame{
    width:100%;
    font-family: 'Comic Neue', cursive;
}
.logo{
    font-size: 6vh;
    @media (min-width: 768px) {
      font-size: 4vw;
    }

}
.quote{
    font-size: 3vw;
    @media (min-width: 768px) {
      font-size: 1.5vw;
    }
}
img{
    height: 4vh;
    margin-right: -15px;
}
</style>
